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
  listarServicoProfissionalControlador,
  editarServicoSemImagemControlador
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
servicoRota.get('/profissional', verificaToken, listarServicoProfissionalControlador)

servicoRota.get('/',listarServicoControlador)
servicoRota.get(
  '/:id',
  verificaToken,
  detalharServicoControlador
)

servicoRota.put(
  '/semimagem/:id',
  verificaToken,
  verificaPerfilUsuario,
  validarCorpoRequisicao(servicoEsquema),
  verificaId,
  editarServicoSemImagemControlador
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
