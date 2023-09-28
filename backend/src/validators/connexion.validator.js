const Joi = require("joi");

const schemaConnexion = Joi.object({
  email: Joi.string().email().required(),

  password: Joi.string().min(8).required(),
});
module.exports = schemaConnexion;
