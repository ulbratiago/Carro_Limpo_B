const {
  listarCategoriasVeiculoServico,
  detalharCategoriaVeiculoServico,
  cadastrarCategoriaVeiculoServico,
  deletarCategoriaVeiculoServico,
} = require('./categoriaVeiculo.servicos')
const {
  cadastrarUsuarioServico,
  detalharUsuarioServico,
  editarUsuarioServico,
  inativarUsuarioServico,
  deletarUsuarioServico,
  editarDadosPessoaisUsuarioServico,
  editarSenhaUsuarioServico,
  editarImagemPerfilServico,
} = require('./usuario.servicos')
const loginServico = require('./login.servicos')
const {
  cadastrarStatusServico,
  listarStatusServico,
  editarStatusServico,
  deletarStatusServico,
} = require('./status.servicos')

const {
  cadastrarEnderecoServico,
  detalharEnderecoServico,
  listarEnderecosServico,
  editarEnderecoServico,
  deletarEnderecoServico,
} = require('./endereco.servicos')

const {
  cadastrarPlanoServico,
  listarPlanoServico,
  detalharPlanoServico,
  editarPlanoServico,
  deletarPlanoServico,
  cadastrarPlanoContratadoServico,
  listarPlanoContratadoServico,
  detalharPlanoContratadoServico,
  editarPlanoContratadoServico,
  inativarPlanoContratadoServico,
} = require('./plano.servicos')

const {
  cadastrarVeiculoServico,
  listarVeiculoServico,
  detalharVeiculoServico,
  editarVeiculoServico,
  deletarVeiculoServico,
} = require('./veiculo.servicos')

const {
  cadastrarServicoServico,
  listarServicoServico,
  detalharServicoServico,
  editarServicoServico,
  deletarServicoServico,
} = require('./servico.servicos')

const {
  cadastrarProfissionalServico,
  detalharProfissionalServico,
  editarProfissionalServico,
  inativarProfissionalServico,
  deletarProfissionalServico,
  listarProfissionalServico,
} = require('./profissional.servicos')

const {
  cadastrarAgendamentoServico,
  listarAgendamentoUsuarioServico,
  detalharAgendamentoUsuarioServico,
  cancelarAgendamentoUsuarioServico,
  detalharAgendamentoServico,
  editarAgendamentoServico,
  deletarAgendamentoServico,
  listarAgendamentoProfissionalServico,
} = require('./agendamento.servicos')

module.exports = {
  listarCategoriasVeiculoServico,
  detalharCategoriaVeiculoServico,
  cadastrarCategoriaVeiculoServico,
  deletarCategoriaVeiculoServico,
  cadastrarUsuarioServico,
  detalharUsuarioServico,
  editarUsuarioServico,
  deletarUsuarioServico,
  loginServico,
  cadastrarStatusServico,
  listarStatusServico,
  editarStatusServico,
  inativarUsuarioServico,
  editarDadosPessoaisUsuarioServico,
  editarSenhaUsuarioServico,
  editarImagemPerfilServico,
  deletarStatusServico,
  cadastrarEnderecoServico,
  detalharEnderecoServico,
  listarEnderecosServico,
  editarEnderecoServico,
  deletarEnderecoServico,
  cadastrarPlanoServico,
  listarPlanoServico,
  detalharPlanoServico,
  editarPlanoServico,
  deletarPlanoServico,
  cadastrarPlanoContratadoServico,
  listarPlanoContratadoServico,
  detalharPlanoContratadoServico,
  editarPlanoContratadoServico,
  inativarPlanoContratadoServico,
  cadastrarVeiculoServico,
  listarVeiculoServico,
  detalharVeiculoServico,
  editarVeiculoServico,
  deletarVeiculoServico,
  cadastrarServicoServico,
  listarServicoServico,
  detalharServicoServico,
  editarServicoServico,
  deletarServicoServico,
  cadastrarProfissionalServico,
  detalharProfissionalServico,
  editarProfissionalServico,
  inativarProfissionalServico,
  deletarProfissionalServico,
  listarProfissionalServico,
  cadastrarAgendamentoServico,
  listarAgendamentoUsuarioServico,
  detalharAgendamentoUsuarioServico,
  cancelarAgendamentoUsuarioServico,
  detalharAgendamentoServico,
  editarAgendamentoServico,
  deletarAgendamentoServico,
  listarAgendamentoProfissionalServico,
}
