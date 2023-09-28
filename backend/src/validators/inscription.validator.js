const Joi = require("joi");

const schemaInscription = Joi.object({
  nickName: Joi.string().alphanum().min(3).max(30).required(),

  firstName: Joi.string().alphanum().max(25).required(),

  lastName: Joi.string().alphanum().max(20).required(),

  password: Joi.string().min(8).required(),

  passwordConfirm: Joi.ref("password"),

  email: Joi.string().email().required(),
});
module.exports = schemaInscription;
