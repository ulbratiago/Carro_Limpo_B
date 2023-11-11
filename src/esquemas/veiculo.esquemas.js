const joi = require('joi')

const veiculoEsquema = joi.object({
  marca: joi.string().required().messages({
    'any.required': 'O campo nome é obrigatório',
    'string.empty': 'O campo nome é obrigatório',
    'string.base': 'O campo nome deve ser um texto',
  }),
  modelo: joi.string().required().messages({
    'any.required': 'O campo nome é obrigatório',
    'string.empty': 'O campo nome é obrigatório',
    'string.base': 'O campo nome deve ser um texto',
  }),
  placa: joi.string().required().messages({
    'any.required': 'O campo nome é obrigatório',
    'string.empty': 'O campo nome é obrigatório',
    'string.base': 'O campo nome deve ser um texto',
  }),
  ano: joi.number(),
  categoria_id: joi.number(),
  usuario_id: joi.number(),
})
module.exports = veiculoEsquema
