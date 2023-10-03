# garupa-teste

Criar .env utilizando o .env.example como base. Preecher dados com a informações do banco (host, user, password...)

Criar base de dados
CREATE DATABASE Garupa

entrar na pasta da api (node-api)
cd /node-api
instalar dependencias
npm install

MIGRATIONS                               
npm run migration:run

npm start:dev

entrar na pasta da aplicação react (react-app)
cd /react-app

instalar dependencias
npm install

npm start

ENDPOINTS 

AUTENTICAÇÃO 
-Criar usuário
url: http://localhost:3013
método: POST
body: {
    "name": "exemplo",
    "email": "exemplo@email.com",
    "password": "1234"

}
-login
url: http://localhost:3013/login
método: POST
body: {
    "email": "exemplo@email.com",
    "password": "1234"
}
_____

DADOS USUÁRIO - necessita de bearer token retornado no login
-listar usuários
url: http://localhost:3013/user
método: GET

-consultar usuário
url: http://localhost:3013/user/:id
método: GET

-deletar usuário
url: http://localhost:3013/user/:id
método: DELETE

-alterar usuário
url: http://localhost:3013/user/:id
método: PUT
body: {
    "name": "exemplo",

    "email": "exemplo@email.com",
    "password": "1234"

}