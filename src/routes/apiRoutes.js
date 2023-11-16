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

router.get('/', async (req, res) => {
  const talkers = await gelAll();
  res.status(200).json(talkers);
});

module.exports = router;
