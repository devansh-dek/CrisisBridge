const User = require('../models/user');
const CrudRepository = require('./crud-repository')
class UserRepository extends CrudRepository {

    constructor() {
        super(User)
    }

    async findByEmail(email) {
        try {
            const user = await User.findOne({ email: email });
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async findByUsername(username) {
        try {
            const user = await User.findOne({ username: username }).exec();
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = UserRepository;