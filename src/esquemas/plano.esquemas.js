const joi = require('joi')

const planoEsquema = joi.object({
  descricao: joi.string().required().messages({
    'any.required': 'O campo descrição é obrigatório',
    'string.empty': 'O campo descrição é obrigatório',
    'string.base': 'O campo descrição deve ser um texto',
  }),
  validade: joi.number().required().messages({
    'any.required': 'O campo validade é obrigatório',
    'number.empty': 'O campo validade é obrigatório',
    'number.base': 'O campo validade deve ser um texto',
  }),
  valor: joi.number().required().messages({
    'any.required': 'O campo valor é obrigatório',
    'number.empty': 'O campo valor é obrigatório',
    'number.base': 'O campo valor deve ser um texto',
  }),
})
module.exports = planoEsquema
