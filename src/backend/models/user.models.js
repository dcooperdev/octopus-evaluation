const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

const user = new Schema({
    complete_name: { type: String, required: true },
    username_email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: { type: String, required: true, default: 'user' },
    createdDate: { type: Date, default: Date.now }
})

user.pre("save", async function(next) {
    let user = this
    if(!user.isModified("password"))
        return next()

    user.password = await bcrypt.hashSync(user.password, 1024)
    next()
});

user.methods.toJSON = function() {
    let user = this.toObject();
    delete user.password;
    return user;
}

module.exports = mongoose.model('User', user)