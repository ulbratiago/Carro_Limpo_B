const {
  cadastrarVeiculoServico,
  detalharVeiculoServico,
  listarVeiculoServico,
  editarVeiculoServico,
  deletarVeiculoServico,
} = require('../servicos/index.js')

const cadastrarVeiculoControlador = async (req, res) => {
  const dadosVeiculo = req.body
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const veiculo = await cadastrarVeiculoServico(dadosVeiculo, usuarioId)

  return res.status(201).json(veiculo)
}

const listarVeiculoControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const veiculoEncontrado = await listarVeiculoServico(usuarioId)

  return res.status(200).json(veiculoEncontrado)
}

const detalharVeiculoControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const { id: veiculoId } = req.params
  const veiculoEncontrado = await detalharVeiculoServico(usuarioId, veiculoId)

  return res.status(200).json(veiculoEncontrado)
}

const editarVeiculoControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const { id: veiculoId } = req.params
  await editarVeiculoServico(req.body, veiculoId, usuarioId)

  return res.status(200).json({ mensagem: 'Veículo atualizado com sucesso.' })
}

const deletarVeiculoControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const { id: veiculoId } = req.params
  await deletarVeiculoServico(veiculoId, usuarioId)

  return res.status(200).json({ mensagem: 'Veículo excluido.' })
}

module.exports = {
  cadastrarVeiculoControlador,
  listarVeiculoControlador,
  detalharVeiculoControlador,
  editarVeiculoControlador,
  deletarVeiculoControlador,
}
