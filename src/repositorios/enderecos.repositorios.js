const knex = require('../config/conexao_DB')

const cadastrarEnderecoRepositorio = async (dadosEndereco) => {
  const endereco = await knex('enderecos').insert(dadosEndereco).returning('*')

  return endereco[0]
}

const listarEnderecosRepositorio = async (filtro) => {
  const enderecos = await knex('enderecos').where(filtro)

  return enderecos
}

const editarEnderecoRepositorio = async (camposParaEditar, id) => {
  
  const enderecoEditado = await knex('enderecos')
    .where( id )
    .update(camposParaEditar)
    .returning('*')

  return enderecoEditado[0]
}

const deletarEnderecoRepositorio = async (filtro) => {
  const enderecoDeletado = await knex('enderecos')
    .delete()
    .where(filtro)
    .returning('*')

  return enderecoDeletado[0]
}

module.exports = {
  cadastrarEnderecoRepositorio,
  listarEnderecosRepositorio,
  editarEnderecoRepositorio,
  deletarEnderecoRepositorio,
}
