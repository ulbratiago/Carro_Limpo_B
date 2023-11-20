const {
  cadastrarServicoRepositorio,
  listarServicoRepositorio,
  editarServicoRepositorio,
  deletarServicoRepositorio,
} = require('../repositorios/index.js')
const { enviarImagem } = require('../utilitarios/backBlaze.js')

const cadastrarServicoServico = async (dadosServico, usuario_id, arquivo) => {
  const { nome, descricao, categoria_id, valor } = dadosServico

  const data_cadastro = new Date()
  const usuario_cadastro = usuario_id

  const servicoCadastrado = await cadastrarServicoRepositorio({
    nome,
    descricao,
    categoria_id,
    valor,
    usuario_id,
    usuario_cadastro,
    data_cadastro,
  })

  if (!arquivo) {
    return servicoCadastrado
  }

  const extensao = arquivo.mimetype.split('/')

  const path = `servico/${
    servicoCadastrado.id
  }/Imagem_Servico_${nome.replaceAll(' ', '_')}.${extensao[1]}`

  const imagem = await enviarImagem(path, arquivo.buffer, arquivo.mimetype)

  const servicoAtualizado = await editarServicoRepositorio(
    { imagem: imagem.path, url_imagem: imagem.url },
    { id: servicoCadastrado.id }
  )

  return servicoAtualizado
}

const listarServicoServico = async (usuario_id) => {
  const servicoEncontrado = await listarServicoRepositorio({ usuario_id })

  return servicoEncontrado
}

const detalharServicoServico = async (id) => {
  const servicoEncontrado = await listarServicoRepositorio({ id })

  return servicoEncontrado[0]
}

const editarServicoServico = async (
  id,
  dadosServico,
  arquivo,
  usuario_atualizacao
) => {
  const { nome, descricao, categoria_id, valor } = dadosServico

  const data_atualizacao = new Date()

  const extensao = arquivo.mimetype.split('/')

  const path = `servico/${id}/Imagem_Servico_${nome.replaceAll(' ', '_')}.${
    extensao[1]
  }`

  const imagem = await enviarImagem(path, arquivo.buffer, arquivo.mimetype)

  const servicoEditado = await editarServicoRepositorio(
    {
      nome,
      descricao,
      categoria_id,
      valor,
      imagem: imagem.path,
      url_imagem: imagem.url,
      usuario_atualizacao,
      data_atualizacao,
    },
    { id }
  )

  return servicoEditado
}

const editarServicoSemImagemServico = async (
  id,
  dadosServico,
  usuario_atualizacao
) => {
  const { nome, descricao, categoria_id, valor } = dadosServico

  const data_atualizacao = new Date()

  const servicoEditado = await editarServicoRepositorio(
    {
      nome,
      descricao,
      categoria_id,
      valor,
      usuario_atualizacao,
      data_atualizacao,
    },
    { id }
  )

  return servicoEditado
}

const deletarServicoServico = async (id, usuario_id) => {
  const planoDeletado = await deletarServicoRepositorio({ id, usuario_id })

  return planoDeletado
}

module.exports = {
  cadastrarServicoServico,
  listarServicoServico,
  detalharServicoServico,
  editarServicoServico,
  deletarServicoServico,
  editarServicoSemImagemServico,
}
