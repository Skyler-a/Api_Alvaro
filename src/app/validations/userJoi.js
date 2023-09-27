const joi = require('joi')
const enums = require('../utils/enums');
const { cpf } = require('../utils/regex');

const userPost = joi.object({
  name: joi.string().min(4).required(),
  cpf: joi.string().min(11).max(14).regex(cpf).message('Invalid CPF format. Try: 000.000.000-00').required(),
  email: joi.string().email().required(),
  role: joi
    .string()
    .valid(...enums.role)
    .required()
});

const userPut = joi.object({
  name: joi.string().min(4),
  cpf: joi.string().min(11).max(14).regex(cpf).message('Invalid CPF format. Try: 000.000.000-00'),
  email: joi.string().email(),
  role: joi.string().valid(...enums.role)
});


module.exports = { userPost, userPut };