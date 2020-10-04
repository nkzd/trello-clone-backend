const { Schema } = require('mongoose');
const db = require('./db');

const LabelSchema = new Schema({
  name: String,
  color: { type: String, required: true },
});

const CustomLabel = db.model('CustomLabel', LabelSchema);

module.exports = {
  LabelSchema,
  CustomLabel,
};
