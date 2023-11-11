const knex = require('../config/conexao_DB')

const cadastrarAgendamentoRepositorio = async (dadosAgendamento) => {
  const Agendamento = await knex('agendamentos')
    .insert(dadosAgendamento)
    .returning('*')

  return Agendamento[0]
}

const listarAgendamentoRepositorio = async (filtro) => {
  const Agendamento = await knex('agendamentos').where(filtro)

  return Agendamento
}

const detalharAgendamentoRepositorio = async (id, usuarioLogado) => {
  const Agendamento = await knex('agendamentos')
    .where({ 'agendamentos.id': id, 'agendamentos.usuario_id': usuarioLogado })
    .select(
      'agendamentos.id',
      'agendamentos.data_agendamento as data agendamento',
      'usuario.nome',
      'veiculo.marca',
      'veiculo.modelo',
      'veiculo.placa',
      'profissional.nome',
      'servico.nome',
      'status.descricao'
    )
    .leftJoin('usuarios as usuario', 'agendamentos.usuario_id', 'usuario.id')
    .leftJoin('veiculos as veiculo', 'agendamentos.veiculo_id', 'veiculo.id')
    .leftJoin(
      'usuarios as profissional',
      'agendamentos.profissional_id',
      'profissional.id'
    )
    .leftJoin('servicos as servico', 'agendamentos.servico_id', 'servico.id')
    .leftJoin('status', 'agendamentos.status_id', 'status.id')

  return Agendamento[0]
}

const editarAgendamentoRepositorio = async (id, camposParaEditar) => {
  const agendamentoEditado = await knex('agendamentos')
    .where(id)
    .update(camposParaEditar)
  console.log(id, camposParaEditar)
  return agendamentoEditado[0]
}

const deletarAgendamentoRepositorio = async (filtro) => {
  const agendamentoDeletado = await knex('agendamentos')
    .delete()
    .where(filtro)
    .returning('*')

  return agendamentoDeletado[0]
}

module.exports = {
  cadastrarAgendamentoRepositorio,
  listarAgendamentoRepositorio,
  detalharAgendamentoRepositorio,
  editarAgendamentoRepositorio,
  deletarAgendamentoRepositorio,
}
