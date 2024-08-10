// import { UserRepository } from "../repository/index.js";
const { UserRepository } = require('../repository')
const bcrypt = require('bcrypt');
const { JWT_SECRET_KEY } = require('../config/serverConfig');
const jwt = require('jsonwebtoken');
class UserServices {
    constructor() {
        this.userRepo = new UserRepository();
    }

    async signup(data) {
        try {
            const duplicateuser = await this.userRepo.findByUsername(data.username);
            if (duplicateuser) {
                throw {
                    err: 'Username has been taken'
                }
            }

            const duplicateemail = await this.userRepo.findByEmail(data.email);
            if (duplicateemail) {
                throw {
                    err: 'Email already in use'
                }
            }

            const user = await this.userRepo.create(data);

            const token = this.#createToken(user);

            const response = {
                id: user._id,
                username: user.username,
                email: user.email,
                access: token
            }
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async login(data) {
        try {
            const user = await this.userRepo.findByEmail(data.email);
            if (!user) {
                throw {
                    err: 'no user found'
                }
            }

            const checkPassword = this.#comparePassword(data.password, user.password);
            if (!checkPassword) {
                throw {
                    err: 'wrong password'
                }
            }

            const token = this.#createToken(user);

            const response = {
                id: user._id,
                username: user.username,
                email: user.email,
                access: token
            }
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async authenticate(token) {
        try {
            const decodedData = jwt.verify(token, JWT_SECRET_KEY);
            return decodedData;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    #createToken(user) {
        try {
            const token = jwt.sign({
                id: user._id,
                username: user.username,
                email: user.email
            }, JWT_SECRET_KEY, { expiresIn: '1d' });

            return token;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    #comparePassword(inputPass, encryptedPass) {
        try {
            const checkPassword = bcrypt.compareSync(inputPass, encryptedPass);
            return checkPassword;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
module.exports = UserServices;