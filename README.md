
# Garupa teste

Aplicação web e API REST 





## Autores

- [Érica irineu](https://www.github.com/irineuerica)



## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DB_HOST`

`DB_PORT`

`DB_USER`

`DB_PASS`

`DB_NAME = Garupa`

`JWT_PASS`




## Como executar o projeto

Criar base de dados (Banco PostgreSQL)
```bash: 
CREATE DATABASE Garupa
```
Entrar na pasta da api (node-api)
```bash: 
cd /node-api
```
instalar dependencias
```bash: 
npm install
```

Executar migration
```bash:                                
npm run migration:run
```

Executar api
```bash: 
npm start:dev
```
___

Entrar na pasta da aplicação react (react-app)
```bash: 
cd /react-app
```

Instalar dependencias
```bash: 
npm install
```
Executar aplicação
```bash: 
npm start
```
## ENDPOINTS

* Autenticação 

Criar usuário

url: http://localhost:3013

método: POST

```json: 
body:{
    "name": "exemplo",
    "email": "exemplo@email.com",
    "password": "1234"
}
```
_____

* Login

url: http://localhost:3013/login

método: POST
```json: 
body: {
    "email": "exemplo@email.com",
    "password": "1234"
}
```
_____

DADOS USUÁRIO - necessita de bearer token retornado no login

* Listar usuários

url: http://localhost:3013/

método: GET

___

 * Consultar usuário
 
url: http://localhost:3013/user/:id

método: GET

___

* Deletar usuário

url: http://localhost:3013/user/:id

método: DELETE

___

* Alterar usuário
url: http://localhost:3013/user/:id

método: PUT

```json: 
body: {
    "name": "exemplo",
    "email": "exemplo@email.com",
    "password": "1234"
}
```
