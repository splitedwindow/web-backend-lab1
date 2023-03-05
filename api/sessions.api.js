const Router = require("express");
const { Sessions } = require("../models/sessions");

const router = Router();

router.get("/sessions", async (req, res) => {
  const { skip = 0, limit = 10, userId } = req.query;

  let dbQuery = {};

  if (userId) {
    dbQuery.user_id = userId;
  }

  const docs = await Sessions.find(dbQuery).skip(skip).limit(limit);

  return res.status(200).send(docs);
});

module.exports = { router };
