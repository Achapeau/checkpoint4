const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browseAllItem);
router.get("/items/:id", itemControllers.readOneItem);
router.put("/items/:id", itemControllers.editOneItem);
router.put("/admin/items/:id", itemControllers.editOneItemByAdmin);
router.post("/items", itemControllers.addOneItem);
router.delete("/items/:id", itemControllers.destroyOneItem);

const basketControllers = require("./controllers/basketControllers");

router.get("/baskets", basketControllers.browseUserBasketById);
router.get("/baskets/:id", basketControllers.readOneBasket);
router.put("/baskets/:id", basketControllers.editOneBasket);
router.post("/baskets", basketControllers.addOneBasket);
router.delete("/baskets/:id", basketControllers.destroyOneBasket);

const userControllers = require("./controllers/userControllers");

router.get("/user", userControllers.browseAllUser);
router.get("/user/:id", userControllers.readOneUser);
router.put("/user/:id", userControllers.editOneUser);
router.post("/user", userControllers.addOneUser);
router.delete("/user/:id", userControllers.destroyOneUser);

module.exports = router;
