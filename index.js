require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const Mongo = require('./setup/mongoose');

const Theaters = require('./models/theaters');
const Users = require('./models/users');
const Sessions = require('./models/sessions');

const UsersController = require('./api/users.api');
const TheatersController = require('./api/theaters.api');
const TheaterIdController = require('./api/theaterId.api');
const SessionsController = require('./api/sessions.api');
const { setupDb } = require('./setup/mongoose');

PORT = process.env.PORT;

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const setup = async() => {
  await Mongo.setupDb(process.env.DB_URI);

  app.use(TheatersController.router);
  app.use(TheaterIdController.router);
  app.use(UsersController.router);
  app.use(SessionsController.router);

  app.get("/users", async (req, res) => {
    const docs = await Users.find({}).limit(20);
    return res.status(200).send(docs);
  });

  app.get('./theaters', async (req, res) => {
    const docs = await Theaters.find({}).limit(20);
    return res.status(200).send(docs);
  });

  app.get('./theaters/:theaterId', async (req, res) => {
    const docs = await Theaters.find({});
    return res.status(200).send(docs);
  });

  app.get('./sessions', async (req, res) => {
    const docs = await Sessions.find({}).limit(20);
    return res.status(200).send(docs);
  });

  app.listen(PORT, () => {
    console.log("Server was started at ", PORT);
  });
}


setup();