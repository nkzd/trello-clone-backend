const e = require('express');
const List = require('./models/list');
const autoCatch = require('./util/autocatch');

const getLists = async (req, res) => {
  const lists = await List.find({});
  res.json(lists);
};

const createList = async (req, res) => {
  const list = await List.create(req.body);
  res.json(list);
};

const getList = async (req, res) => {
  const list = await List.findById(req.params.id);
  res.json(list);
};

const editList = async (req, res) => {
  const change = req.body;
  const list = await List.findById(req.params.id);
  for (key in change) {
    list[key] = change[key];
  }
  await list.save();
  res.json(list);
};

const deleteList = async (req, res) => {
  await List.deleteOne({ _id: req.params.id });
  res.end();
};

const getCards = async (req, res) => {
  const list = await List.findById(req.params.id);
  res.json(list.cards);
};

const createCard = async (req, res) => {
  const list = await List.findById(req.params.id);
  const card = req.body;
  list.cards.push(card);
  const result = await list.save();
  res.json(result.cards[result.cards.length-1]);
};

const getCard = async (req, res, next) => {
  const list = await List.findById(req.params.listId);
  const card = list.cards.find((c) => c._id.toString() === req.params.cardId);
  if (!card) {
    next();
  } else {
      res.json(card);
  }
};

const editCard = async (req, res, next) => {
  const change = req.body;

  const list = await List.findById(req.params.listId);
  const card = list.cards.find((c) => c._id.toString() === req.params.cardId);
  if (!card) {
    next();
  } else {
    for (key in change) {
      card[key] = change[key];
    }
    await list.save();
    res.json(card);
  }
};

const deleteCard = async (req, res, next) => {
  const list = await List.findById(req.params.listId);
  const cardIndex = list.cards.findIndex(
    (c) => c._id.toString() === req.params.cardId
  );
  if (cardIndex === -1) {
    next();
  } else {
    list.cards.splice(cardIndex, 1);
    await list.save();
    res.end();
  }
};

module.exports = autoCatch({
  getLists,
  createList,
  getList,
  editList,
  deleteList,
  getCards,
  createCard,
  getCard,
  editCard,
  deleteCard
});
