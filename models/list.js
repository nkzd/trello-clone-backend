const { Schema } = require('mongoose');
const db = require('../db');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  name: String,
  cards: [CardSchema],
});

const List = db.model('List', ListSchema);

module.exports = List;
