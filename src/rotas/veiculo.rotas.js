const express = require('express')
const veiculoRota = express.Router()
const { veiculoEsquema } = require('../esquemas/index.js')
const {
  validarCorpoRequisicao,
  verificaToken,
  verificaId,
} = require('../intermediarios/index.js')
const {
  cadastrarVeiculoControlador,
  listarVeiculoControlador,
  detalharVeiculoControlador,
  editarVeiculoControlador,
  deletarVeiculoControlador,
} = require('../controladores/index.js')

veiculoRota.post(
  '/',
  verificaToken,
  validarCorpoRequisicao(veiculoEsquema),
  cadastrarVeiculoControlador
)
veiculoRota.get('/', verificaToken, listarVeiculoControlador)
veiculoRota.get('/:id', verificaToken, verificaId, detalharVeiculoControlador)
veiculoRota.put(
  '/:id',
  verificaToken,
  verificaId,
  validarCorpoRequisicao(veiculoEsquema),
  editarVeiculoControlador
)

veiculoRota.delete('/:id', verificaToken, verificaId, deletarVeiculoControlador)

module.exports = veiculoRota
