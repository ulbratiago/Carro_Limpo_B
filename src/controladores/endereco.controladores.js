const {
  cadastrarEnderecoServico,
  detalharEnderecoServico,
  listarEnderecosServico,
  editarEnderecoServico,
  deletarEnderecoServico,
} = require('../servicos/index.js')

const cadastrarEnderecoControlador = async (req, res) => {
  const dadosEndereco = req.body
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const endereco = await cadastrarEnderecoServico(dadosEndereco, usuarioId)

  return res.status(201).json(endereco)
}

const listarEnderecosControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const enderecoEncontrado = await listarEnderecosServico(usuarioId)

  return res.status(200).json(enderecoEncontrado)
}

const detalharEnderecoControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const {id: enderecoId} = req.params
  const usuarioEncontrado = await detalharEnderecoServico(usuarioId, enderecoId)

  return res.status(200).json(usuarioEncontrado)
}

const editarEnderecoControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const {id: enderecoId} = req.params
  const enderecoEditado = await editarEnderecoServico(req.body, enderecoId, usuarioId)
  
  return res.status(200).json(enderecoEditado)
}

const deletarEnderecoControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const {id: enderecoId} = req.params
  await deletarEnderecoServico(enderecoId, usuarioId)

  return res.status(200).json({mensagem: 'Endereço excluido.'})
}

module.exports = {
  cadastrarEnderecoControlador,
  listarEnderecosControlador,
  detalharEnderecoControlador,
  editarEnderecoControlador,
  deletarEnderecoControlador
}
