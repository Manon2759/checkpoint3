const mysql = require('mysql2')

class TrackModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_User,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })

    async getTracks() {
        try {
            const result = await this.connection.promise().query('SELECT * FROM track')
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    async postTracks(id, title, youtube_url, id_album) {
        try {
          const result = await this.connection.promise().query(
            'INSERT INTO track(id, title, youtube_url, id_album) VALUES (?, ?, ?, ?)',
            [id, title, youtube_url, id_album],
          );
          return result[0];
        } catch (error) {
          throw error;
        }
      }

    
      async updateUser(email, password, picture, id) {
        try {
          const result = await this.connection.promise().query(
            'UPDATE user SET email = ?, password = ?, picture = ? WHERE id = ?',
            [email, password, picture, id],
          );
          return result[0];
        } catch (error) {
          throw error;
        }
      }
    
      async deleteUser(id) {
        try {
          const result = await this.connection.promise().query(
            'DELETE FROM user WHERE id = ?',
            [id],
          );
          return result[0];
        } catch (error) {
          throw error;
        }
      }
    }
}
module.exports = new TrackModel()







