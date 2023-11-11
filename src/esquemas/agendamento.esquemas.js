const joi = require('joi')

const categoriaEsquema = joi.object({
  descricao: joi.string().required().messages({
    'any.required': 'O campo descrição da categoria do veiculo é obrigatório',
    'string.empty': 'O campo descrição da categoria do veiculo é obrigatório',
    'string.base': 'O campo descrição da categoria do veiculo deve ser um texto',
  }),
  
})

module.exports = categoriaEsquema
