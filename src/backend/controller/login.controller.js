const User = require('../models/user.models')
const bcrypt = require('bcrypt')
const jws = require('../../../modules/jsonwebtokens')

const authenticateUser = async ( username_email, password ) => {

    let user = await User.findOne({username_email}).select('+password')
    const match = await bcrypt.compare(password, user.password)

    user = user.toObject();
    delete user.password;

    if ( match ) {

        return await jws.tokenize( user )

    }

    throw new Error('something bad happened')

}

module.exports = {
    authenticateUser
}