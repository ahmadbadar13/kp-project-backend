const db = require('../../config/db');

const getAllDivisiSpppSdm = (callback) => {
    const query = 'SELECT * FROM divisi_sppp_sdm';
    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

const addComment = (userId, comment, callback) => {
    const query = 'UPDATE divisi_sppp_sdm SET komentar_div_sppp_sdm = ? WHERE id = ?';
    db.query(query, [comment, userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    getAllDivisiSpppSdm,
    addComment
};
