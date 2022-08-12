# Cardapio

Cardápio Digital

Descrição do projeto:

O projeto visa desenvolver uma aplicação que exiba para o usuário os produtos com seus respectivos preços. Os usuários poderão 
selecionar os produtos desejados e deverão se cadastrar para enviar seus dados para o estabelecimento 
junto com seu pedido através do aplicativo whatsapp.


REQUISITOS:
	 A aplicação deve permitir criar novos produtos (CRUD) --
	 A aplicação deve permitir editar os produtos existentes (CRUD)--
	 A aplicação deve permitir excluir produtos (CRUD)--
	 A aplicação deve permotir buscar produtos (CRUD)--

	 A aplicação deve permitir criar novos usuários(CRUD)--
	 A aplicação deve permitir editar os usuários existentes (CRUD)--
	 A aplicação deve permitir excluir usuários (CRUD)--
	 A aplicação deve permitir buscar produtos (CRUD)--

REGRAS DE NEGÓCIO:
	- O sistema contará com um sistema de login
	- Haverá conceito de usuário
	- Somente quem poderá cadastrar e editar produtos será o admin da aplicação
	- Deve ser possível filtrar os produtos
	- Somente usuários cadastrados poderão enviar seus pedidos, mas todos poderão ver os produtos
	- Ao informar o cep os outros campos de endereço auto-completam.


ENTIDADES:
Produto:
	-ID
	-Nome
	-Tipo
	-Preço Pequeno
	-Preço Médio
	-Preço Grande
	-Descrição
	-Foto Atual
	-Foto Nova

Usuário:
	-ID
	-Nome
	-Email
	-Senha
	-Telefone
	-CEP
	-Rua
	-Número
	-Complemento

Tecnologías:
	-React
	-Typescript
	-Vite
	-Bootstrap
	-Firebase
	
