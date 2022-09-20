const Joi = require("joi");

const peopleShema = Joi.object({
  name: Joi.string().max(15).required(),
  surname: Joi.string().max(15).required(),
});

module.exports = { peopleShema };
