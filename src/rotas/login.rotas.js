const express = require('express')
const loginRota = express.Router()
const { loginControlador } = require('../controladores/index.js')
const { verificaLogin, verificaPlanoAtivo } = require('../intermediarios/index.js')
const validarCorpoRequisicao = require('../intermediarios/validaCorpoRequisicao')
const { loginEsquema } = require('../esquemas/index.js')

loginRota.post(
  '/',
  validarCorpoRequisicao(loginEsquema),
  verificaLogin,
  verificaPlanoAtivo,
  loginControlador
)

module.exports = loginRota
