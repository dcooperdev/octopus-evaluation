const express = require('express')
const router = express.Router()
const signup = require('../controller/signup.controller')

router.get('/', async ( req,res ) => {  
    try {
        const result = await signup.emailExists( req.headers );

        if ( result === null ) {
            res.status(404).json({
                message: 'User doesn\'t exists'
            })
        } else {
            res.status(409).json({
                message: 'User exists'
            })
        }
    } catch( error ) {
        res.status(500).json(
            error
        )
    }
})
router.post('/', async ( req,res ) => {
    try {
        const result = await signup.CreateUser( req.body );
        
        res.status(200).json(
            result
        )
    } catch( error ) {
        res.status(500).json(
            error
        )
    }
})

module.exports = router