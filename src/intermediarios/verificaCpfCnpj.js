const { Erro } = require('../erros.js')
const { usuarioComFiltroRepositorio } = require('../repositorios/index.js')

const verificaCpfCnpj = async (req, res, next) => {
  const { cpf, cnpj } = req.body
  const id = res.locals.usuarioDecodificado
    ? res.locals.usuarioDecodificado.id
    : null

  const usuarioEncontrado = id
    ? await usuarioComFiltroRepositorio({ id })
    : null
  
  if (cpf) {
    const usuarioBanco = await usuarioComFiltroRepositorio({ cpf })

    if (usuarioEncontrado && usuarioEncontrado.cpf === cpf) {
      return next()
    }

    if (usuarioBanco) {
      throw new Erro('CPF inválido.', 409)
    }
  }

  if (cnpj) {
    const usuarioBanco = await usuarioComFiltroRepositorio({ cnpj })
    
    if (usuarioEncontrado && usuarioEncontrado.cnpj === cnpj) {
      return next()
    }

    if (usuarioBanco) {
      throw new Erro('CNPJ inválido.', 409)
    }
  }

  return next()
}

module.exports = verificaCpfCnpj
