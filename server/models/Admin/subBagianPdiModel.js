const db = require('../../config/db');

class SubBagianPdi {
    static getAllSbPdi(callback) {
        const query = 'SELECT * FROM sub_bagian_pdi';
        db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }

    static addKomentar(userId, comment, callback) {
        const query = 'UPDATE sub_bagian_pdi SET komentar_sb_pdi = ? WHERE id = ?';
        db.query(query, [comment, userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }
}

module.exports = SubBagianPdi;
