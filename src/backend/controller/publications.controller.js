const Publication = require('../models/publication.models')

const getPublicationsList = async () => {
    return await Publication.find({ published: true })
}

const createPublication = async (title, body, image, owner) => {

    const publication = await Publication.create({
        title,
        body,
        image,
        owner
    })

    return publication

}

const updatePublication = async (id, title, body, image, published, user) => {
    const publication = await Publication.findOne({ _id: id })
    
    if ( publication.owner === user ) {

        const update = await Publication.update(
            { _id: id },
            { title, body, image, published }
        )
        return update
    }

    return false
}

const unpublish = async ( id, state ) => {
    const publication = await Publication.findOneAndUpdate(
        { _id: id },
        {
            published: state
        },
        { safe: true, upsert: true, new: true }
    )
    return publication
}

module.exports = {
    getPublicationsList,
    createPublication,
    updatePublication,
    unpublish
}