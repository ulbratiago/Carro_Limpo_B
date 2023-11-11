create database carro_limpo;

drop table if exists enderecos;

drop table if exists planos;

drop table if exists usuarios;

drop table if exists plano_ativo;

drop table if exists categoria_veiculo;

drop table if exists veiculos;

drop table if exists servicos;

drop table if exists status;

drop table if exists agendamentos;

create table if not exists usuarios (
 	id serial primary key,
  nome text not null,
  cpf text unique,
  cnpj text unique,
  email text unique not null,
  celular text,
  data_nascimento date,
  senha text not null,
  foto_perfil text,
  url_perfil text,
  pontos integer,
  avaliacao integer,
  tipo_perfil integer not null,
  data_cadastro date not null default current_date,
  usuario_atualizacao integer references usuarios(id),
  data_atualizacao date,
  ativo boolean default true
);

create table if not exists enderecos(
	id serial primary key,
  logradouro text not null,
  numero integer,
  complemento text,
  bairro text not null,
  cep text not null,
  cidade text not null,
  estado varchar(2) not null,
  usuario_id integer references usuarios(id),
  data_cadastro date not null default current_date,
  usuario_atualizacao integer references usuarios(id),
  data_atualizacao date
);

create table if not exists planos(
	id serial primary key,
  descricao text not null,
  validade integer not null,
  valor integer not null,
  usuario_cadastro integer references usuarios(id),
  data_cadastro date not null default current_date,
  usuario_atualizacao integer references usuarios(id),
  data_atualizacao date
);

create table if not exists plano_ativo (
  id serial primary key,
  plano_id integer references planos(id) not null,
  usuario_id integer references usuarios(id) not null,
  valor integer not null,
  data_ativacao date not null default current_date,
  validade integer not null,
  usuario_cadastro integer references usuarios(id),
  data_atualizacao date
  usuario_atualizacao integer references usuarios(id),
  ativo boolean not null default true
);

create table if not exists categoria_veiculo (
  id serial primary key,
  descricao text not null unique,
  usuario_cadastro integer references usuarios(id),
  data_cadastro date not null default current_date,
  usuario_atualizacao integer references usuarios(id),
  data_atualizacao date 
);

create table if not exists veiculos (
  id serial primary key,
  marca text not null,
  modelo text not null,
  placa text not null unique,
  ano integer,
  categoria_id integer references categoria_veiculo(id),
  usuario_id integer references usuarios(id),
  usuario_cadastro integer references usuarios(id),
  data_cadastro date not null default current_date,
  usuario_atualizacao integer references usuarios(id),
  data_atualizacao date 
);

create table if not exists servicos(
 	id serial primary key,
  nome text not null,
  descricao text not null,
  categoria_id integer references categoria_veiculo(id),
  valor integer not null,
  imagem text,
  url_imagem text,
  usuario_id integer references usuarios(id),
  usuario_cadastro integer references usuarios(id),
  data_cadastro date not null default current_date,
  usuario_atualizacao integer references usuarios(id),
  data_atualizacao date
);

create table if not exists status(
  id serial primary key,
  descricao text not null unique,
  usuario_cadastro integer references usuarios(id),
  data_cadastro date not null default current_date,
  usuario_atualizacao integer references usuarios(id),
  data_atualizacao date
);

create table if not exists agendamentos(
  id serial primary key,
  usuario_id integer references usuarios(id),
  veiculo_id integer references veiculos(id),
  profissional_id integer references usuarios(id),
  servico_id integer references servicos(id),
  valor integer not null,
  data_agendamento date not null,
  status_id integer references status(id),
  imagem text,
  data_cadastro date not null default current_date,
  avaliacao integer,
  usuario_atualizacao integer references usuarios(id),
  data_atualizacao date
);

insert into categoria_veiculo (descricao, usuario_cadastro ) 
values('Motocicleta', 1),('Quadriciclo', 1), 
('Automóvel - Passeio', 1),('Automóvel - SUV', 1),
('Caminhonete', 1),('Caminhão', 1),
('Micro-ônibus', 1),('Ônibus', 1);
