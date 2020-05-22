const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  tile: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Post', PostSchema);