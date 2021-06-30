'use strict';

const mongoose = require('mongoose');

const gamesSchema = mongoose.Schema({
  name : {
    type: String,
    required: true,
    unique: true,
  },
  rate : Number,
  genre : {
    type: String,
    required: true,
  },
});

const gamesModel = mongoose.model('game', gamesSchema);

module.exports = gamesModel;