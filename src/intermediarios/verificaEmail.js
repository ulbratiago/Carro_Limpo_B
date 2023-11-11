const { Erro } = require('../erros.js')
const {
  usuarioPorIdRepositorio,
  usuarioComFiltroRepositorio,
} = require('../repositorios/index.js')

const verificaEmail = async (req, res, next) => {
  const { email } = req.body
  
  const usuarioPorEmail = await usuarioComFiltroRepositorio({ email })

  const { id } = res.locals.usuarioDecodificado || false

  if (id) {
    const usuarioEncontrado = await usuarioPorIdRepositorio(id)

    if (usuarioEncontrado.email === email) {
      return next()
    }
  }

  if (usuarioPorEmail) {
    throw new Erro('Já existe usuário cadastrado com o email informado.', 409)
  }

  return next()
}

module.exports = verificaEmail
