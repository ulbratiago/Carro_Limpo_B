const bcrypt = require('bcrypt')
const {
  cadastrarUsuarioRepositorio,
  usuarioPorIdRepositorio,
  editarUsuarioRepositorio,
  deletarUsuarioRepositorio,
  cadastrarPlanoContratadoRepositorio,
  usuarioPorCidadeRepositorio
} = require('../repositorios/index.js')
const { enviarImagem, excluirImagem } = require('../utilitarios/backBlaze.js')

const cadastrarProfissionalServico = async (dadosUsuario, arquivo) => {
  const { nome, cpf, cnpj, email, celular, data_nascimento, senha } =
    dadosUsuario
  const senhaCriptografada = await bcrypt.hash(senha, 10)
  const data_cadastro = new Date()
  const tipo_perfil = 1

  const usuarioCadastrado = await cadastrarUsuarioRepositorio({
    nome,
    cpf,
    cnpj,
    email,
    celular,
    data_nascimento,
    senha: senhaCriptografada,
    tipo_perfil,
    data_cadastro,
  })

  if (!arquivo) {
    return usuarioCadastrado
  }
  const nomePath = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  const extensao = arquivo.mimetype.split('/')

  const path = `usuario/${
    usuarioCadastrado.id
  }/Imagem_Profissional_${nomePath.replaceAll(' ', '_')}.${extensao[1]}`

  const foto_perfil = await enviarImagem(path, arquivo.buffer, arquivo.mimetype)

  const usuarioAtualizado = await editarUsuarioRepositorio(
    { foto_perfil: foto_perfil.path, url_perfil: foto_perfil.url },
    { id: usuarioCadastrado.id }
  )

  await cadastrarPlanoContratadoRepositorio({
    plano_id: 1,
    usuario_id: usuarioCadastrado.id,
    valor: 0,
    data_ativacao: new Date(),
    validade: 15,
    usuario_cadastro: usuarioCadastrado.id,
    ativo: true,
  })

  return usuarioAtualizado
}

const detalharProfissionalServico = async (usuarioDecodificado) => {
  const usuarioId = Number(usuarioDecodificado)
  const usuarioEncontrado = await usuarioPorIdRepositorio(usuarioId)

  delete usuarioEncontrado.senha

  return usuarioEncontrado
}

const listarProfissionalServico = async (cidade) => {
  const usuarioEncontrado = await usuarioPorCidadeRepositorio(cidade)

  delete usuarioEncontrado.senha

  return usuarioEncontrado
}

const editarProfissionalServico = async (
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

  return usuarioEditado
}

const inativarProfissionalServico = async (usuarioDecodificado) => {
  const id = Number(usuarioDecodificado)
  const usuario_atualizacao = id
  const data_atualizacao = new Date()
  const ativo = false
  const usuarioEditado = await editarUsuarioRepositorio(
    {
      usuario_atualizacao,
      data_atualizacao,
      ativo,
    },
    { id }
  )

  return usuarioEditado
}

const deletarProfissionalServico = async (usuarioDecodificado) => {
  const usuarioId = Number(usuarioDecodificado)

  const usuarioDeletado = await deletarUsuarioRepositorio(usuarioId)

  if (usuarioDeletado.foto_perfil) {
    await excluirImagem(usuarioDeletado.foto_perfil)
  }

  return usuarioDeletado
}

module.exports = {
  cadastrarProfissionalServico,
  detalharProfissionalServico,
  editarProfissionalServico,
  inativarProfissionalServico,
  deletarProfissionalServico,
  listarProfissionalServico
}
