const knex = require('../config/conexao_DB')

const cadastrarServicoRepositorio = async (dadosServico) => {
  const servico = await knex('servicos').insert(dadosServico).returning('*')

  return servico[0]
}

const listarServicoRepositorio = async (filtro) => {
  
  const servico = await knex('servicos').where(filtro)

  return servico
}

const editarServicoRepositorio = async (camposParaEditar, id) => {
  const servicoEditado = await knex('servicos')
    .where(id)
    .update(camposParaEditar)
    .returning('*')

  return servicoEditado[0]
}

const deletarServicoRepositorio = async (filtro) => {
  const servicoDeletado = await knex('servicos')
    .delete()
    .where(filtro)
    .returning('*')

  return servicoDeletado[0]
}

module.exports = {
  cadastrarServicoRepositorio,
  listarServicoRepositorio,
  editarServicoRepositorio,
  deletarServicoRepositorio,
}
