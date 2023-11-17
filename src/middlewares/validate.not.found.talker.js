const { isIdFound } = require('../controllers/talkerController');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const idFound = await isIdFound(id);

  if (!idFound) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  next();
};
