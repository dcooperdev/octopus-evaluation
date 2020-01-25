const User = require('../models/user.models')

const emailExists = async ( username_email ) => {
    
    return await User.findOne({ username_email });
}

const CreateUser = async ( complete_name, username_email, password ) => {

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