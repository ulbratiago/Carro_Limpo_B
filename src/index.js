require('dotenv').config()
const express = require('express')
require('express-async-errors')
const cors = require('cors')

const { manipuladorDeErro } = require('./erros')
const {
  categoriaVeiculoRota,
  usuarioRota,
  loginRota,
  statusRota,
  enderecoRota,
  planoRota,
  veiculoRota,
  servicoRota,
  profissionalRota,
  agendamentoRota,
} = require('./rotas/index.js')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/categoria_veiculo', categoriaVeiculoRota)
app.use('/usuario', usuarioRota)
app.use('/login', loginRota)
app.use('/status', statusRota)
app.use('/endereco', enderecoRota)
app.use('/plano', planoRota)
app.use('/veiculo', veiculoRota)
app.use('/servico', servicoRota)
app.use('/profissional', profissionalRota)
app.use('/agendamento', agendamentoRota)

app.use(manipuladorDeErro)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta: ${PORT}`)
})
