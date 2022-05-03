const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
  characterName: {
    type: String,
    required: true,
  },
  urlDaImage: {
    type: String,
    required: true,
  },
});
const characters = mongoose.model('character', CharacterSchema);
module.exports = characters;
