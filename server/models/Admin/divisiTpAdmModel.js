const db = require('../../config/db');

class DivisiTpAdm {
    static getAllDivisiTp(callback) {
        const query = 'SELECT * FROM divisi_tp';
        db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }

    static addComment(userId, comment, callback) {
        const query = 'UPDATE divisi_tp SET komentar_div_tp = ? WHERE id = ?';
        db.query(query, [comment, userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }
}

module.exports = DivisiTpAdm;
