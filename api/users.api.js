const { Router } = require("express");
const { Users } = require("../models/users");

const router = Router();

router.get("/users", async (req, res) => {
  const { skip = 0, limit = 10, name, email } = req.query;

  let dbQuery = {};

  if(name) {
    dbQuery.name = name;
  }

  if(email) {
    dbQuery.email = email;
  }

  const docs = await Users.find(dbQuery).skip(skip).limit(limit);

  return res.status(200).send(docs);
});

module.exports = { router };
