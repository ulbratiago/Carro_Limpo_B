const express = require('express')
const statusRota = express.Router()
const { statusEsquema } = require('../esquemas/index.js')
const {
  validarCorpoRequisicao,
  verificaToken,
  verificaId,
  verificaPerfilUsuario,
} = require('../intermediarios/index.js')
const {
  cadastrarStatusControlador,
  detalharStatusControlador,
  listarStatusControlador,
  editarStatusControlador,
  deletarStatusControlador,
} = require('../controladores/index.js')

statusRota.post(
  '/',
  verificaToken,
  validarCorpoRequisicao(statusEsquema),
  verificaId,
  verificaPerfilUsuario,
  cadastrarStatusControlador
)
statusRota.get('/', verificaToken, listarStatusControlador)
statusRota.get(
  '/:id',
  verificaToken,
  verificaId,
  verificaPerfilUsuario,
  detalharStatusControlador
)
statusRota.put(
  '/:id',
  verificaToken,
  validarCorpoRequisicao(statusEsquema),
  verificaId,
  verificaPerfilUsuario,
  editarStatusControlador
)
statusRota.delete(
  '/:id',
  verificaToken,
  verificaId,
  verificaPerfilUsuario,
  deletarStatusControlador
)
module.exports = statusRota
