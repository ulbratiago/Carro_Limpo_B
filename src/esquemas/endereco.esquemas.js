const joi = require('joi')

const usuarioEsquema = joi.object({
  logradouro: joi.string().required().messages({
    'any.required': 'O campo nome é obrigatório',
    'string.empty': 'O campo nome é obrigatório',
    'string.base': 'O campo nome deve ser um texto',
  }),
  numero: joi.number(),
  complemento: joi.string(),
  bairro: joi.string().required().messages({
    'any.required': 'O campo nome é obrigatório',
    'string.empty': 'O campo nome é obrigatório',
    'string.base': 'O campo nome deve ser um texto',
  }),
  cep: joi.string().min(8).max(8).required().messages({
    'any.required': 'O campo nome é obrigatório',
    'string.empty': 'O campo nome é obrigatório',
    'string.base': 'O campo nome deve ser um texto',
  }),
  cidade: joi.string().required().messages({
    'any.required': 'O campo nome é obrigatório',
    'string.empty': 'O campo nome é obrigatório',
    'string.base': 'O campo nome deve ser um texto',
  }),
  estado: joi.string().min(2).max(2).required().messages({
    'any.required': 'O campo nome é obrigatório',
    'string.empty': 'O campo nome é obrigatório',
    'string.base': 'O campo nome deve ser um texto',
  }),
})
module.exports = usuarioEsquema
