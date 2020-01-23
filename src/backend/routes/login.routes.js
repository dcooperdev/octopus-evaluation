const express = require('express')
const router = express.Router()

router.get('/', async ( req,res ) => {
    res.status(200).json({
        success: true,
        body: 'You get the response from Login!'
    })
})
router.post('/', async ( req,res ) => {
    res.status(200).json({
        success: true,
        body: {
            message: 'This is your post body',
            body: req.body
        }
    })
})

module.exports = router