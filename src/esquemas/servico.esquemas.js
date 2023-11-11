const joi = require('joi')

const servicoEsquema = joi.object({
  nome: joi.string().required().messages({
    'any.required': 'O campo nome é obrigatório',
    'string.empty': 'O campo nome é obrigatório',
    'string.base': 'O campo nome deve ser um texto',
  }),
  descricao: joi.string().required().messages({
    'any.required': 'O campo nome é obrigatório',
    'string.empty': 'O campo nome é obrigatório',
    'string.base': 'O campo nome deve ser um texto',
  }),
  categoria_id: joi.number().required().messages({
    'number.required': 'O campo nome é obrigatório',
    'number.empty': 'O campo nome é obrigatório',
    'number.base': 'O campo categoria_id deve ser um número válido',
  }),
  valor: joi.number(),
})
module.exports = servicoEsquema
