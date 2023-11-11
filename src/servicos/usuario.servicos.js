const bcrypt = require('bcrypt')
const {
  cadastrarUsuarioRepositorio,
  usuarioPorIdRepositorio,
  editarUsuarioRepositorio,
  deletarUsuarioRepositorio,
} = require('../repositorios/index.js')
const { enviarImagem, excluirImagem } = require('../utilitarios/backBlaze.js')

const cadastrarUsuarioServico = async (dadosUsuario) => {
  const { nome, email, senha } = dadosUsuario

  const senhaCriptografada = await bcrypt.hash(senha, 10)
  const data_cadastro = new Date()
  const tipo_perfil = 2

  const usuarioCadastrado = await cadastrarUsuarioRepositorio({
    nome,
    email,
    senha: senhaCriptografada,
    tipo_perfil,
    data_cadastro,
  })

  return usuarioCadastrado
}

const detalharUsuarioServico = async (usuarioDecodificado) => {
  const usuarioId = Number(usuarioDecodificado)
  const usuarioEncontrado = await usuarioPorIdRepositorio(usuarioId)

  delete usuarioEncontrado.senha

  return usuarioEncontrado
}

const editarUsuarioServico = async (
  dadosUsuario,
  arquivo,
  usuarioDecodificado
) => {
  const { nome, cpf, cnpj, email, celular, data_nascimento, senha } =
    dadosUsuario

  const usuarioId = Number(usuarioDecodificado)
  const senhaCriptografada = await bcrypt.hash(senha, 10)
  const usuario_atualizacao = usuarioId
  const data_atualizacao = new Date()

  const extensao = arquivo.mimetype.split('/') || [0, 0]
  const nomePath = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  const path = `usuario/${usuarioId}/Imagem_Perfil_${nomePath.replaceAll(
    ' ',
    '_'
  )}.${extensao[1]}`

  const foto_perfil = !arquivo
    ? ''
    : await enviarImagem(path, arquivo.buffer, arquivo.mimetype)

  const usuarioEditado = await editarUsuarioRepositorio(
    {
      nome,
      cpf,
      cnpj,
      email,
      celular,
      data_nascimento,
      senha: senhaCriptografada,
      foto_perfil: foto_perfil.path,
      url_perfil: foto_perfil.url,
      usuario_atualizacao,
      data_atualizacao,
    },
    { id: usuarioId }
  )

  delete usuarioEditado.senha

  return usuarioEditado[0]
}

const inativarUsuarioServico = async (usuarioDecodificado) => {
  const usuarioId = Number(usuarioDecodificado)
  const usuario_atualizacao = usuarioId
  const data_atualizacao = new Date()
  const ativo = false
  const usuarioEditado = await editarUsuarioRepositorio(
    {
      usuario_atualizacao,
      data_atualizacao,
      ativo,
    },
    usuarioId
  )

  delete usuarioEditado.senha

  return usuarioEditado[0]
}

const deletarUsuarioServico = async (usuarioDecodificado) => {
  const usuarioId = Number(usuarioDecodificado)

  const usuarioDeletado = await deletarUsuarioRepositorio(usuarioId)

  if (usuarioDeletado.foto_perfil) {
    await excluirImagem(usuarioDeletado.foto_perfil)
  }

  return usuarioDeletado
}

module.exports = {
  cadastrarUsuarioServico,
  detalharUsuarioServico,
  editarUsuarioServico,
  inativarUsuarioServico,
  deletarUsuarioServico,
}
