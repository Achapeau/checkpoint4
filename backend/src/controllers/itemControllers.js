const models = require("../models");

const browseAllItem = async (req, res) => {
  const all = await models.item.findAll();
  try {
    res.send(all);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const readOneItem = async (req, res) => {
  const one = await models.item.find(req.params.id);

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

const editOneItemByAdmin = async (req, res) => {
  const item = req.body;
  item.id = parseInt(req.params.id, 10);
  const one = await models.item.updateByAdmin(item);
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

const editOneItem = async (req, res) => {
  const item = req.body;
  item.id = parseInt(req.params.id, 10);
  const one = await models.item.update(item);
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

const addOneItem = async (req, res) => {
  const item = req.body;
  const added = await models.item.insert(item);
  try {
    res.status(201).send(added);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const destroyOneItem = async (req, res) => {
  const itemSup = await models.item.delete(req.params.id);
  try {
    if (itemSup.affectedRows === 0) {
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
  browseAllItem,
  readOneItem,
  editOneItem,
  addOneItem,
  destroyOneItem,
  editOneItemByAdmin,
};
