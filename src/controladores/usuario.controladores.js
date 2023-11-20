const {
  cadastrarUsuarioServico,
  detalharUsuarioServico,
  editarUsuarioServico,
  inativarUsuarioServico,
  deletarUsuarioServico,
  editarDadosPessoaisUsuarioServico,
  editarSenhaUsuarioServico,
  editarImagemPerfilServico,
} = require('../servicos/index.js')

const cadastrarUsuarioControlador = async (req, res) => {
  const dadosUsuario = req.body
  const usuario = await cadastrarUsuarioServico(dadosUsuario)

  return res.status(201).json(usuario)
}

const detalharUsuarioControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const usuarioEncontrado = await detalharUsuarioServico(usuarioId)

  return res.status(200).json(usuarioEncontrado)
}

const editarUsuarioControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const arquivo = req.file

  await editarUsuarioServico(req.body, arquivo, usuarioId)

  return res.status(200).json({ mensagem: 'Usuário editado com sucesso.' })
}

const inativarUsuarioControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado

  await inativarUsuarioServico(usuarioId)

  return res.status(200).json({ mensagem: 'Usuário inativado.' })
}

const deletarUsuarioControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const usuarioDeletado = await deletarUsuarioServico(usuarioId)

  return res
    .status(200)
    .json({ mensagem: `Usuário ${usuarioDeletado.nome} excluido com sucesso.` })
}

const editarDadosPessoaisUsuarioControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado

  await editarDadosPessoaisUsuarioServico(req.body, usuarioId)

  return res.status(200).json({ mensagem: 'Usuário atualizado com sucesso.' })
}

const editarSenhaUsuarioControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado

  await editarSenhaUsuarioServico(req.body, usuarioId)

  return res.status(200).json({ mensagem: 'Senha atualizada com sucesso.' })
}

const editarImagemPerfilControlador = async (req, res) => {
  const { id: usuarioId } = res.locals.usuarioDecodificado
  const arquivo = req.file
  
  await editarImagemPerfilServico(arquivo, usuarioId)

  return res.status(200).json({ mensagem: 'Imagem atualizada com sucesso.' })
}


module.exports = {
  cadastrarUsuarioControlador,
  detalharUsuarioControlador,
  editarUsuarioControlador,
  inativarUsuarioControlador,
  deletarUsuarioControlador,
  editarDadosPessoaisUsuarioControlador,
  editarSenhaUsuarioControlador,
  editarImagemPerfilControlador
}
