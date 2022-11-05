import Joi from 'joi';

const userSchema = Joi.string().required();
const passSchema = Joi.string().required();

const schemaLogin = Joi.object({
  username: userSchema,
  password: passSchema,
}); 

export default schemaLogin;