const { verify } = require("../helpers/hashingHelper");
const { encodeJWT } = require("../helpers/jwtHelper");
const models = require("../models");

const signIn = async (req, res) => {
  const passwordVerif = await verify(
    req.user.hashed_password,
    req.body.password
  );

  try {
    if (!passwordVerif) {
      res.sendStatus(404);
    } else {
      delete req.user.hashed_password;

      const token = encodeJWT(req.user);

      res.cookie("auth_token", token, { httpOnly: true, secure: false });
      res.status(200).json(req.user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("connexionVerif");
  }
};

const signUp = async (req, res) => {
  const userCreate = await models.user.insert(req.body);
  try {
    if (userCreate) {
      delete req.body.password;
      delete req.body.passwordConfirm;

      req.body.id = userCreate.insertId;
      const token = encodeJWT(req.body);
      res.cookie("auth_token", token, { httpOnly: true, secure: false });

      res.status(201).json({ id: userCreate.insertId, ...req.body });
    } else {
      res.status(500).send("connexionSignup");
    }
  } catch (err) {
    console.error(err);
  }
};

const logout = (req, res) => {
  res.clearCookie("auth_token").sendStatus(200);
};

module.exports = {
  signIn,
  signUp,
  logout,
};
