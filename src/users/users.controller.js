const userService = require('./users.service');
const authService = require('../auth/auth.service');
const mongoose = require('mongoose');

// create
const createUserController = async (req, res) => {
  const { username, name, email, password, avatar } = req.body;

  if (!username || !name || !email || !password || !avatar) {
    return res.status(400).send({
      message:
        "Alguns campos estão faltando. os campos são: 'username', 'name', 'email', 'password' ou 'avatar'.",
    });
  }
  const foundUser = await userService.findByEmailUserService(email);

  if (foundUser) {
    return res.status(400).send({
      message: 'Usuário ja existe',
    });
  }

  const user = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err.message));

  if (!user) {
    return res.status(400).send({
      message: 'Erro ao criar Usuário!',
    });
  }

  const token = authService.generateToken(user.id);

  res.status(201).send({
    user: {
      id: user.id,
      name,
      username,
      email,
      avatar,
    },
    token,
  });

  res.send({ token });
};
// all
const findAllUserController = async (req, res) => {
  const users = await userService.findAllUserService();

  if (users.length === 0) {
    return res.status(400).send({
      message: 'Não existem usuários cadastrados!',
    });
  }

  res.send(users);
};
// all characters
const findAllCharacterController = async (req, res) => {
  const character = await userService.findAllCharacterService();

  if (character.lenght == 0) {
    return res.status(404).send({ message: 'Não existe nenhuma personagem cadastrada' });
  }
  res.send(character);
};

// by id
const findByIdCharacterController = async (req, res) => {
  const idParam = req.params.id;

  const characters = await userService.findByIdCharacterService(idParam);
  if (!characters) {
    return res.status(404).send({ message: 'Character não encontrada!' });
  }

  res.send(characters);
};
// By name
const findByNameCharacterController = async (req, res) => {
  const idParam = req.params.characterName;

  const characters = await userService.findByNameCharacterService(idParam);
  if (!characters) {
    return res.status(404).send({ message: 'Character não encontrada!' });
  }

  res.send(characters);
};

// CREATE
const createCharacterController = async (req, res) => {
  const characters = req.body;

  const newCharacter = await userService.createCharacterService(characters);
  res.status(201).send(newCharacter);
};

// update
const updateCharacterController = async (req, res) => {
  const idParam = req.params.id;

  const characterEdit = req.body;

  const updateCharacter = await userService.updateCharacterService(idParam, characterEdit);
  res.send(updateCharacter);
};
// delete
const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;
  await userService.deleteCharacterService(idParam);

  res.send({ message: 'Character deletada com sucesso!' });
};

module.exports = {
  createUserController,
  findAllUserController,
  findAllCharacterController,
  findByIdCharacterController,
  findByNameCharacterController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
