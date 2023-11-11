const joi = require('joi')

const loginEsquema = joi.object({
  email: joi.string().email().required().messages({
    'any.required': 'O campo email é obrigatório',
    'string.empty': 'O campo email é obrigatório',
    'string.base': 'O campo email precisa ter um formato válido',
    'string.email': 'O campo email precisa ter um formato válido',
  }),
  senha: joi.string().min(8).max(15).required().messages({
    'any.required': 'O campo senha é obrigatório',
    'string.empty': 'O campo senha é obrigatório',
    'string.base': 'O campo senha deve conter caracteres válidos',
    'string.min': 'A senha deve possuir no mínimo 8 caracteres',
    'string.max': 'A senha deve possuir no máximo 15 caracteres',
  }),
})

module.exports = loginEsquema
