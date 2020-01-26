const Publication = require('../models/publication.models')

const getPublicationsList = async () => {
    return await Publication.find()
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

const unpublish = async ( id ) => {}

const like = async ( id, user ) => {}

const comment = async ( id, user, comment ) => {}

module.exports = {
    getPublicationsList,
    createPublication,
    unpublish,
    like,
    comment
}