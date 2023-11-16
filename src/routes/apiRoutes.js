const express = require('express');

const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

const talkersPath = path.resolve(__dirname, '../talker.json');

const readFile = async () => {
  try {
    const data = (await fs.readFile(talkersPath, 'utf-8')) || [];
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

const gelAll = async () => {
  const talkers = await readFile();
  return talkers;
};

const getById = async (id) => {
  const talkers = await readFile();
  return talkers.find(({ id: talkerId }) => talkerId === Number(id));
};

router.get('/', async (req, res) => {
  const talkers = await gelAll();
  res.status(200).json(talkers);
});

router.get('/:id', async (req, res) => {
  const talker = await getById(req.params.id);

  if (talker) {
    return res.status(200).json(talker);
  }

  res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
});

module.exports = router;
