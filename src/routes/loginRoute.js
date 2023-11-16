const express = require('express');

const loginRouter = express.Router();

const { validateEmail, validatePassword } = require('../middlewares/validate.login');

const generateToken = require('../utils/generateToken');

loginRouter.post('/', validateEmail, validatePassword, (req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = loginRouter;
