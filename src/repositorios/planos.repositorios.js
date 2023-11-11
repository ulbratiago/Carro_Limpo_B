const knex = require('../config/conexao_DB')

const cadastrarPlanoRepositorio = async (dadosPlano) => {
  const planoCadastrado = await knex('planos')
    .insert(dadosPlano)
    .returning(['id', 'descricao', 'validade', 'valor'])

  return planoCadastrado[0]
}

const listarPlanoRepositorio = async () => {
  const planos = await knex('planos')
    .select(
      'planos.id',
      'planos.descricao',
      'planos.validade',
      'planos.valor',
      'usuarios.nome as usuario_cadastro',
      'planos.data_cadastro',
      'usuario_atualizacao.nome as usuario_atualizacao',
      'planos.data_atualizacao'
    )
    .leftJoin('usuarios', 'usuarios.id', 'planos.usuario_cadastro')
    .leftJoin(
      'usuarios as usuario_atualizacao',
      'usuario_atualizacao.id',
      'planos.usuario_atualizacao'
    )

  return planos
}

const detalharPlanoRepositorio = async (id) => {
  const planoEncontrado = await knex('planos')
    .where('planos.id', id)
    .select(
      'planos.id',
      'planos.descricao',
      'planos.validade',
      'planos.valor',
      'usuarios.nome as usuario_cadastro',
      'planos.data_cadastro',
      'usuario_atualizacao.nome as usuario_atualizacao',
      'planos.data_atualizacao'
    )
    .leftJoin('usuarios', 'usuarios.id', 'planos.usuario_cadastro')
    .leftJoin(
      'usuarios as usuario_atualizacao',
      'usuario_atualizacao.id',
      'planos.usuario_atualizacao'
    )

  return planoEncontrado[0]
}

const editarPlanoRepositorio = async (camposParaEditar, id) => {
  return await knex('planos').where(id).update(camposParaEditar).returning('*')
}

const deletarPlanoRepositorio = async (id) => {
  const planoDeletado = await knex('planos').delete().where(id).returning('*')

  return planoDeletado[0]
}

const cadastrarPlanoContratadoRepositorio = async (dadosPlano) => {
  const planoContratado = await knex('plano_ativo')
    .insert(dadosPlano)
    .returning('*')

  return planoContratado[0]
}

const listarPlanoContratadoRepositorio = async (filtro) => {
  const planoContratado = await knex('plano_ativo')
    .where(filtro)
    .returning('*')
    .orderBy('id')

  return planoContratado
}

const editarPlanoContratadoRepositorio = async (camposParaEditar, id) => {
  const planoContratado = await knex('plano_ativo')
    .update(camposParaEditar)
    .where(id)
    .returning('*')

  return planoContratado[0]
}

module.exports = {
  cadastrarPlanoRepositorio,
  listarPlanoRepositorio,
  detalharPlanoRepositorio,
  editarPlanoRepositorio,
  deletarPlanoRepositorio,
  cadastrarPlanoContratadoRepositorio,
  listarPlanoContratadoRepositorio,
  editarPlanoContratadoRepositorio,
}
