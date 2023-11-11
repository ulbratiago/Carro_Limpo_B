const {
  listarCategoriasVeiculoRepositorio,
  cadastrarCategoriaVeiculoRepositorio,
  detalharCategoriaVeiculoRepositorio,
  deletarCategoriaVeiculoRepositorio,
} = require('../repositorios/index')

const listarCategoriasVeiculoServico = async () => {
  const categorias = await listarCategoriasVeiculoRepositorio()

  return categorias
}

const detalharCategoriaVeiculoServico = async (id) => {
  const categoria = await detalharCategoriaVeiculoRepositorio(id)

  return categoria[0]
}

const cadastrarCategoriaVeiculoServico = async (descricao) => {
  const categoria = await cadastrarCategoriaVeiculoRepositorio(descricao)

  return categoria[0]
}

const deletarCategoriaVeiculoServico = async (id) => {
  const categoria = await deletarCategoriaVeiculoRepositorio(id)

  return categoria[0]
}

module.exports = {
  listarCategoriasVeiculoServico,
  detalharCategoriaVeiculoServico,
  cadastrarCategoriaVeiculoServico,
  deletarCategoriaVeiculoServico,
}
