const { loginServico } = require('../servicos/index.js')

const loginControlador = async (req, res) => {
  const usuarioLogado = await loginServico(req.body)
  
  return res.status(200).json(usuarioLogado)
}

module.exports = loginControlador
