const { Schema } = require('mongoose');
const db = require('./db');
const CardSchema = require('./card');

const ListSchema = new Schema({
  name: { type: String, required: true },
  cards: [CardSchema],
});

const List = db.model('List', ListSchema);

module.exports = List;
