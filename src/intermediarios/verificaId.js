const { Erro } = require('../erros.js')
const {
  categoriaVeiculoComFiltroRepositorio,
  listarEnderecosRepositorio,
  detalharPlanoRepositorio,
  listarVeiculoRepositorio,
  listarServicoRepositorio,
  usuarioComFiltroRepositorio,
  listarPlanoContratadoRepositorio,
  detalharStatusRepositorio,
  detalharAgendamentoRepositorio,
} = require('../repositorios/index.js')

const verificaId = async (req, res, next) => {
  const { id } = req.params
  const { categoria_id } = req.body
  const { id: usuario_id } = res.locals.usuarioDecodificado
  const caminhoBase = req.baseUrl + req.route.path

  if (categoria_id) {
    const id = categoria_id

    const categoriaEncontrada = await categoriaVeiculoComFiltroRepositorio({
      id,
    })

    if (!categoriaEncontrada) throw new Erro('Categoria não encontrada!', 404)
  }

  if (caminhoBase === '/categoria_veiculo/:id') {
    const categoriaEncontrada = await categoriaVeiculoComFiltroRepositorio({
      id,
    })
    if (!categoriaEncontrada) throw new Erro('Categoria não encontrado!', 404)
  }

  if (caminhoBase === '/endereco/:id') {
    const enderecoEncontrado = await listarEnderecosRepositorio({
      id,
      usuario_id,
    })
    if (enderecoEncontrado.length < 1)
      throw new Erro('Endereço não encontrado!', 404)
  }

  if (caminhoBase === '/plano/:id') {
    const planoEncontrado = await detalharPlanoRepositorio(id)
    if (!planoEncontrado) throw new Erro('Plano não encontrado!', 404)
  }

  if (caminhoBase === '/veiculo/:id') {
    const veiculoEncontrado = await listarVeiculoRepositorio({ id, usuario_id })
    if (veiculoEncontrado.length < 1)
      throw new Erro('Veiculo não encontrado!', 404)
  }

  if (caminhoBase === '/servico/:id') {
    const servicoEncontrado = await listarServicoRepositorio({ id, usuario_id })
    if (!servicoEncontrado) throw new Erro('Serviço não encontrado!', 404)
  }

  if (caminhoBase === '/plano/contratacao') {
    const { plano_id, usuario_id } = req.body

    const planoEncontrado = await detalharPlanoRepositorio(plano_id)

    if (!planoEncontrado) throw new Erro('Plano não encontrado!', 404)

    const usuarioEncontrado = await usuarioComFiltroRepositorio({
      id: usuario_id,
    })
    if (!usuarioEncontrado) throw new Erro('Usuário não encontrado!', 404)

    res.locals.plano = planoEncontrado
  }

  if (caminhoBase === '/plano/contratacao/listar') {
    const { usuario_id } = req.body

    if (usuario_id) {
      const usuarioEncontrado = await usuarioComFiltroRepositorio({
        id: usuario_id,
      })

      if (!usuarioEncontrado) throw new Erro('Usuário não encontrado!', 404)
    }
  }

  if (caminhoBase === '/plano/contratacao/editar/:id') {
    const planoEncontrado = await listarPlanoContratadoRepositorio({
      id,
    })

    if (planoEncontrado.length < 1) throw new Erro('Plano não encontrado!', 404)

    res.locals.planoContratado = planoEncontrado[0]
  }

  if (caminhoBase === '/status/:id') {
    const statusEncontrado = await detalharStatusRepositorio(id)

    if (!statusEncontrado) throw new Erro('Status não encontrado!', 404)

    res.locals.status = statusEncontrado
  }

  if (
    caminhoBase === '/agendamento/usuario/:id' ||
    caminhoBase === '/agendamento/usuario/cancelar/:id'
  ) {
    const agendamentoEncontrado = await detalharAgendamentoRepositorio(
      id,
      usuario_id
    )

    if (!agendamentoEncontrado)
      throw new Erro('Agendamento não encontrado!', 404)

    res.locals.agendamentoDetalhado = agendamentoEncontrado
  }

  return next()
}

module.exports = verificaId
