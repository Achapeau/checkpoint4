const models = require("../models");

const checkUserDoesntExists = async (req, res, next) => {
  const [user] = await models.user.findOneByEmail(req.body);

  if (user.length) {
    return res.status(400).json({ message: "User already exists" });
  }
  return next();
};

const checkUserExists = async (req, res, next) => {
  const [user] = await models.user.findOneByEmail(req.body);

  if (!user.length) {
    return res.status(400).json({ message: "User doesn't exists" });
  }
  [req.user] = user;
  return next();
};

module.exports = { checkUserDoesntExists, checkUserExists };
