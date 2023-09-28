const models = require("../models");

const browseAllUser = async (req, res) => {
  const all = await models.user.findAll();
  try {
    res.send(all);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const readOneUser = async (req, res) => {
  const one = await models.user.find(req.params.id);
  try {
    if (one[0] == null) {
      res.sendStatus(404);
    } else {
      res.send(one[0]);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const editOneUser = async (req, res) => {
  const user = req.body;
  user.id = parseInt(req.params.id, 10);
  const one = await models.user.update(user);
  try {
    if (one.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const addOneUser = async (req, res) => {
  const user = req.body;
  const one = await models.user.insert(user);
  try {
    res.status(201).send(one);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const destroyOneUser = async (req, res) => {
  const userSup = await models.user.delete(req.params.id);
  try {
    if (userSup.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  browseAllUser,
  readOneUser,
  editOneUser,
  addOneUser,
  destroyOneUser,
};
