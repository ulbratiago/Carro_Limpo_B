const {
  listarCategoriasVeiculoControlador,
  detalharCategoriaVeiculoControlador,
  cadastrarCategoriaVeiculoControlador,
  deletarCategoriaVeiculoControlador,
} = require('./categoriaVeiculo.controladores')
const {
  cadastrarUsuarioControlador,
  detalharUsuarioControlador,
  editarUsuarioControlador,
  inativarUsuarioControlador,
  deletarUsuarioControlador,
} = require('./usuario.controladores')
const loginControlador = require('./login.controladores')
const {
  cadastrarStatusControlador,
  detalharStatusControlador,
  listarStatusControlador,
  editarStatusControlador,
  deletarStatusControlador,
} = require('./status.controladores')

const {
  cadastrarEnderecoControlador,
  listarEnderecosControlador,
  detalharEnderecoControlador,
  editarEnderecoControlador,
  deletarEnderecoControlador,
} = require('./endereco.controladores')

const {
  cadastrarPlanoControlador,
  listarPlanoControlador,
  detalharPlanoControlador,
  editarPlanoControlador,
  deletarPlanoControlador,
  cadastrarPlanoContratadoControlador,
  listarPlanoContratadoControlador,
  detalharPlanoContratadoControlador,
  editarPlanoContratadoControlador,
  inativarPlanoContratadoControlador,
} = require('./plano.controladores')

const {
  cadastrarVeiculoControlador,
  listarVeiculoControlador,
  detalharVeiculoControlador,
  editarVeiculoControlador,
  deletarVeiculoControlador,
} = require('./veiculo.controladores')

const {
  cadastrarServicoControlador,
  listarServicoControlador,
  detalharServicoControlador,
  editarServicoControlador,
  deletarServicoControlador,
} = require('./servico.controladores')

const {
  cadastrarProfissionalControlador,
  detalharProfissionalControlador,
  editarProfissionalControlador,
  inativarProfissionalControlador,
  deletarProfissionalControlador,
} = require('./profissional.controladores')

const {
  cadastrarAgendamentoControlador,
  listarAgendamentoUsuarioControlador,
  detalharAgendamentoUsuarioControlador,
  cancelarAgendamentoUsuarioControlador,
  listarAgendamentoProfissionalControlador,
  detalharAgendamentoProfissionalControlador,
  listarAgendamentoAdmControlador,
  detalharAgendamentoAdmControlador,
  editarAgendamentoControlador,
  deletarAgendamentoControlador,
} = require('./agendamento.controladores')

module.exports = {
  listarCategoriasVeiculoControlador,
  detalharCategoriaVeiculoControlador,
  cadastrarCategoriaVeiculoControlador,
  deletarCategoriaVeiculoControlador,
  cadastrarUsuarioControlador,
  detalharUsuarioControlador,
  editarUsuarioControlador,
  deletarUsuarioControlador,
  loginControlador,
  cadastrarStatusControlador,
  detalharStatusControlador,
  listarStatusControlador,
  editarStatusControlador,
  inativarUsuarioControlador,
  deletarStatusControlador,
  cadastrarEnderecoControlador,
  listarEnderecosControlador,
  detalharEnderecoControlador,
  editarEnderecoControlador,
  deletarEnderecoControlador,
  cadastrarPlanoControlador,
  listarPlanoControlador,
  detalharPlanoControlador,
  editarPlanoControlador,
  deletarPlanoControlador,
  cadastrarPlanoContratadoControlador,
  listarPlanoContratadoControlador,
  detalharPlanoContratadoControlador,
  editarPlanoContratadoControlador,
  inativarPlanoContratadoControlador,
  cadastrarVeiculoControlador,
  listarVeiculoControlador,
  detalharVeiculoControlador,
  editarVeiculoControlador,
  deletarVeiculoControlador,
  cadastrarServicoControlador,
  listarServicoControlador,
  detalharServicoControlador,
  editarServicoControlador,
  deletarServicoControlador,
  cadastrarProfissionalControlador,
  detalharProfissionalControlador,
  editarProfissionalControlador,
  inativarProfissionalControlador,
  deletarProfissionalControlador,
  cadastrarAgendamentoControlador,
  listarAgendamentoUsuarioControlador,
  detalharAgendamentoUsuarioControlador,
  cancelarAgendamentoUsuarioControlador,
  listarAgendamentoProfissionalControlador,
  detalharAgendamentoProfissionalControlador,
  listarAgendamentoAdmControlador,
  detalharAgendamentoAdmControlador,
  editarAgendamentoControlador,
  deletarAgendamentoControlador,
}
