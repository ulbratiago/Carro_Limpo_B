const { Erro } = require('../erros')
const {
  listarVeiculoRepositorio,
  usuarioComFiltroRepositorio,
  listarServicoRepositorio,
  detalharStatusRepositorio,
} = require('../repositorios/index')

const verificaAgendamento = async (req, res, next) => {
  const { id: usuario_id } = res.locals.usuarioDecodificado
  const { veiculo_id, profissional_id, servico_id, status_id } = req.body

  if (veiculo_id) {
    const veiculoEncontrado = await listarVeiculoRepositorio({
      id: veiculo_id,
      usuario_id,
    })

    if (veiculoEncontrado.length < 1)
      throw new Erro('Veiculo não encontrado!', 404)

    res.locals.veiculo = veiculoEncontrado[0]
  }

  if (profissional_id) {
    const usuarioEncontrado = await usuarioComFiltroRepositorio({
      id: profissional_id,
    })

    if (!usuarioEncontrado) throw new Erro('Usuário não encontrado!', 404)

    res.locals.profissional = usuarioEncontrado
  }

  if (servico_id) {
    const servicoEncontrado = await listarServicoRepositorio({
      id: servico_id,
      categoria_id : res.locals.veiculo.categoria_id
    })

    if (!servicoEncontrado) throw new Erro('Serviço não encontrado!', 404)

    res.locals.servico = servicoEncontrado[0]
  }

  if (status_id) {
    const statusEncontrado = await detalharStatusRepositorio(status_id)

    if (!statusEncontrado) throw new Erro('Status não encontrado!', 404)

    res.locals.status = statusEncontrado
  }

  return next()
}

module.exports = verificaAgendamento
