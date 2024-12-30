const db = require('../../config/db');

const getAllDivisiHp = async () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM divisi_hp', (error, results) => {
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
    const query = 'UPDATE divisi_hp SET komentar_div_hp = ? WHERE id = ?';
    db.query(query, [comment, userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    getAllDivisiHp,
    addComment
};
