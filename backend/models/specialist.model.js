const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const specialistSchema = new Schema({
  name: String,
  job: String,
  description: String,
  expertise: String,
  active: {
    type: Boolean,
    default: true
  }
});

module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.specialist, specialistSchema);