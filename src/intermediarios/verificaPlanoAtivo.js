const { Erro } = require('../erros')
const { differenceInCalendarDays } = require('date-fns')
const {
  listarPlanoContratadoRepositorio,
  editarPlanoContratadoRepositorio,
} = require('../repositorios/index')

const verificaPlanoAtivo = async (req, res, next) => {
  const { id, tipo_perfil } = res.locals.usuarioLogin

  if (tipo_perfil === 1) {
    const ativo = true
    const listarPlano = await listarPlanoContratadoRepositorio({
      usuario_id: id,
      ativo,
    })

    if (listarPlano.length < 1) {
      throw new Erro(
        'Seu plano de acesso venceu, contate o administrador do sistema para renovação.',
        401
      )
    }

    if (
      differenceInCalendarDays(new Date(), listarPlano[0].data_ativacao) >
      Number(listarPlano[0].validade)
    ) {
      const ativo = false

      await editarPlanoContratadoRepositorio(
        { ativo },
        { id: listarPlano[0].id }
      )

      throw new Erro(
        'Seu plano de acesso venceu, contate o administrador do sistema para renovação.',
        401
      )
    }
  }
  return next()
}

module.exports = verificaPlanoAtivo
