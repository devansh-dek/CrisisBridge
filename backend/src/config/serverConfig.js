const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    SALT: bcrypt.genSaltSync(9),
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY
}