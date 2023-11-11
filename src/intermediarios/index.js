const verificaEmail = require('./verificaEmail')
const validarCorpoRequisicao = require('./validaCorpoRequisicao')
const verificaToken = require('./verificaToken')
const verificaLogin = require('./verificaLogin')
const verificaId = require('./verificaId')
const verificaCpfCnpj = require('./verificaCpfCnpj')
const verificaDadosCliente = require('./verificaDadosCliente')
const multer = require('./multer')
const verificaPerfilUsuario = require('./verificaPerfilUsuario')
const verificaPlanoAtivo = require('./verificaPlanoAtivo')
const verificaAgendamento = require('./verificaAgendamento')

module.exports = {
  verificaEmail,
  verificaCpfCnpj,
  validarCorpoRequisicao,
  verificaToken,
  verificaLogin,
  verificaId,
  verificaDadosCliente,
  multer,
  verificaPerfilUsuario,
  verificaPlanoAtivo,
  verificaAgendamento
}
