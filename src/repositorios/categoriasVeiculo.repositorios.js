const knex = require('../config/conexao_DB')

const listarCategoriasVeiculoRepositorio = async () => {
  const categorias = await knex('categoria_veiculo').select('id', 'descricao')
  return categorias
}

const categoriaVeiculoComFiltroRepositorio = async (filtro) => {
  const categoria = await knex('categoria_veiculo').where(filtro).first()
  return categoria
}

const detalharCategoriaVeiculoRepositorio = async (id) => {
  const categoria = await knex('categoria_veiculo')
    .select(
      'categoria_veiculo.id',
      'categoria_veiculo.descricao',
      'categoria_veiculo.data_cadastro',
      'usuarios_cadastro.nome as usuario_cadastro',
      'categoria_veiculo.data_atualizacao',
      'usuarios_atualizacao.nome as usuario_atualizacao'
    )
    .where({ 'categoria_veiculo.id': id })
    .leftJoin(
      'usuarios as usuarios_cadastro',
      'categoria_veiculo.usuario_cadastro',
      'usuarios_cadastro.id'
    )
    .leftJoin(
      'usuarios as usuarios_atualizacao',
      'categoria_veiculo.usuario_atualizacao',
      'usuarios_atualizacao.id'
    )

  return categoria
}

const cadastrarCategoriaVeiculoRepositorio = async (descricao) => {
  const categoria = await knex('categoria_veiculo')
    .insert({ descricao })
    .returning(['id', 'descricao'])

  return categoria
}

const deletarCategoriaVeiculoRepositorio = async (id) => {
  const categoria = await knex('categoria_veiculo')
    .delete()
    .where({ id })
    .returning('*')

  return categoria
}

module.exports = {
  listarCategoriasVeiculoRepositorio,
  categoriaVeiculoComFiltroRepositorio,
  detalharCategoriaVeiculoRepositorio,
  cadastrarCategoriaVeiculoRepositorio,
  deletarCategoriaVeiculoRepositorio,
}
