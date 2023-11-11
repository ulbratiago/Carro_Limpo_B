const joi = require('joi')

const statusEsquema = joi.object({
  descricao: joi.string().required().messages({
    'any.required': 'O campo descrição é obrigatório',
    'string.empty': 'O campo descrição é obrigatório',
    'string.base': 'O campo descrição deve ser um texto',
  }),
})

module.exports = statusEsquema
