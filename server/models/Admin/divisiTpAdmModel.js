const db = require('../../config/db');

const getAllDivisiTp = async () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM divisi_tp', (error, results) => {
            if (error) {
                reject('Error fetching data from database: ' + error.message);
                return;
            }
            console.log('Query result:', results);
            if (Array.isArray(results)) {
                resolve(results);
            } else {
                reject('Query result is not an array');
            }
        });
    });
};

const addComment = (userId, comment, callback) => {
    const query = 'UPDATE divisi_tp SET komentar_div_tp = ? WHERE id = ?';
    db.query(query, [comment, userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    getAllDivisiTp,
    addComment
};
