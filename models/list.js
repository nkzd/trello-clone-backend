const { Schema } = require('mongoose');
const db = require('./db');
const CardSchema = require('./card');

const ListSchema = new Schema({
  name: { type: String, required: true, maxlength: 50 },
  cards: [CardSchema],
});

const List = db.model('List', ListSchema);

module.exports = List;
