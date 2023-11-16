const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }

  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
   
  next();
};

const validateAge = (req, res, next) => {
  const { age } = req.body;
  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }

  if (!Number.isInteger(age) || Number(age) < 18) {
    return res.status(400)
      .json({ message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' });
  }
      
  next();
};
    
const validateTalk = (req, res, next) => {
  const { talk } = req.body;
  const talksProperties = ['watchedAt', 'rate'];
    
  if (!talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }

  const missingProperty = talksProperties.find((property) => !(property in talk));

  if (missingProperty) {
    return res.status(400).json({ message: `O campo "${missingProperty}" é obrigatório` });
  }

  next();
};

const validateTalkKeys = (req, res, next) => {
  const { watchedAt, rate } = req.body.talk;
  const regexDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  const isValidDate = regexDate.test(watchedAt);

  if (!isValidDate) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  if (!Number.isInteger(rate) || !(rate >= 1 && rate <= 5)) {
    return res.status(400)
      .json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' });
  }

  next();
};
    
module.exports = {
  validateName,
  validateAge,
  validateTalk,
  validateTalkKeys,
};