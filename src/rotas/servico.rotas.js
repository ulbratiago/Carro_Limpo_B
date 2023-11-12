const express = require('express')
const servicoRota = express.Router()
const { servicoEsquema } = require('../esquemas/index.js')
const {
  validarCorpoRequisicao,
  verificaToken,
  verificaId,
  multer,
  verificaPerfilUsuario,
} = require('../intermediarios/index.js')
const {
  cadastrarServicoControlador,
  listarServicoControlador,
  detalharServicoControlador,
  editarServicoControlador,
  deletarServicoControlador,
} = require('../controladores/index.js')

servicoRota.post(
  '/',
  verificaToken,
  verificaPerfilUsuario,
  multer.single('arquivo'),
  validarCorpoRequisicao(servicoEsquema),
  verificaId,
  cadastrarServicoControlador
)
servicoRota.get('/', verificaToken, listarServicoControlador)
servicoRota.get(
  '/:id',
  verificaToken,
  verificaPerfilUsuario,
  verificaId,
  detalharServicoControlador
)
servicoRota.put(
  '/:id',
  verificaToken,
  verificaPerfilUsuario,
  multer.single('arquivo'),
  validarCorpoRequisicao(servicoEsquema),
  verificaId,
  editarServicoControlador
)

servicoRota.delete(
  '/:id',
  verificaToken,
  verificaPerfilUsuario,
  verificaId,
  deletarServicoControlador
)

module.exports = servicoRota
