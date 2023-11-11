const express = require('express')
const categoriaVeiculoRota = express.Router()
const {
  listarCategoriasVeiculoControlador,
  detalharCategoriaVeiculoControlador,
  cadastrarCategoriaVeiculoControlador,
  deletarCategoriaVeiculoControlador
} = require('../controladores/index')
const { categoriaEsquema } = require('../esquemas/index')
const { validarCorpoRequisicao, verificaId } = require('../intermediarios')

categoriaVeiculoRota.get('/', listarCategoriasVeiculoControlador)
categoriaVeiculoRota.get('/:id', verificaId, detalharCategoriaVeiculoControlador)
categoriaVeiculoRota.post(
  '/',
  validarCorpoRequisicao(categoriaEsquema),
  cadastrarCategoriaVeiculoControlador
)
categoriaVeiculoRota.delete('/:id', verificaId, deletarCategoriaVeiculoControlador)

module.exports = categoriaVeiculoRota
