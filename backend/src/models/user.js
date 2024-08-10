const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },

    username: {
        type: String,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    },
    shelters: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Shelter'
        }
    ]

});

userSchema.pre('save', function process() {
    const password = this.password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    this.password = hash;

})

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);

}

userSchema.methods.getJwt = function generate() {
    return jwt.sign({ id: this.id, email: this.email }, 'usersecret', { expiresIn: '1hr' });
}


const User = mongoose.model("User", userSchema);

module.exports = User;