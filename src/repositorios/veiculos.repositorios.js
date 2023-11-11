const knex = require('../config/conexao_DB')

const cadastrarVeiculoRepositorio = async (dadosVeiculo) => {
  const veiculo = await knex('veiculos').insert(dadosVeiculo).returning('*')

  return veiculo[0]
}

const listarVeiculoRepositorio = async (filtro) => {
  const veiculo = await knex('veiculos').where(filtro)

  return veiculo
}

const editarVeiculoRepositorio = async (camposParaEditar, id) => {
  
  const veiculoEditado = await knex('veiculos')
    .where( id )
    .update(camposParaEditar)
    .returning('*')

  return veiculoEditado[0]
}

const deletarVeiculoRepositorio = async (filtro) => {
  const veiculoDeletado = await knex('veiculos')
    .delete()
    .where(filtro)
    .returning('*')

  return veiculoDeletado[0]
}

module.exports = {
  cadastrarVeiculoRepositorio,
  listarVeiculoRepositorio,
  editarVeiculoRepositorio,
  deletarVeiculoRepositorio,
}
