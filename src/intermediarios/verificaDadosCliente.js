const { Erro } = require('../erros.js')
const { detalharClienteRepositorio } = require('../repositorios/index.js')

const verificaDadosCliente = async (req, res, next) => {
  const { email, cpf } = req.body
  const { id: clienteId } = req.params

  const clienteComEmailExistente = await detalharClienteRepositorio(email)
  const clienteComCPFExistente = await detalharClienteRepositorio(cpf)

  if (clienteComEmailExistente && clienteComEmailExistente.id !== clienteId) {
    throw new Erro(
      'Já existe cliente com este e-mail cadastrado no sistema.',
      400
    )
  }

  if (clienteComCPFExistente && clienteComCPFExistente.id !== clienteId) {
    throw new Erro('Já existe cliente com este CPF cadastrado no sistema.', 400)
  }

  return next()
}

module.exports = verificaDadosCliente
