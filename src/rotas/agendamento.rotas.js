const express = require('express')
const agendamentoRota = express.Router()
const { agendamentoEsquema } = require('../esquemas/index.js')
const {
  validarCorpoRequisicao,
  verificaToken,
  verificaId,
  verificaAgendamento,
} = require('../intermediarios/index.js')
const {
  cadastrarAgendamentoControlador,
  listarAgendamentoUsuarioControlador,
  detalharAgendamentoUsuarioControlador,
  listarAgendamentoProfissionalControlador,
  detalharAgendamentoProfissionalControlador,
  listarAgendamentoAdmControlador,
  detalharAgendamentoAdmControlador,
  editarAgendamentoControlador,
  deletarAgendamentoControlador,
  cancelarAgendamentoUsuarioControlador,
} = require('../controladores/index.js')

agendamentoRota.post(
  '/',
  verificaToken,
  //validarCorpoRequisicao(agendamentoEsquema),
  verificaAgendamento,
  cadastrarAgendamentoControlador
)

agendamentoRota.get(
  '/usuario',
  verificaToken,
  listarAgendamentoUsuarioControlador
)
agendamentoRota.get(
  '/usuario/:id',
  verificaToken,
  verificaId,
  detalharAgendamentoUsuarioControlador
)
agendamentoRota.patch(
  '/usuario/cancelar/:id',
  verificaToken,
  verificaId,
  cancelarAgendamentoUsuarioControlador
)

agendamentoRota.get(
  '/profissional',
  // verificaToken,
  listarAgendamentoProfissionalControlador
)
agendamentoRota.get(
  '/profissional/:id',
  verificaToken,
  verificaId,
  detalharAgendamentoProfissionalControlador
)
agendamentoRota.get('/adm', verificaToken, listarAgendamentoAdmControlador)
agendamentoRota.get(
  '/adm/:id',
  verificaToken,
  verificaId,
  detalharAgendamentoAdmControlador
)

agendamentoRota.put(
  '/:id',
  verificaToken,
  verificaId,
  validarCorpoRequisicao(agendamentoEsquema),
  editarAgendamentoControlador
)

agendamentoRota.delete(
  '/:id',
  verificaToken,
  verificaId,
  deletarAgendamentoControlador
)

module.exports = agendamentoRota
