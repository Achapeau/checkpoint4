const models = require("../models");

const browseUserBasketById = (req, res) => {
  models.basket
    .findByUserId(req.params.id)
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readOneBasket = (req, res) => {
  models.basket
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const editOneBasket = (req, res) => {
  const { userId, productId, quantity, totalPrice, quantityItem, itemId } =
    req.body;
  const { id } = parseInt(req.params.id, 10);

  models.basket
    .update(userId, productId, quantity, totalPrice, id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
  models.items
    .updateByUser(quantityItem, itemId)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addOneBasket = (req, res) => {
  const basket = req.body;
  models.basket
    .insert(basket)
    .then(([result]) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroyOneBasket = (req, res) => {
  models.basket
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browseUserBasketById,
  readOneBasket,
  editOneBasket,
  addOneBasket,
  destroyOneBasket,
};
