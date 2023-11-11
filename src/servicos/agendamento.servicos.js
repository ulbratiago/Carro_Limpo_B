const { Erro } = require('../erros.js')
const {
  cadastrarAgendamentoRepositorio,
  listarAgendamentoRepositorio,
  detalharAgendamentoRepositorio,
  editarAgendamentoRepositorio,
  deletarAgendamentoRepositorio,
  detalharStatusRepositorio,
} = require('../repositorios/index.js')

const cadastrarAgendamentoServico = async (
  dadosAgendamento,
  servico,
  usuarioLogado
) => {
  const { veiculo_id, profissional_id, data_agendamento, status_id } =
    dadosAgendamento

  const agendamentoCadastrado = await cadastrarAgendamentoRepositorio({
    usuario_id: usuarioLogado,
    veiculo_id,
    profissional_id,
    servico_id: servico.id,
    valor: servico.valor,
    data_agendamento,
    status_id,
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

  const AgendamentoEncontrado = await listarAgendamentoRepositorio(filtro)

  return AgendamentoEncontrado
}

const detalharAgendamentoUsuarioServico = async (agendamentoDetalhado) => {
  return agendamentoDetalhado
}

const cancelarAgendamentoUsuarioServico = async (agendamentoDetalhado) => {
  
  if (agendamentoDetalhado.descricao !== 'Agendado') {
    throw new Erro('Agendamento não pode ser cancelado.', 400)
  }
  const status = await detalharStatusFiltroRepositorio()
  console.log('chegou',agendamentoDetalhado);
  const id = agendamentoDetalhado.id
  const status_id = 5
  const cancelarAgendamento = await editarAgendamentoRepositorio({
    id,
    status_id,
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

module.exports = {
  cadastrarAgendamentoServico,
  listarAgendamentoUsuarioServico,
  detalharAgendamentoUsuarioServico,
  cancelarAgendamentoUsuarioServico,
  editarAgendamentoServico,
  deletarAgendamentoServico,
}
