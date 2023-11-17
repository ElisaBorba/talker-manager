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

const getAll = async () => {
  const talkers = await readFile();
  return talkers;
};

const getById = async (id) => {
  const talkers = await readFile();
  return talkers.find(({ id: talkerId }) => talkerId === Number(id));
};

const isIdFound = async (id) => {
  const talkers = await readFile();
  return talkers.some(({ id: talkerId }) => talkerId === Number(id));
};

module.exports = {
  readFile,
  getAll,
  getById,
  isIdFound,
};
