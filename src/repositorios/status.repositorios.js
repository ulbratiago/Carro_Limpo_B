const knex = require('../config/conexao_DB')

const cadastrarStatusRepositorio = async (dadosStatus) => {
  const statusCadastrado = await knex('status')
    .insert(dadosStatus)
    .returning('*')

  return statusCadastrado[0]
}
const detalharStatusRepositorio = async (id) => {
  return await knex('status')
    .where('status.id', id)
    .select(
      'status.id',
      'status.descricao',
      'usuarios.nome as usuario_cadastro',
      'status.data_cadastro',
      'usuario_atualizacao.nome as usuario_atualizacao',
      'status.data_atualizacao'
    )
    .leftJoin('usuarios', 'usuarios.id', 'status.usuario_cadastro')
    .leftJoin(
      'usuarios as usuario_atualizacao',
      'usuario_atualizacao.id',
      'status.usuario_atualizacao'
    )
    .first()
}

const listarStatusRepositorio = async () => {
  return await knex('status').select('id', 'descricao')
}

const listarStatusFiltroRepositorio = async (filtro) => {
  return await knex('status').where(filtro).select('id', 'descricao').first()
}

const editarStatusRepositorio = async (id, camposParaEditar) => {
  return await knex('status')
    .where({ id })
    .update(camposParaEditar)
    .returning('*')
}

const deletarStatusRepositorio = async (id) => {
  return await knex('status').where({ id }).delete().returning('*')
}

module.exports = {
  cadastrarStatusRepositorio,
  detalharStatusRepositorio,
  listarStatusRepositorio,
  listarStatusFiltroRepositorio,
  editarStatusRepositorio,
  deletarStatusRepositorio,
}
