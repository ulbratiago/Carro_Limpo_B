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
  editarDadosPessoaisUsuarioControlador,
  editarSenhaUsuarioControlador,
  editarImagemPerfilControlador
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
  '/dadospessoais',
  verificaToken,
  // validarCorpoRequisicao(usuarioEsquema),
  verificaCpfCnpj,
  verificaEmail,
  editarDadosPessoaisUsuarioControlador
)

usuarioRota.put(
  '/alterarsenha',
  verificaToken,
  editarSenhaUsuarioControlador
)

usuarioRota.put(
  '/editarimagem',
  multer.single('arquivo'),
  verificaToken,
  editarImagemPerfilControlador
)

usuarioRota.put(
  '/',
  verificaToken,
  multer.single('arquivo'),
  // validarCorpoRequisicao(usuarioEsquema),
  verificaCpfCnpj,
  verificaEmail,
  editarUsuarioControlador
)
usuarioRota.put('/inativacao', verificaToken, inativarUsuarioControlador)
usuarioRota.delete('/', verificaToken, deletarUsuarioControlador)

module.exports = usuarioRota
