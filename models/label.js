const { Schema } = require('mongoose');
const db = require('./db');

const LabelSchema = new Schema({
  name: { type: String, maxlength: 30 },
  color: { type: String, required: true },
});

const Labels = db.model('Labels', LabelSchema);

module.exports = {
  LabelSchema,
  Labels,
};
