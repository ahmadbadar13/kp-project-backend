const db = require('../../config/db');

const getAllDivisiKurl = (callback) => {
    const query = 'SELECT * FROM divisi_kurl';
    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

const addComment = (userId, comment, callback) => {
    const query = 'UPDATE divisi_kurl SET komentar_div_kurl = ? WHERE id = ?';
    db.query(query, [comment, userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    getAllDivisiKurl,
    addComment
};
