const express = require('express');

const router = express.Router();
const fs = require('fs').promises;

const path = require('path');

const { readFile, getAll, getById } = require('../controllers/talkerController');

const {
  validateName,
  validateAge,
  validateTalk,
  validateTalkKeys,
} = require('../middlewares/validate.talker');

const auth = require('../middlewares/auth');

const isIdFound = require('../middlewares/validate.not.found.talker');

const talkersPath = path.resolve(__dirname, '../talker.json');

router.get('/', async (req, res) => {
  const talkers = await getAll();
  res.status(200).json(talkers);
});

router.get('/:id', async (req, res) => {
  const talker = await getById(req.params.id);

  if (talker) {
    return res.status(200).json(talker);
  }

  res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
});

router.post('/',
  auth,
  validateName,
  validateAge,
  validateTalk,
  validateTalkKeys,
  async (req, res) => {
    const { name, age, talk: { watchedAt, rate } } = req.body;
    const talkers = await readFile();
    const newId = talkers.length + 1;

    const newTalker = {
      id: newId,
      name,
      age,
      talk: {
        watchedAt,
        rate,
      },
    };
    const allTalkers = JSON.stringify([...talkers, newTalker]);
    await fs.writeFile(talkersPath, allTalkers);
    res.status(201).json(newTalker);
  });

router.put('/:id',
  auth,
  validateName,
  validateAge,
  validateTalk,
  validateTalkKeys,
  isIdFound,
  async (req, res) => {
    const { id } = req.params;
    const { name, age, talk: { watchedAt, rate } } = req.body;

    const talkers = await readFile();
    const index = talkers.findIndex((talker) => talker.id === Number(id));
    talkers[index] = { id: Number(id), name, age, talk: { watchedAt, rate } };

    const updatedTalkers = JSON.stringify(talkers, null, 2);
    await fs.writeFile(talkersPath, updatedTalkers);
    res.status(200).json(talkers[index]);
  });

module.exports = router;
