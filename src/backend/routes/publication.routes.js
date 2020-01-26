const express = require('express')
const router = express.Router()
const isAuthenticated = require('../auxiliary/authentications.auxiliary').isAuthenticated
const publication = require('../controller/publications.controller')

router.get('/', async ( req,res ) => {
    try {
        const publications = await publication.getPublicationsList();
        res.status(200).json(
            publications
        )
    } catch( error ) {
        res.status(500).json(
            error
        )
    }
})

router.post('/', isAuthenticated, async ( req,res,next ) => {

    try {
        const { title, body, image } = req.body
        const newPublication = await publication.createPublication( title, body, image, req.user.username_email )

        res.status(200).json(
            newPublication
        )
    } catch( error ) {
        res.status(500).json(
            error
        )
    }
})

module.exports = router