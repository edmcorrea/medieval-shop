import Joi from 'joi';

const userSchema = Joi.string().required();
const passSchema = Joi.string().required();

const nameAmountSchema = Joi.string().min(3).required();

export const schemaLogin = Joi.object({
  username: userSchema,
  password: passSchema,
});

export const schemaProducts = Joi.object({
  name: nameAmountSchema,
  amount: nameAmountSchema,
});
