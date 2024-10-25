const db = require('../../config/db');

class SubBagianKul {
    static getAllSbKul(callback) {
        const query = 'SELECT * FROM sub_bagian_kul';
        db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }

    static addKomentar(userId, comment, callback) {
        const query = 'UPDATE sub_bagian_kul SET komentar_sb_kul = ? WHERE id = ?';
        db.query(query, [comment, userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }
}

module.exports = SubBagianKul;
