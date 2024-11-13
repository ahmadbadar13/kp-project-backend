const db = require('../../config/db');

const getAllDivisiPdi = (callback) => {
    const query = 'SELECT * FROM divisi_pdi';
    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

const addComment = (userId, comment, callback) => {
    const query = 'UPDATE divisi_pdi SET komentar_div_pdi = ? WHERE id = ?';
    db.query(query, [comment, userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    getAllDivisiPdi,
    addComment
};
