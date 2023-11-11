const express = require('express')
const planoRota = express.Router()
const { planoEsquema } = require('../esquemas/index.js')
const {
  validarCorpoRequisicao,
  verificaToken,
  verificaId,
  verificaPerfilUsuario,
} = require('../intermediarios/index.js')
const {
  cadastrarPlanoControlador,
  listarPlanoControlador,
  detalharPlanoControlador,
  editarPlanoControlador,
  deletarPlanoControlador,
  cadastrarPlanoContratadoControlador,
  listarPlanoContratadoControlador,
  detalharPlanoContratadoControlador,
  editarPlanoContratadoControlador,
  inativarPlanoContratadoControlador,
} = require('../controladores/index.js')

planoRota.post(
  '/',
  validarCorpoRequisicao(planoEsquema),
  verificaToken,
  cadastrarPlanoControlador
)

planoRota.post(
  '/contratacao',
  verificaToken,
  verificaId,
  verificaPerfilUsuario,
  cadastrarPlanoContratadoControlador
)

planoRota.get(
  '/contratacao/listar',
  verificaToken,
  verificaId,
  verificaPerfilUsuario,
  listarPlanoContratadoControlador
)

planoRota.get(
  '/contratacao/listar/:id',
  verificaToken,
  verificaId,
  verificaPerfilUsuario,
  detalharPlanoContratadoControlador
)

planoRota.put(
  '/contratacao/editar/:id',
  verificaToken,
  verificaId,
  verificaPerfilUsuario,
  editarPlanoContratadoControlador
)

planoRota.put(
  '/contratacao/inativar/:id',
  verificaToken,
  verificaId,
  verificaPerfilUsuario,
  inativarPlanoContratadoControlador
)

planoRota.get('/', verificaToken, listarPlanoControlador)
planoRota.get('/:id', verificaToken, verificaId, detalharPlanoControlador)
planoRota.put(
  '/:id',
  verificaToken,
  validarCorpoRequisicao(planoEsquema),
  verificaId,
  editarPlanoControlador
)
planoRota.delete('/', verificaToken, deletarPlanoControlador)

module.exports = planoRota
