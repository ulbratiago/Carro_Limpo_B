const {
  cadastrarServicoServico,
  detalharServicoServico,
  listarServicoServico,
  editarServicoServico,
  deletarServicoServico,
} = require('../servicos/index.js')

const cadastrarServicoControlador = async (req, res) => {
  const dadosServico = req.body
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const arquivo = req.file

  const servico = await cadastrarServicoServico(dadosServico, usuarioId, arquivo)

  return res.status(201).json(servico)
}

const listarServicoControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const servicoEncontrado = await listarServicoServico(usuarioId)

  return res.status(200).json(servicoEncontrado)
}

const detalharServicoControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const { id: servicoId } = req.params
  const servicoEncontrado = await detalharServicoServico(servicoId, usuarioId )

  return res.status(200).json(servicoEncontrado)
}

const editarServicoControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const { id: servicoId } = req.params
  const arquivo = req.file

  const servicoEditado = await editarServicoServico(
    servicoId,
    req.body,
    arquivo,
    usuarioId
  )

  return res.status(200).json(servicoEditado)
}

const deletarServicoControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const { id: servicoId } = req.params
  await deletarServicoServico(servicoId, usuarioId)

  return res.status(200).json({ mensagem: 'Serviço excluido.' })
}

module.exports = {
  cadastrarServicoControlador,
  listarServicoControlador,
  detalharServicoControlador,
  editarServicoControlador,
  deletarServicoControlador,
}
