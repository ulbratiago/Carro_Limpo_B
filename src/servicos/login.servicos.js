const jwt = require('jsonwebtoken')
const { usuarioComFiltroRepositorio } = require('../repositorios/index.js')

const loginServico = async (userData) => {
  const { email } = userData

  const usuario = await usuarioComFiltroRepositorio({ email })

  const token = jwt.sign(
    { id: usuario.id, tipo_perfil: usuario.tipo_perfil },
    process.env.SECRET_KEY,
    {
      expiresIn: process.env.EXPIRES_IN,
    }
  )

  const usuarioLogado = {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
    tipo_perfil: usuario.tipo_perfil,
    token,
  }
  return usuarioLogado
}

module.exports = loginServico
