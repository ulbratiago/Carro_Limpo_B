const {
  cadastrarStatusServico,
  listarStatusServico,
  editarStatusServico,
  deletarStatusServico,
} = require('../servicos/index.js')

const cadastrarStatusControlador = async (req, res) => {
  const dadosStatus = req.body
  const { id: usuarioLogado } = res.locals.usuarioDecodificado
  const status = await cadastrarStatusServico(dadosStatus, usuarioLogado)

  return res.status(201).json(status)
}

const detalharStatusControlador = async (req, res) => {
  const status = res.locals.status

  return res.status(200).json(status)
}

const listarStatusControlador = async (req, res) => {
  const status = await listarStatusServico()

  return res.status(200).json(status)
}

const editarStatusControlador = async (req, res) => {
  const { id: statusId } = req.params
  const statusEditado = await editarStatusServico(req.body, statusId)

  return res.status(200).json(statusEditado)
}

const deletarStatusControlador = async (req, res) => {
  const { id: statusId } = req.params
  await deletarStatusServico(statusId)

  return res.status(200).json({ mensagem: 'Status deletado com sucesso!' })
}

module.exports = {
  cadastrarStatusControlador,
  detalharStatusControlador,
  listarStatusControlador,
  editarStatusControlador,
  deletarStatusControlador,
}
