const trackModel = require('../models/track.model')

class trackController {

    async listTracks(req, res) {
        try {
            const tracks = await trackModel.gettracks()
            res.status(200).send(tracks)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}
module.exports = new trackController()