const { verify } = require('jsonwebtoken')
const { Erro } = require('../erros')
const { usuarioComFiltroRepositorio } = require('../repositorios/index')

const verificaToken = async (req, res, next) => {
  const estaAutenticado = req.headers.authorization
  if (!estaAutenticado) {
    throw new Erro('Para usar essa rota é necessário estar logado.', 403)
  }

  const token = estaAutenticado.split(' ')[1]
  const usuarioDecodificado = await verify(
    token,
    process.env.SECRET_KEY,
    (erro, usuario) => {
      if (erro) {
        if (erro.name === 'TokenExpiredError') {
          throw new Erro('Token expirado, faça login novamente.', 403)
        } else {
          throw new Erro('Token inválido', 403)
        }
      }
      return usuario
    }
  )

  const id = usuarioDecodificado.id

  const usuario = await usuarioComFiltroRepositorio( {id} )
  if (!usuario) {
    throw new Erro(
      'Usuário não econtrado.',
      403
    )
  }

  if (!usuario.ativo) {
    throw new Erro(
      'Cadastro inativo, entre em contato com o administrador do sistema.',
      403
    )
  }

  res.locals.usuarioDecodificado = usuarioDecodificado

  return next()
}

module.exports = verificaToken
