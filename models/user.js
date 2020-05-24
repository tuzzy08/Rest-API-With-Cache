const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  provider: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);