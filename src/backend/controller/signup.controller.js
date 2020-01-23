const User = require('../models/user.models')

const emailExists = async ( userEmail ) => {
    const { username_email } = userEmail;
    return await User.findOne({ username_email });
}

const CreateUser = async ( newUser ) => {

    const { complete_name, username_email, password } = newUser;

    const user = await User.create({
        complete_name,
        username_email,
        password
    })

    return user
}

module.exports = {
    emailExists,
    CreateUser
}