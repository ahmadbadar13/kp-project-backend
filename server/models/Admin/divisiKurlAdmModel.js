const db = require('../../config/db');

const getAllDivisiKurl = async () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM divisi_kurl', (error, results) => {
            if (error) {
                reject('Error fetching data from database: ' + error.message);
                return;
            }
            // Log hasil query untuk memastikan data dikembalikan dengan benar
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
