const User = require('./user');
const Character = require('./character');

const findByEmailUserService = (email) => User.findOne({ email: email });

const createUserService = (body) => User.create(body);

const findAllUserService = () => User.find();

const findByIdUserService = (idUser) => User.findById(idUser);
// characters
const createCharacterService = async (newCharacter) => {
  const characterCreate = await Character.create(newCharacter);
  return characterCreate;
};

const findAllCharacterService = async () => {
  const character = await Character.find();
  return character;
};

const findByIdCharacterService = async (idParam) => {
  const character = await Character.findById(idParam);
  return character;
};

const updateCharacterService = async (id, characterEdited) => {
  const characterEdit = await Character.findByIdAndUpdate(id, characterEdited);
  return characterEdit;
};
const deleteCharacterService = async (id) => {
  return await Character.findByIdAndDelete(id);
};
const findByNameCharacterService = async (nameParam) => {
  const character = await Character.findById(nameParam);
  return character;
};

module.exports = {
  findByEmailUserService,
  createUserService,
  findAllUserService,
  findByIdUserService,
  findAllCharacterService,
  findByIdCharacterService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
  findByNameCharacterService,
};
