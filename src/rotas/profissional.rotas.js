const express = require('express')
const profissionalRota = express.Router()
const { usuarioEsquema } = require('../esquemas/index.js')
const {
  validarCorpoRequisicao,
  verificaEmail,
  verificaToken,
  verificaCpfCnpj,
  multer,
} = require('../intermediarios/index.js')
const {
  cadastrarProfissionalControlador,
  detalharProfissionalControlador,
  editarProfissionalControlador,
  inativarProfissionalControlador,
  deletarProfissionalControlador,
} = require('../controladores/index.js')

profissionalRota.post(
  '/',
  multer.single('arquivo'),
  validarCorpoRequisicao(usuarioEsquema),
  verificaEmail,
  verificaCpfCnpj,
  cadastrarProfissionalControlador
)
profissionalRota.get('/', verificaToken, detalharProfissionalControlador)
profissionalRota.put(
  '/',
  verificaToken,
  multer.single('arquivo'),
  verificaCpfCnpj,
  verificaEmail,
  validarCorpoRequisicao(usuarioEsquema),
  editarProfissionalControlador
)
profissionalRota.put(
  '/inativacao',
  verificaToken,
  inativarProfissionalControlador
)
profissionalRota.delete('/', verificaToken, deletarProfissionalControlador)

module.exports = profissionalRota
