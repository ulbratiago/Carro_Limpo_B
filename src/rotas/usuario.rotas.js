const express = require('express')
const usuarioRota = express.Router()
const { usuarioEsquema } = require('../esquemas/index.js')
const {
  validarCorpoRequisicao,
  verificaEmail,
  verificaToken,
  verificaCpfCnpj,
  multer,
} = require('../intermediarios/index.js')
const {
  cadastrarUsuarioControlador,
  detalharUsuarioControlador,
  editarUsuarioControlador,
  inativarUsuarioControlador,
  deletarUsuarioControlador,
} = require('../controladores/index.js')

usuarioRota.post(
  '/',
  validarCorpoRequisicao(usuarioEsquema),
  verificaEmail,
  verificaCpfCnpj,
  cadastrarUsuarioControlador
)
usuarioRota.get('/', verificaToken, detalharUsuarioControlador)
usuarioRota.put(
  '/',
  verificaToken,
  multer.single('arquivo'),
  validarCorpoRequisicao(usuarioEsquema),
  verificaCpfCnpj,
  verificaEmail,
  editarUsuarioControlador
)
usuarioRota.put('/inativacao', verificaToken, inativarUsuarioControlador)
usuarioRota.delete('/', verificaToken, deletarUsuarioControlador)

module.exports = usuarioRota
