
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const connect = async () => {
    await mongoose.connect(process.env.MONGO_DB_URI);
};

module.exports = connect;