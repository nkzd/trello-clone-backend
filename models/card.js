const { Schema } = require('mongoose');
const db = require('../db');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  name: String,
  description: String,
  labels: [LabelSchema],
  dueDate: Date,
  status: {
    type: String,
    enum: ['Not Started', 'In-Progress', 'On-Hold', 'Cancelled', 'Complete'],
  },
});

module.exports = CardSchema;
