class Erro extends Error {
  constructor(message, statusCode = 400) {
    super(message)
    this.statusCode = statusCode
  }
}

// eslint-disable-next-line no-unused-vars
const manipuladorDeErro = async (error, req, res, next) => {
  if (error instanceof Erro) {
    return res.status(error.statusCode).json({ mensagem: error.message })
  }

  console.error(error)

  return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
}



module.exports = {
  Erro,
  manipuladorDeErro,
}
