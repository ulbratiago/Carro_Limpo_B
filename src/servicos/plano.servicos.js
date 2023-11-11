const { Erro } = require('../erros.js')
const {
  cadastrarPlanoRepositorio,
  listarPlanoRepositorio,
  detalharPlanoRepositorio,
  editarPlanoRepositorio,
  deletarPlanoRepositorio,
  cadastrarPlanoContratadoRepositorio,
  listarPlanoContratadoRepositorio,
  editarPlanoContratadoRepositorio,
} = require('../repositorios/index.js')

const cadastrarPlanoServico = async (dadosPlano, usuario_cadastro) => {
  const { descricao, validade, valor } = dadosPlano

  const data_cadastro = new Date()

  const planoCadastrado = await cadastrarPlanoRepositorio({
    descricao,
    validade,
    valor,
    usuario_cadastro,
    data_cadastro,
  })

  return planoCadastrado
}
const listarPlanoServico = async () => {
  const planoEncontrado = await listarPlanoRepositorio()

  return planoEncontrado
}

const detalharPlanoServico = async (id) => {
  const planoEncontrado = await detalharPlanoRepositorio(id)

  return planoEncontrado
}

const editarPlanoServico = async (id, dadosPlano, usuario_atualizacao) => {
  const { descricao, validade, valor } = dadosPlano

  const data_atualizacao = new Date()

  const planoEditado = await editarPlanoRepositorio(
    {
      descricao,
      validade,
      valor,
      usuario_atualizacao,
      data_atualizacao,
    },
    { id }
  )

  return planoEditado[0]
}

const deletarPlanoServico = async (id) => {
  const planoDeletado = await deletarPlanoRepositorio(id)

  return planoDeletado
}

const cadastrarPlanoContratadoServico = async (
  dadosRequisicao,
  dadosPlano,
  usuario_cadastro
) => {

  const { plano_id } = dadosRequisicao
  const { valor, validade } = dadosPlano
  const ativo = true

  const planoContratado = await cadastrarPlanoContratadoRepositorio({
    plano_id,
    usuario_id: dadosRequisicao.usuario_id,
    valor,
    data_ativacao: new Date(),
    validade,
    usuario_cadastro,
    ativo,
  })

  return planoContratado
}

const listarPlanoContratadoServico = async (usuarioLogado, dadosRequisicao) => {
  const { id, tipo_perfil } = usuarioLogado
  const { ativo, usuario_id } = dadosRequisicao
  console.log(id, tipo_perfil, ativo, usuario_id);
  if (tipo_perfil === 1) {
    const filtro = { usuario_id: id }
    if (ativo) {
      filtro.ativo = ativo
    }

    const listarPlano = await listarPlanoContratadoRepositorio(filtro)

    if (!listarPlano || listarPlano.length < 1) {
      throw new Erro('Nenhum plano encontrado com o filtro informado.', 404)
    }
    return listarPlano
  }

  if (tipo_perfil === 0) {
    const filtro = {}

    if (ativo) {
      filtro.ativo = ativo
    }

    if (usuario_id) {
      filtro.usuario_id = usuario_id
    }

    const listarPlano = await listarPlanoContratadoRepositorio(filtro)

    if (!listarPlano || listarPlano.length < 1) {
      throw new Erro('Nenhum plano encontrado com o filtro informado.', 404)
    }
    return listarPlano
  }
}

const detalharPlanoContratadoServico = async (id) => {
  const planoContratado = await listarPlanoContratadoRepositorio({ id })

  return planoContratado[0]
}

const editarPlanoContratadoServico = async (
  id,
  dadosRequisicao,
  dadosPlano,
  usuario_atualizacao
) => {

  const validade =
    Number(dadosPlano.validade) + Number(dadosRequisicao.validade)
  const data_atualizacao = new Date()

  const planoEditado = await editarPlanoContratadoRepositorio(
    {
      validade,
      data_atualizacao,
      usuario_atualizacao,
    },
    { id }
  )

  return planoEditado
}

const inativarPlanoContratadoServico = async (id, usuario_atualizacao) => {
  const data_atualizacao = new Date()
  const ativo = false

  const planoInativado = await editarPlanoContratadoRepositorio(
    {
      data_atualizacao,
      usuario_atualizacao,
      ativo,
    },
    { id }
  )

  return planoInativado
}

module.exports = {
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
}
