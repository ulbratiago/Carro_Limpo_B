const express = require('express')
const enderecoRota = express.Router()
const { enderecoEsquema } = require('../esquemas/index.js')
const {
  validarCorpoRequisicao,
  verificaToken,
  verificaId,
} = require('../intermediarios/index.js')
const {
  cadastrarEnderecoControlador,
  listarEnderecosControlador,
  detalharEnderecoControlador,
  editarEnderecoControlador,
  deletarEnderecoControlador,
} = require('../controladores/index.js')

enderecoRota.post(
  '/',
  verificaToken,
  validarCorpoRequisicao(enderecoEsquema),
  cadastrarEnderecoControlador
)
enderecoRota.get('/', verificaToken, listarEnderecosControlador)
enderecoRota.get('/:id', verificaToken, verificaId, detalharEnderecoControlador)
enderecoRota.put(
  '/:id',
  verificaToken,
  verificaId,
  validarCorpoRequisicao(enderecoEsquema),
  editarEnderecoControlador
)

enderecoRota.delete('/:id', verificaToken, verificaId, deletarEnderecoControlador)

module.exports = enderecoRota
