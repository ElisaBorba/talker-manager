# Talker Manager
Bem-vindo ao Talker Manager, uma aplicação para gerenciar palestrantes e suas informações! Com o Talker Manager, você pode adicionar, visualizar, atualizar e excluir palestrantes do seu sistema de forma simples e eficiente. Esta aplicação foi desenvolvida em `JavaScript` e é ideal para quem precisa organizar informações sobre palestrantes de eventos.

## ⚙️ Funcionalidades
* Adiciona novos palestrantes ao sistema, informando nome, idade e detalhes da palestra;
* Visualiza informações detalhadas de cada palestrante, incluindo nome, idade e detalhes da palestra;
* Atualiza as informações de um palestrante, incluindo nome, idade e detalhes da palestra;
* Exclua palestrantes do sistema de forma segura;

## 💻 Tecnologia Utilizada
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
### Como executar
1️⃣ Em um terminal, inicie os containers:
```
docker-compose up -d
```
2️⃣ Acessando o terminal:
```
docker exec -it talker_manager bash
npm start
```
3️⃣ Em outro terminal, execute os testes:
```
docker exec -it talker_manager bash
npm test
```
