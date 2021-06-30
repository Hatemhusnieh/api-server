'use strict';
const express = require('express');
const router = express.Router();
const model = require('../models/gamesModel');
const Interface = require('../models/interface');
const games = new Interface(model);

router.get('/', getGames);
router.get('/:id', getGames);
router.post('/', createGames);
router.put('/:id', updateGames);
router.delete('/:id', deleteGames);

async function getGames(req, res, next){
  try {
    const id = req.params.id;
    const game = await games.read(id);
    res.status(200).json(game);
  } catch (error) {
    next(error);
  }
}

async function createGames(req, res, next){
  try {
    const data = req.body;
    const newGame = await games.create(data);
    res.status(200).json(newGame);
  } catch (error) {
    next(error);
  }
}

async function updateGames(req, res, next){
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedGame = await games.update(id, data);
    res.status(200).json(updatedGame);
  } catch (error) {
    next(error);
  }
}

async function deleteGames(req, res, next){
  try {
    const id = req.params.id;
    const deletedGame = await games.delete(id);
    res.status(200).json(deletedGame);
  } catch (error) {
    next(error);
  }
}

module.exports = router;