const { Router } = require("express");
const { Theaters } = require("../models/theaters");

const router = Router();
const router1 = Router();

router.get("/theaters", async (req, res) => {
  const {
    skip = 0,
    limit = 10,
    address_city, // ✔️
    theaterId, // ✔️
    address_zipcode, // ✔️
    latitude, // ✔️
    longitude, // ✔️
  } = req.query;

  let dbQuery = {};

  if (theaterId) {
    dbQuery.theaterId = theaterId;
  }

  if (address_zipcode) {
    dbQuery["location.address.zipcode"] = address_zipcode;
  }

  if (latitude) {
    dbQuery["location.geo.coordinates.0"] = parseFloat(latitude);
    console.log(parseInt(latitude));
  }

  if (longitude) {
    dbQuery["location.geo.coordinates.1"] = parseFloat(longitude);
    console.log(parseInt(longitude));
  }

  if (address_city) {
    dbQuery["location.address.city"] = address_city;
  }

  const docs = await Theaters.find(dbQuery).skip(skip).limit(limit);

  return res.status(200).send(docs);
});

module.exports = { router };
