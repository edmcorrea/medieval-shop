import Joi from 'joi';

const userSchema = Joi.string().required();
const passSchema = Joi.string().min(8).required();

const nameAmountSchema = Joi.string().min(3).required();

const userClasseSchema = Joi.string().min(3).required();
const levelSchema = Joi.number().min(1).required();

const productIdsSchema = Joi.array().items(Joi.number()).required();

export const schemaLogin = Joi.object({
  username: userSchema,
  password: passSchema,
});

export const schemaProducts = Joi.object({
  name: nameAmountSchema,
  amount: nameAmountSchema,
});

export const schemaUser = Joi.object({
  username: userClasseSchema,
  classe: userClasseSchema,
  level: levelSchema,
  password: passSchema,
});

export const schemaProductIds = Joi.object({
  productsIds: productIdsSchema,
});
