'use strict';
const mongoose = require('mongoose');

const playersSchema = mongoose.Schema({
  name : {
    type: String,
    required: true,
    unique: true,
  },
  games: {
    type : String,
    required: true, 
  },
});

const playersModel = mongoose.model('player', playersSchema);

module.exports = playersModel;