# Desafio Loopis 2020.1

O projeto consiste em desenvolver um software para sortear amigo secreto e enviar um e-mail para cada pessoa inscrita com o amigo sorteado.

## Requisitos

-[x] cadastrar pessoas com nome e email
-[x] atualizar informações das pessoas
-[x] listar pessoas registradas
-[x] remover informações das pessoas
-[x] sortear entre todas as pessoas registradas um amigo secreto e exibir o resultado do sorteio
-[x] enviar o resultado individual por email (opcional)

## Executar
Para instalar dependências:
```bash
$ yarn
```
Para executar projeto (backend/frontend):
```bash
$ yarn start
```

## backend formato da data para enviar emails
```json
{
    "data": [
	{
        "nome": "exemplo",
	"email": "email@exemplo.com"
	"amigo": "exemplo2"
 	},
	{
	"nome": "exemplo2",
	"email": "email2@exemplo.com"
	"amigo": "exemplo3"
 	},
	{
	"nome": "exemplo3",
	"email": "email2@exemplo.com"
	"amigo": "exemplo"
 	}
    ]
}
```

## backend .env arquivo
```js
USER=teste@gmail.com
PASS=teste
SERVICE=GMAIL
````
obs: poderá ser necessário configurações no código no caso de uso de outros serviços e/ou caso seja usado outros modos de autenticação diferente do https://myaccount.google.com/lesssecureapps

## frontend
responsivo para desktop web.