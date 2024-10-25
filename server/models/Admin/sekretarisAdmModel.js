const db = require('../../config/db');

class SekretarisAdm {
    static getAllSekretaris(callback) {
        const query = 'SELECT * FROM sekretaris';
        db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }

    static addKomentar(userId, comment, callback) {
        const query = 'UPDATE sekretaris SET komentar_sekretaris = ? WHERE id = ?';
        db.query(query, [comment, userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }
}

module.exports = SekretarisAdm;
