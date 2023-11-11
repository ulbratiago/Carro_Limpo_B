const { Erro } = require('../erros.js')
const {
  cadastrarStatusRepositorio,
  listarStatusRepositorio,
  editarStatusRepositorio,
  deletarStatusRepositorio,
} = require('../repositorios/index.js')

const cadastrarStatusServico = async (dadosStatus, usuario_cadastro) => {
  const { descricao } = dadosStatus

  const statusCadastrado = await cadastrarStatusRepositorio({
    descricao,
    usuario_cadastro,
    data_cadastro: new Date(),
  })

  return statusCadastrado
}

const listarStatusServico = async (categoria_id) => {
  const status = await listarStatusRepositorio()
  if (!categoria_id) {
    return status
  }
  const statusFiltrado = status.filter((status) => {
    return categoria_id === status.categoria_id
  })

  if (statusFiltrado.length < 1) {
    throw new Erro('Nenhum status encontrado com o filtro informado.', 404)
  }

  return statusFiltrado
}

const editarStatusServico = async (dadosStatus, statusId) => {
  const { descricao, quantidade_estoque, valor, categoria_id } = dadosStatus

  const statusEditado = await editarStatusRepositorio(Number(statusId), {
    descricao,
    quantidade_estoque,
    valor,
    categoria_id,
  })

  return statusEditado[0]
}

const deletarStatusServico = async (statusId) => {
  const statusDeletado = await deletarStatusRepositorio(Number(statusId))

  if (statusDeletado.length < 1) {
    throw new Erro('Nenhum status deletado.', 400)
  }

  return statusDeletado[0]
}

module.exports = {
  cadastrarStatusServico,
  listarStatusServico,
  editarStatusServico,
  deletarStatusServico,
}
