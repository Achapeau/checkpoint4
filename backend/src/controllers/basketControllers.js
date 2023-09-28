const models = require("../models");

const browseUserBasketById = async (req, res) => {
  const userBasket = await models.basket.findByUserId(req.params.id);
  try {
    res.send(userBasket).status(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const readOneBasket = async (req, res) => {
  const basket = await models.basket.find(req.params.id);
  try {
    if (basket[0] == null) {
      res.sendStatus(404);
    } else {
      res.send(basket[0]).status(201);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const editOneBasket = async (req, res) => {
  const { userId, productId, quantity, totalPrice, quantityItem, itemId } =
    req.body;
  const { id } = parseInt(req.params.id, 10);

  const result = await models.basket.update(
    userId,
    productId,
    quantity,
    totalPrice,
    id
  );

  try {
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }

  const updatedQuantity = await models.items.updateByUser(quantityItem, itemId);
  try {
    if (updatedQuantity.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const addOneBasket = async (req, res) => {
  const basket = req.body;
  const plusOne = await models.basket.insert(basket);
  try {
    res.status(201).send(plusOne);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const destroyOneBasket = async (req, res) => {
  const result = await models.basket.delete(req.params.id);
  try {
    if (result.affectedRows === 0) {
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
  browseUserBasketById,
  readOneBasket,
  editOneBasket,
  addOneBasket,
  destroyOneBasket,
};
