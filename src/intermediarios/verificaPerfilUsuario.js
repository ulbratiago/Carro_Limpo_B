const { Erro } = require('../erros')

const verificaPerfilUsuario = async (req, res, next) => {
  const tipo_perfil = res.locals.usuarioDecodificado.tipo_perfil
  const caminhoBase = req.baseUrl + req.route.path

  if (caminhoBase === '/plano/contratacao/listar/:id' && tipo_perfil !== 0) {
    throw new Erro('Usuário não possui acesso.', 403)
  }

  if (caminhoBase === '/plano/contratacao' && tipo_perfil !== 0) {
    throw new Erro('Usuário não possui acesso.', 403)
  }

  if (req.baseUrl === '/status' && tipo_perfil !== 0) {
    throw new Erro('Usuário não possui acesso.', 403)
  }

  if (tipo_perfil === 0 || tipo_perfil === 1) {
    return next()
  }

  throw new Erro('Usuário não possui acesso.', 403)
}

module.exports = verificaPerfilUsuario
