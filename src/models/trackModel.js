const mysql = require('mysql2')
class TrackModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })


    async getTracks() {
        try {
            const resultTracks = await this.connection.promise().query('SELECT * FROM track')
            return resultTracks[0]
        }
        catch (error) {
            throw error
        }
    }
    async getTrack(resultTrack) {
        try {
            const resultGetTrack = await this.connection.promise().query("SELECT * FROM album where id=?", [resultTrack])
            return resultGetTrack [0]
        }
        catch (error) {
            throw error
        }
    }
    async postTrack(createTrack) {
        try {
            const resultCreateTrack = await this.connection.promise().query('INSERT INTO  track set ?', [createTrack])
            return resultCreateTrack[0][0]
        }
        catch (error) {
            throw error
        }
    }
    async putTrack(putTrack) {
        try {
            const resultPutTrack = await this.connection.promise().query('UPDATE track set ? WHERE id = ?', [putTrack])
            return resultPutTrack[0]
        }
        catch (error) {
            throw error
        }
    }
    async deleteTrack(resultDelete) {
        try {
            const resultDeleteTrack = await this.connection.promise().query('DELETE FROM track WHERE id = ?', [resultDelete])
            return resultDeleteTrack[0]
        }
        catch (error) {
            throw error
        }
    }
}
module.exports = new TrackModel()

