const {
  cadastrarProfissionalServico,
  detalharProfissionalServico,
  editarProfissionalServico,
  inativarProfissionalServico,
  deletarProfissionalServico,
  listarProfissionalServico
} = require('../servicos/index.js')

const cadastrarProfissionalControlador = async (req, res) => {
  const dadosUsuario = req.body
  const arquivo = req.file
  const usuario = await cadastrarProfissionalServico(dadosUsuario, arquivo)

  return res.status(201).json(usuario)
}

const detalharProfissionalControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const usuarioEncontrado = await detalharProfissionalServico(usuarioId)

  return res.status(200).json(usuarioEncontrado)
}

const editarProfissionalControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const arquivo = req.file

  await editarProfissionalServico(req.body,arquivo, usuarioId )

  return res.status(200).json({ mensagem: 'Profissional editado com sucesso.' })
}

const inativarProfissionalControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  
  await inativarProfissionalServico(usuarioId)

  return res.status(200).json({ mensagem: 'Profissional inativado.' })
}

const deletarProfissionalControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const usuarioDeletado = await deletarProfissionalServico(usuarioId)

  return res.status(200).json({ mensagem: `Profissional ${usuarioDeletado.nome} excluido com sucesso.` })
}

const listarProfissionalControlador = async (req, res) => {
  const {cidade} = req.query;

  const listaProfissional = await listarProfissionalServico(cidade)

  return res.status(200).json(listaProfissional)
}

module.exports = {
  cadastrarProfissionalControlador,
  detalharProfissionalControlador,
  editarProfissionalControlador,
  inativarProfissionalControlador,
  deletarProfissionalControlador,
  listarProfissionalControlador
}
