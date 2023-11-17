const knex = require('../config/conexao_DB')

const usuarioComFiltroRepositorio = async (filtro) => {
  const usuariosEncontrados = await knex('usuarios').where(filtro)

  return usuariosEncontrados[0]
}

const usuarioPorIdRepositorio = async (id) => {
  const usuarioEncontrado = await knex('usuarios')
    .where({ 'usuarios.id': id })
    .select(
      'usuarios.id',
      'usuarios.nome',
      'usuarios.cpf',
      'usuarios.cnpj',
      'usuarios.email',
      'usuarios.celular',
      'usuarios.data_nascimento',
      'usuarios.url_perfil',
      'usuarios.pontos',
      'usuarios.avaliacao',
      'usuarios.tipo_perfil',
      'usuarios.data_cadastro',
      'usuarios.ativo',
      'usuarios_atualizacao.nome as usuario_atualizacao',
      'usuarios.data_atualizacao',
      knex.raw(
        ` json_agg(json_build_object(
          'nomedaRua', logradouro, 
          'numero', enderecos.numero,
          'complemento', enderecos.complemento,
          'bairro', enderecos.bairro,
          'cep', enderecos.cep,
          'cidade', enderecos.cidade,
          'estado', enderecos.estado)) as endereco`
      )
    )
    .leftJoin('enderecos', 'usuarios.id', 'enderecos.usuario_id')
    .leftJoin(
      'usuarios as usuarios_atualizacao',
      'usuarios.usuario_atualizacao',
      'usuarios_atualizacao.id'
    )
    .groupBy(
      'usuarios.id',
      'usuarios.nome',
      'usuarios.cpf',
      'usuarios.cnpj',
      'usuarios.email',
      'usuarios.celular',
      'usuarios.data_nascimento',
      'usuarios.url_perfil',
      'usuarios.pontos',
      'usuarios.avaliacao',
      'usuarios.tipo_perfil',
      'usuarios.data_cadastro',
      'usuarios.ativo',
      'usuarios_atualizacao.nome',
      'usuarios.data_atualizacao'
    )

  return usuarioEncontrado[0]
}

const usuarioPorCidadeRepositorio = async (cidade) => {
  const usuarioEncontrado = await knex('enderecos')
    .select(
      'enderecos.cidade',
      'usuarios.id',
      'usuarios.nome',
      'usuarios.url_perfil',
      'usuarios.avaliacao'
    )
    .leftJoin('usuarios', 'usuarios.id', 'enderecos.usuario_id')
    .where((builder) => {
      builder
        .where('enderecos.cidade', 'ilike', `%${cidade}%`)
        .andWhere('usuarios.tipo_perfil', 1)
        .andWhere('usuarios.ativo', true)
    })
    .groupBy(
      'enderecos.cidade',
      'usuarios.id',
      'usuarios.nome',
      'usuarios.url_perfil',
      'usuarios.avaliacao'
    )

  return usuarioEncontrado
}

const usuarioPorNomeRepositorio = async (nome) => {
  const usuarioEncontrado = await knex('usuarios')
    .select('id', 'nome', 'url_perfil', 'avaliacao')
    .where((builder) => {
      builder
        .where('nome', 'ilike', `%${nome}%`)
        .andWhere('tipo_perfil', 1)
        .andWhere('ativo', true)
    })

  return usuarioEncontrado
}

const cadastrarUsuarioRepositorio = async (dadosUsuario) => {
  const usuarioCadastrado = await knex('usuarios')
    .insert(dadosUsuario)
    .returning(['id', 'nome', 'email'])

  return usuarioCadastrado[0]
}

const editarUsuarioRepositorio = async (camposParaEditar, id) => {
  const usuarioEditado = await knex('usuarios')
    .where(id)
    .update(camposParaEditar)
    .returning(['id', 'nome'])

  return usuarioEditado[0]
}

const deletarUsuarioRepositorio = async (id) => {
  const usuarioDeletado = await knex('usuarios')
    .delete()
    .where({ id })
    .returning(['id', 'nome', 'email', 'foto_perfil'])

  return usuarioDeletado[0]
}

module.exports = {
  usuarioComFiltroRepositorio,
  usuarioPorIdRepositorio,
  cadastrarUsuarioRepositorio,
  editarUsuarioRepositorio,
  deletarUsuarioRepositorio,
  usuarioPorCidadeRepositorio,
  usuarioPorNomeRepositorio,
}
