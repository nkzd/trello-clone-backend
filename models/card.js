const { Schema } = require('mongoose');

const CardSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  labels: [{ type: Schema.Types.ObjectId, ref: 'Labels' }],
  dueDate: Number,
  progressStatus: {
    type: String,
    enum: ['Not Started', 'In-Progress', 'On-Hold', 'Cancelled', 'Complete'],
  },
});

module.exports = CardSchema;
