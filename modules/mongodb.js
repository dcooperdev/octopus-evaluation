const mongoose = require('mongoose')

mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/octopus-evaluation',
                  { retryWrites: false, useUnifiedTopology: true, useNewUrlParser: true },
                    ( err, res ) => {

    if ( err ) throw err

    console.log( `Mongodb running on host: ${res.host}, database: ${res.name}` )

})

mongoose.set('useCreateIndex', true);

module.exports = {
    mongoose
}