const { Erro } = require('../erros')
const { usuarioComFiltroRepositorio } = require('../repositorios/index')
const bcrypt = require('bcrypt')

const verificaLogin = async (req, res, next) => {
  const { email, senha } = req.body

  const usuario = await usuarioComFiltroRepositorio({ email })

  if (!usuario) throw new Erro('Email e/ou senha incorretos.', 401)

  const senhaCriptografada = usuario.senha
  const validarSenha = await bcrypt.compare(senha, senhaCriptografada)

  if (!validarSenha) throw new Erro('Email e/ou senha incorretos.', 401)

  if (!usuario.ativo) {
    throw new Erro(
      'Cadastro inativo, entre em contato com o administrador do sistema.',
      403
    )
  }

  res.locals.usuarioLogin = usuario

  return next()
}

module.exports = verificaLogin
