const {
  cadastrarEnderecoRepositorio,
  listarEnderecosRepositorio,
  editarEnderecoRepositorio,
  deletarEnderecoRepositorio,
} = require('../repositorios/index.js')

const cadastrarEnderecoServico = async (dadosEndereco, usuario_id) => {
  const { logradouro, numero, complemento, bairro, cep, cidade, estado } =
    dadosEndereco

  const data_cadastro = new Date()

  const enderecoCadastrado = await cadastrarEnderecoRepositorio({
    logradouro,
    numero,
    complemento,
    bairro,
    cep,
    cidade,
    estado,
    usuario_id,
    data_cadastro,
  })

  return enderecoCadastrado
}
const listarEnderecosServico = async (usuarioDecodificado) => {
  const usuario_id = Number(usuarioDecodificado)

  const enderecoEncontrado = await listarEnderecosRepositorio({ usuario_id })

  return enderecoEncontrado
}

const detalharEnderecoServico = async (usuarioDecodificado, enderecoId) => {
  const id = enderecoId
  const usuario_id = Number(usuarioDecodificado)
  const enderecoEncontrado = await listarEnderecosRepositorio({
    id,
    usuario_id,
  })

  return enderecoEncontrado[0]
}

const editarEnderecoServico = async (
  dadosEndereco,
  enderecoId,
  usuarioDecodificado
) => {
  
  const {
    logradouro,
    numero,
    complemento,
    bairro,
    cep,
    cidade,
    estado,
    usuario_id,
    data_cadastro,
  } = dadosEndereco
  const usuarioId = Number(usuarioDecodificado)
  const usuario_atualizacao = usuarioId
  const data_atualizacao = new Date()
  const id = enderecoId
  
  const enderecoEditado = await editarEnderecoRepositorio(
    {
      logradouro,
      numero,
      complemento,
      bairro,
      cep,
      cidade,
      estado,
      usuario_id,
      data_cadastro,
      usuario_atualizacao,
      data_atualizacao,
    },
    {id}
  )
    
  return enderecoEditado
}

const deletarEnderecoServico = async (enderecoId, usuarioDecodificado) => {
  const id = enderecoId
  const usuario_id = Number(usuarioDecodificado)

  const enderecoDeletado = await deletarEnderecoRepositorio({ id, usuario_id})

  return enderecoDeletado
}

module.exports = {
  cadastrarEnderecoServico,
  detalharEnderecoServico,
  listarEnderecosServico,
  editarEnderecoServico,
  deletarEnderecoServico,
}
