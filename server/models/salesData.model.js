const mongoose = require('mongoose');

const salesDataSchema = new mongoose.Schema({
  date: Date,
  value: Number,
  volume: Number
});

const SalesData = mongoose.model('SalesData', salesDataSchema);

module.exports = SalesData;
