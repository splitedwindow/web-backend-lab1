const { Schema, model } = require('mongoose');

const schema = new Schema({
  user_id: String,
  jwt: String
});

const Sessions = new model('sessions', schema);

module.exports = { Sessions };