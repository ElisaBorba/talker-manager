# Talker Manager
Bem-vindo ao Talker Manager, uma aplicação para gerenciar palestrantes e suas informações! Com o Talker Manager, você pode adicionar, visualizar, atualizar e excluir palestrantes do seu sistema de forma simples e eficiente. Esta aplicação foi desenvolvida em `JavaScript` e é ideal para quem precisa organizar informações sobre palestrantes de eventos.

## 💻 Tecnologias Utilizadas
* Node.js
* Express.js
* JavaScript

### Estrutura do projeto
```
.
├── src/
│   ├── controllers/
│   │   ├── talkerController.js
│   ├── middlewares/
│   │   ├── auth.js
│   │   ├── validate.login.js
│   │   ├── validate.not.found.talker.js
│   │   ├── validate.talker.js
│   ├── routes/
│   │   ├── loginRoute.js
│   │   ├── talkerRoute.js
│   ├── utils/
│   │   ├── generateToken.js
│   ├── index.js
│   ├── talker.json
├── docker-compose.yml
├── Dockerfile
└── README.md
```

### Endpoints Disponíveis
* POST /login: Rota para autenticação de usuário.
* GET /talker: Rota para listar todos os palestrantes.
* GET /talker/:id: Rota para obter informações de um palestrante específico.
* GET /talker/search?q=query: Rota para buscar palestrantes pelo nome.
* POST /talker: Rota para adicionar um novo palestrante.
* PUT /talker/:id: Rota para atualizar informações de um palestrante.
* DELETE /talker/:id: Rota para excluir um palestrante.

### Execute os testes com:
```
npm test
```
