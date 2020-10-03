const { Schema } = require('mongoose');
const db = require('../db');

const LabelSchema = new Schema({
  name: { type: String, required: true },
  color: String,
});

const CustomLabel = db.model('CustomLabel', LabelSchema);

module.exports = {
  LabelSchema,
  CustomLabel,
};
