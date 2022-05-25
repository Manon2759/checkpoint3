const albumModel = require('../models/album.model')

class albumController {

    async listAlbums(req, res) {
        try {
            const albums = await albumModel.getalbums()
            res.status(200).send(albums)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}
module.exports = new albumController()