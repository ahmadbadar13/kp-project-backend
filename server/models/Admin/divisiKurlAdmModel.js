const db = require('../../config/db');

class DivisiKurlAdm {
    static getAllDivisiKurl(callback) {
        const query = 'SELECT * FROM divisi_kurl';
        db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }

    static addComment(userId, comment, callback) {
        const query = 'UPDATE divisi_kurl SET komentar_div_kurl = ? WHERE id = ?';
        db.query(query, [comment, userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }
}

module.exports = DivisiKurlAdm;
