const Joi = require("joi");



async function valid(req) {

  try {
    const schema = Joi.object({
      email: Joi.string().required().email(),
      password: Joi.string().min(5).max(255).required(),
    });
    return await  schema.validateAsync(req);
  } catch (err) {
     return ("Error1", err);
  }
}





module.exports =  valid