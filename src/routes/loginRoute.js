const express = require('express');
const loginRouter = express.Router();

const generateToken = require('../utils/generateToken');

loginRouter.post('/', (req, res) => {
  const { email, password } = req.body;

  if (![email, password].includes(undefined)) {
    const token = generateToken();
    console.log(`Recebida uma solicitação de login para o email: ${email}`);
    res.status(200).json({ token });
  } else {
    console.log('Campos ausentes na solicitação de login.');
    res.status(401).json({ message: 'Campos ausentes!' });
  }
});

module.exports = loginRouter;
