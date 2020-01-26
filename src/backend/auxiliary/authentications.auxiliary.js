const config = require('../../../config/auth.config')
const jwt = require('../../../modules/jsonwebtokens')

const isAuthenticated = async ( req, res, next ) => {
    const { authorization } = req.headers

    if ( req.headers ){
        try{
            const user = await jwt.decode(authorization)
            req.user = user.data
            return next ? next() : true
        }
        catch(error){
            res.status(401).json(error)
        }
    }else
    return next ? res.status(401).json({ message: 'Please make sure your request has an Authorization header' }) : false

    next()
}

const isAdmin = async ( req, res, next ) => {
    const { rol } = req.user
    if( rol === 'admin' ) {
        return next ? next() : true
    }
    return next ? res.status(401).json({ message: 'Please make sure your are an Administrator' }) : false
}

module.exports = {
    isAuthenticated,
    isAdmin
}