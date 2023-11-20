const {
  cadastrarAgendamentoServico,
  listarAgendamentoServico,
  detalharAgendamentoServico,
  listarAgendamentoUsuarioServico,
  detalharAgendamentoUsuarioServico,
  cancelarAgendamentoUsuarioServico,
  editarAgendamentoServico,
  deletarAgendamentoServico,
  listarAgendamentoProfissionalServico,
  editarStatusAgendamentoServico,
} = require('../servicos/index.js')

const cadastrarAgendamentoControlador = async (req, res) => {
  const { id: usuarioLogado } = res.locals.usuarioDecodificado

  const Agendamento = await cadastrarAgendamentoServico(req.body, usuarioLogado)

  return res.status(201).json(Agendamento)
}

const listarAgendamentoUsuarioControlador = async (req, res) => {
  const AgendamentoEncontrado = await listarAgendamentoUsuarioServico(
    res.locals.usuarioDecodificado,
    req.body
  )

  return res.status(200).json(AgendamentoEncontrado)
}

const detalharAgendamentoUsuarioControlador = async (req, res) => {
  const AgendamentoEncontrado = await detalharAgendamentoUsuarioServico(
    res.locals.agendamentoDetalhado
  )

  return res.status(200).json(AgendamentoEncontrado)
}

const cancelarAgendamentoUsuarioControlador = async (req, res) => {
  const AgendamentoEncontrado = await cancelarAgendamentoUsuarioServico(
    res.locals.agendamentoDetalhado
  )

  return res.status(200).json(AgendamentoEncontrado)
}

const listarAgendamentoProfissionalControlador = async (req, res) => {
  const { id } = res.locals.usuarioDecodificado

  const AgendamentoEncontrado = await listarAgendamentoProfissionalServico(id)

  return res.status(200).json(AgendamentoEncontrado)
}

const editarStatusAgendamentoProfissionalControlador = async (req, res) => {
  const {status} = req.body
  const {id : agendamento_id} = req.params
  const { id : usuario_id } = res.locals.usuarioDecodificado
  const AgendamentoEncontrado = await editarStatusAgendamentoServico(usuario_id, agendamento_id, status )

  return res.status(200).json(AgendamentoEncontrado)
}

const detalharAgendamentoProfissionalControlador = async (req, res) => {
  const { id: AgendamentoId } = req.params
  const AgendamentoEncontrado = await listarAgendamentoProfissionalServico(
    res.locals.usuarioDecodificado,
    AgendamentoId
  )

  return res.status(200).json(AgendamentoEncontrado)
}

const listarAgendamentoAdmControlador = async (req, res) => {
  const AgendamentoEncontrado = await listarAgendamentoServico(
    res.locals.usuarioDecodificado
  )

  return res.status(200).json(AgendamentoEncontrado)
}

const detalharAgendamentoAdmControlador = async (req, res) => {
  const { id: AgendamentoId } = req.params
  const AgendamentoEncontrado = await detalharAgendamentoServico(
    res.locals.usuarioDecodificado,
    AgendamentoId
  )

  return res.status(200).json(AgendamentoEncontrado)
}

const editarAgendamentoControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const { id: AgendamentoId } = req.params
  const AgendamentoEditado = await editarAgendamentoServico(
    req.body,
    AgendamentoId,
    usuarioId
  )

  return res.status(200).json(AgendamentoEditado)
}

const deletarAgendamentoControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const { id: AgendamentoId } = req.params
  await deletarAgendamentoServico(AgendamentoId, usuarioId)

  return res.status(200).json({ mensagem: 'Veículo excluido.' })
}

module.exports = {
  cadastrarAgendamentoControlador,
  listarAgendamentoUsuarioControlador,
  detalharAgendamentoUsuarioControlador,
  cancelarAgendamentoUsuarioControlador,
  listarAgendamentoProfissionalControlador,
  detalharAgendamentoProfissionalControlador,
  listarAgendamentoAdmControlador,
  detalharAgendamentoAdmControlador,
  editarAgendamentoControlador,
  deletarAgendamentoControlador,
  editarStatusAgendamentoProfissionalControlador,
}
