const {
  listarCategoriasVeiculoRepositorio,
  categoriaVeiculoComFiltroRepositorio,
  detalharCategoriaVeiculoRepositorio,
  cadastrarCategoriaVeiculoRepositorio,
  deletarCategoriaVeiculoRepositorio,
} = require('./categoriasVeiculo.repositorios')
const {
  usuarioComFiltroRepositorio,
  usuarioPorIdRepositorio,
  cadastrarUsuarioRepositorio,
  editarUsuarioRepositorio,
  deletarUsuarioRepositorio,
  usuarioPorCidadeRepositorio
} = require('./usuarios.repositorios')
const {
  cadastrarStatusRepositorio,
  detalharStatusRepositorio,
  listarStatusRepositorio,
  listarStatusFiltroRepositorio,
  editarStatusRepositorio,
  deletarStatusRepositorio,
} = require('./status.repositorios')

const {
  cadastrarEnderecoRepositorio,
  listarEnderecosRepositorio,
  editarEnderecoRepositorio,
  deletarEnderecoRepositorio,
} = require('./enderecos.repositorios')

const {
  cadastrarPlanoRepositorio,
  listarPlanoRepositorio,
  detalharPlanoRepositorio,
  editarPlanoRepositorio,
  deletarPlanoRepositorio,
  cadastrarPlanoContratadoRepositorio,
  listarPlanoContratadoRepositorio,
  editarPlanoContratadoRepositorio,
} = require('./planos.repositorios')

const {
  cadastrarVeiculoRepositorio,
  listarVeiculoRepositorio,
  editarVeiculoRepositorio,
  deletarVeiculoRepositorio,
} = require('./veiculos.repositorios')

const {
  cadastrarServicoRepositorio,
  listarServicoRepositorio,
  editarServicoRepositorio,
  deletarServicoRepositorio,
} = require('./servicos.repositorios')

const {
  cadastrarAgendamentoRepositorio,
  listarAgendamentoRepositorio,
  detalharAgendamentoRepositorio,
  editarAgendamentoRepositorio,
  deletarAgendamentoRepositorio,
} = require('./agendamentos.repositorios')

module.exports = {
  listarCategoriasVeiculoRepositorio,
  categoriaVeiculoComFiltroRepositorio,
  detalharCategoriaVeiculoRepositorio,
  cadastrarCategoriaVeiculoRepositorio,
  deletarCategoriaVeiculoRepositorio,
  usuarioComFiltroRepositorio,
  usuarioPorIdRepositorio,
  cadastrarUsuarioRepositorio,
  editarUsuarioRepositorio,
  deletarUsuarioRepositorio,
  usuarioPorCidadeRepositorio,
  cadastrarStatusRepositorio,
  detalharStatusRepositorio,
  listarStatusRepositorio,
  listarStatusFiltroRepositorio,
  editarStatusRepositorio,
  deletarStatusRepositorio,
  cadastrarEnderecoRepositorio,
  listarEnderecosRepositorio,
  editarEnderecoRepositorio,
  deletarEnderecoRepositorio,
  cadastrarPlanoRepositorio,
  listarPlanoRepositorio,
  detalharPlanoRepositorio,
  editarPlanoRepositorio,
  deletarPlanoRepositorio,
  cadastrarPlanoContratadoRepositorio,
  listarPlanoContratadoRepositorio,
  editarPlanoContratadoRepositorio,
  cadastrarVeiculoRepositorio,
  listarVeiculoRepositorio,
  editarVeiculoRepositorio,
  deletarVeiculoRepositorio,
  cadastrarServicoRepositorio,
  listarServicoRepositorio,
  editarServicoRepositorio,
  deletarServicoRepositorio,
  cadastrarAgendamentoRepositorio,
  listarAgendamentoRepositorio,
  detalharAgendamentoRepositorio,
  editarAgendamentoRepositorio,
  deletarAgendamentoRepositorio,
}
