const db = require('../../config/db');

class DivisiPdiAdm {
    static getAllDivisiPdi(callback) {
        const query = 'SELECT * FROM divisi_pdi';
        db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }

    static addComment(userId, comment, callback) {
        const query = 'UPDATE divisi_pdi SET komentar_div_pdi = ? WHERE id = ?';
        db.query(query, [comment, userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }
}

module.exports = DivisiPdiAdm;
