const { Erro } = require('../erros.js')
const {
  cadastrarAgendamentoRepositorio,
  editarAgendamentoRepositorio,
  deletarAgendamentoRepositorio,
  listarAgendamentoProfissionalRepositorio,
  listarAgendamentoUsuarioRepositorio,
  listarStatusFiltroRepositorio,
} = require('../repositorios/index.js')

const cadastrarAgendamentoServico = async (
  dadosAgendamento,
  usuarioLogado
) => {
  const {
    veiculo_id,
    profissional_id,
    data_agendamento,
    status_id,
    horario_agendamento,
    servico_id,
    valor,
  } = dadosAgendamento

  const agendamentoCadastrado = await cadastrarAgendamentoRepositorio({
    usuario_id: usuarioLogado,
    veiculo_id,
    profissional_id,
    servico_id,
    valor,
    data_agendamento,
    status_id,
    horario_agendamento,
    data_cadastro: new Date(),
  })

  return agendamentoCadastrado
}

const listarAgendamentoUsuarioServico = async (
  usuarioLogado,
  dadosRequisicao
) => {
  const filtro = { usuario_id: usuarioLogado.id }

  for (const i of Object.keys(dadosRequisicao)) {
    if (dadosRequisicao[i]) {
      filtro[i] = dadosRequisicao[i]
    }
  }
  const AgendamentoEncontrado =
    await listarAgendamentoUsuarioRepositorio(filtro)
  // const AgendamentoEncontrado = await listarAgendamentoRepositorio(filtro)

  return AgendamentoEncontrado
}

const detalharAgendamentoUsuarioServico = async (agendamentoDetalhado) => {
  return agendamentoDetalhado
}

const cancelarAgendamentoUsuarioServico = async (agendamentoDetalhado) => {
  
  if (agendamentoDetalhado.descricao !== 'Agendado') {
    throw new Erro('Agendamento não pode ser cancelado.', 400)
  }
  const status = await listarStatusFiltroRepositorio({ descricao: 'Cancelado' })
  
  const id = agendamentoDetalhado.id
  const status_id = status.id
  const cancelarAgendamento = await editarAgendamentoRepositorio(
    {id},
    {status_id,
  })

  return cancelarAgendamento
}

const editarAgendamentoServico = async (
  id,
  dadosAgendamento,
  usuario_atualizacao
) => {
  const { descricao, validade, valor } = dadosAgendamento

  const data_atualizacao = new Date()

  const AgendamentoEditado = await editarAgendamentoRepositorio(
    {
      descricao,
      validade,
      valor,
      usuario_atualizacao,
      data_atualizacao,
    },
    { id }
  )

  return AgendamentoEditado[0]
}

const deletarAgendamentoServico = async (id) => {
  const AgendamentoDeletado = await deletarAgendamentoRepositorio(id)

  return AgendamentoDeletado
}

const listarAgendamentoProfissionalServico = async (filtro) => {
  const listaAgendamentos =
    await listarAgendamentoProfissionalRepositorio(filtro)

  return listaAgendamentos
}

module.exports = {
  cadastrarAgendamentoServico,
  listarAgendamentoUsuarioServico,
  detalharAgendamentoUsuarioServico,
  cancelarAgendamentoUsuarioServico,
  editarAgendamentoServico,
  deletarAgendamentoServico,
  listarAgendamentoProfissionalServico,
}
