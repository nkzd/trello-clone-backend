const db = require('../db');
const Schema = mongoose.Schema;

const LabelSchema = new Schema({
    name: { type: String, required: true },
    color: String,
});

const CustomLabel = db.model('CustomLabel', LabelSchema);

module.exports = CustomLabel;