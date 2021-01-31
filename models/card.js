const { Schema } = require('mongoose');

const CardSchema = new Schema({
  name: { type: String, required: true, maxlength: 255 },
  description: { type: String, maxlength: 1000 },
  labels: [{ type: Schema.Types.ObjectId, ref: 'Labels' }],
  dueDate: Number,
  progressStatus: {
    type: String,
    enum: ['Not Started', 'In-Progress', 'On-Hold', 'Cancelled', 'Complete', null],
  },
});

module.exports = CardSchema;
