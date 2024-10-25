const db = require('../../config/db');

class DivisiHpAdm {
    static getAllDivisiHp(callback) {
        const query = 'SELECT * FROM divisi_hp';
        db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }

    static addComment(userId, comment, callback) {
        const query = 'UPDATE divisi_hp SET komentar_div_hp = ? WHERE id = ?';
        db.query(query, [comment, userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }
}

module.exports = DivisiHpAdm;
