const db = require('../../config/db');

class SubBagianHsdm {
    static getAllSbHsdm(callback) {
        const query = 'SELECT * FROM sub_bagian_hsdm';
        db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }

    static addKomentar(userId, comment, callback) {
        const query = 'UPDATE sub_bagian_hsdm SET komentar_sb_hsdm = ? WHERE id = ?';
        db.query(query, [comment, userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }
}

module.exports = SubBagianHsdm;