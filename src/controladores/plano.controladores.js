const {
  cadastrarPlanoServico,
  listarPlanoServico,
  detalharPlanoServico,
  editarPlanoServico,
  deletarPlanoServico,
  cadastrarPlanoContratadoServico,
  listarPlanoContratadoServico,
  detalharPlanoContratadoServico,
  editarPlanoContratadoServico,
  inativarPlanoContratadoServico,
} = require('../servicos/index.js')

const cadastrarPlanoControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const dadosPlano = req.body
  const plano = await cadastrarPlanoServico(dadosPlano, usuarioId)

  return res.status(201).json(plano)
}

const listarPlanoControlador = async (req, res) => {
  const planoEncontrado = await listarPlanoServico()

  return res.status(200).json(planoEncontrado)
}

const detalharPlanoControlador = async (req, res) => {
  const { id } = req.params
  const planoEncontrado = await detalharPlanoServico(id)

  return res.status(200).json(planoEncontrado)
}

const editarPlanoControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const { id } = req.params

  await editarPlanoServico(id, req.body, usuarioId)

  return res.status(200).json({ mensagem: 'Plano editado com sucesso.' })
}

const deletarPlanoControlador = async (req, res) => {
  const { id } = req.params
  const planoDeletado = await deletarPlanoServico(id)

  return res
    .status(200)
    .json({ mensagem: `Plano ${planoDeletado.nome} excluido com sucesso.` })
}
const cadastrarPlanoContratadoControlador = async (req, res) => {
  const { id: usuarioLogado } = res.locals.usuarioDecodificado
  const planoContratado = await cadastrarPlanoContratadoServico(
    req.body,
    res.locals.plano,
    usuarioLogado
  )

  return res.status(201).json(planoContratado)
}

const listarPlanoContratadoControlador = async (req, res) => {
  const planoEncontrado = await listarPlanoContratadoServico(
    res.locals.usuarioDecodificado,
    req.body
  )

  return res.status(201).json(planoEncontrado)
}

const detalharPlanoContratadoControlador = async (req, res) => {
  const { id } = req.params
  const planoEncontrado = await detalharPlanoContratadoServico(id)

  return res.status(201).json(planoEncontrado)
}

const editarPlanoContratadoControlador = async (req, res) => {
  const { id } = req.params
  const { id: usuarioLogado } = res.locals.usuarioDecodificado
  const planoEncontrado = await editarPlanoContratadoServico(
    id,
    req.body,
    res.locals.planoContratado,
    usuarioLogado
  )

  return res.status(201).json(planoEncontrado)
}

const inativarPlanoContratadoControlador = async (req, res) => {
  const { id } = req.params
  const planoEncontrado = await inativarPlanoContratadoServico(id)

  return res.status(201).json(planoEncontrado)
}

module.exports = {
  cadastrarPlanoControlador,
  listarPlanoControlador,
  detalharPlanoControlador,
  editarPlanoControlador,
  deletarPlanoControlador,
  cadastrarPlanoContratadoControlador,
  listarPlanoContratadoControlador,
  detalharPlanoContratadoControlador,
  editarPlanoContratadoControlador,
  inativarPlanoContratadoControlador,
}
