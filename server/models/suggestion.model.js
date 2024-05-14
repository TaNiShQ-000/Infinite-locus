const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema({
  name: String,
  type: String,
  status: String
});

const Suggestion = mongoose.model('Suggestion', suggestionSchema);

module.exports = Suggestion;