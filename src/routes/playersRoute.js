'use strict';
const express = require('express');
const router = express.Router();
const model = require('../models/playersModel');
const Interface = require('../models/interface');
const validator = require('../middleware/players.validator');
const games = new Interface(model);

router.get('/', getPlayers);
router.get('/:id', getPlayers);
router.post('/', validator, createPlayers);
router.put('/:id', validator, updatePlayers);
router.delete('/:id', validator, deletePlayers);

async function getPlayers(req, res, next){
  try {
    const id = req.params.id;
    const player = await games.read(id);
    res.status(200).json(player);
  } catch (error) {
    next(error);
  }
}

async function createPlayers(req, res, next){
  try {
    const data = req.body;
    const newPlayer = await games.create(data);
    res.status(200).json(newPlayer);
  } catch (error) {
    next(error);
  }
}

async function updatePlayers(req, res, next){
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedPlayer = await games.update(id, data);
    res.status(200).json(updatedPlayer);
  } catch (error) {
    next(error);
  }
}

async function deletePlayers(req, res, next){
  try {
    const id = req.params.id;
    const deletedPlayer = await games.delete(id);
    res.status(200).json(deletedPlayer);
  } catch (error) {
    next(error);
  }
}

module.exports = router;