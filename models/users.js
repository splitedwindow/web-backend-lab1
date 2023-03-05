const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Users = new model("users", schema);

module.exports = { Users };
