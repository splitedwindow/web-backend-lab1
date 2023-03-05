const { Router } = require("express");
const { Theaters } = require("../models/theaters");

const router = Router();

router.get("/theaters/:theaterId", async (req, res) => {

  const theaterId = req.params.theaterId;  
  dbQuery = {};

  if(theaterId) {
    dbQuery.theaterId = theaterId;
  }

  console.log(dbQuery);

  const docs = await Theaters.findOne(dbQuery);

  return res.status(200).send(docs);
});

module.exports = { router };