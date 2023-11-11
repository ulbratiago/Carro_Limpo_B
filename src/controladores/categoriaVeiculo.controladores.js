const {
  listarCategoriasVeiculoServico,
  detalharCategoriaVeiculoServico,
  cadastrarCategoriaVeiculoServico,
  deletarCategoriaVeiculoServico
} = require('../servicos')

const listarCategoriasVeiculoControlador = async (req, res) => {
  const categorias = await listarCategoriasVeiculoServico()
  return res.status(200).json(categorias)
}

const detalharCategoriaVeiculoControlador = async (req, res) => {
  const {id} = req.params
  const categoria = await detalharCategoriaVeiculoServico(id)
  return res.status(200).json(categoria)
}

const cadastrarCategoriaVeiculoControlador = async (req, res) => {
  const { descricao } = req.body
  const categoria = await cadastrarCategoriaVeiculoServico(descricao)
  return res.status(200).json(categoria)
}

const deletarCategoriaVeiculoControlador = async (req, res) => {
  const { id } = req.params
  const categoria = await deletarCategoriaVeiculoServico(id)

  return res.status(200).json(categoria)
}

module.exports = {
  listarCategoriasVeiculoControlador,
  detalharCategoriaVeiculoControlador,
  cadastrarCategoriaVeiculoControlador,
  deletarCategoriaVeiculoControlador
}
