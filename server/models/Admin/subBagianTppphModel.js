const db = require('../../config/db');

class SubBagianTppph {
    static getAllSbTppph(callback) {
        const query = 'SELECT * FROM sub_bagian_tppph';
        db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }

    static addKomentar(userId, comment, callback) {
        const query = 'UPDATE sub_bagian_tppph SET komentar_sb_tppph = ? WHERE id = ?';
        db.query(query, [comment, userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }
}

module.exports = SubBagianTppph;
