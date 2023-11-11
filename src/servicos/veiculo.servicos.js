const {
  cadastrarVeiculoRepositorio,
  listarVeiculoRepositorio,
  editarVeiculoRepositorio,
  deletarVeiculoRepositorio,
} = require('../repositorios/index.js')

const cadastrarVeiculoServico = async (dadosVeiculo, usuario_id) => {
  const {
    marca,
    modelo,
    placa,
    ano,
    categoria_id,
  } = dadosVeiculo

  const data_cadastro = new Date()
  const usuario_cadastro = usuario_id

  const veiculoCadastrado = await cadastrarVeiculoRepositorio({
    marca,
    modelo,
    placa,
    ano,
    categoria_id,
    usuario_id,
    usuario_cadastro,
    data_cadastro,
  })

  return veiculoCadastrado
}

const listarVeiculoServico = async (usuarioDecodificado) => {
  const usuario_id = Number(usuarioDecodificado)

  const veiculoEncontrado = await listarVeiculoRepositorio({ usuario_id })

  return veiculoEncontrado
}

const detalharVeiculoServico = async (usuarioDecodificado, veiculoId) => {
  const id = veiculoId
  const usuario_id = Number(usuarioDecodificado)
  const veiculoEncontrado = await listarVeiculoRepositorio({
    id,
    usuario_id,
  })

  return veiculoEncontrado[0]
}

const editarVeiculoServico = async (
  dadosVeiculo,
  veiculoId,
  usuarioDecodificado
) => {
  const {
    marca,
    modelo,
    placa,
    ano,
    categoria_id,
    usuario_id,
    usuario_cadastro,
    data_cadastro,
  } = dadosVeiculo
  const usuarioId = Number(usuarioDecodificado)
  const usuario_atualizacao = usuarioId
  const data_atualizacao = new Date()
  const id = veiculoId

  const veiculoEditado = await editarVeiculoRepositorio(
    {
      marca,
      modelo,
      placa,
      ano,
      categoria_id,
      usuario_id,
      usuario_cadastro,
      data_cadastro,
      usuario_atualizacao,
      data_atualizacao,
    },
    { id }
  )

  return veiculoEditado
}

const deletarVeiculoServico = async (veiculoId, usuarioDecodificado) => {
  const id = veiculoId
  const usuario_id = Number(usuarioDecodificado)

  const veiculoDeletado = await deletarVeiculoRepositorio({ id, usuario_id })

  return veiculoDeletado
}

module.exports = {
  cadastrarVeiculoServico,
  listarVeiculoServico,
  detalharVeiculoServico,
  editarVeiculoServico,
  deletarVeiculoServico,
}
