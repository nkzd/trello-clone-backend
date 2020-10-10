const { Schema } = require('mongoose');
const { LabelSchema } = require('./label');

const CardSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  labels: [LabelSchema],
  dueDate: Date,
  progressStatus: {
    type: String,
    enum: ['Not Started', 'In-Progress', 'On-Hold', 'Cancelled', 'Complete'],
  },
});

module.exports = CardSchema;
