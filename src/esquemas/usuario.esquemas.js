const joi = require('joi')

const usuarioEsquema = joi.object({
  nome: joi.string().required().messages({
    'any.required': 'O campo nome é obrigatório',
    'string.empty': 'O campo nome é obrigatório',
    'string.base': 'O campo nome deve ser um texto',
  }),
  cpf: joi.string(),
  cnpj: joi.string(),
  email: joi.string().email().required().messages({
    'any.required': 'O campo email é obrigatório',
    'string.empty': 'O campo email é obrigatório',
    'string.base': 'O campo email precisa ter um formato válido',
    'string.email': 'O campo email precisa ter um formato válido',
  }),
  celular: joi.string(),

  data_nascimento: joi.date(),

  senha: joi.string().min(8).max(15).required().messages({
    'any.required': 'O campo senha é obrigatório',
    'string.empty': 'O campo senha é obrigatório',
    'string.base': 'O campo senha deve conter caracteres válidos',
    'string.min': 'A senha deve possuir no mínimo 8 caracteres',
    'string.max': 'A senha deve possuir no máximo 15 caracteres',
  }),
  foto_perfil: joi.string(),
  tipo_perfil: joi.number(),
  ativo: joi.boolean(),
})
module.exports = usuarioEsquema
