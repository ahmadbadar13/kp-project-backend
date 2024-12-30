const db = require('../../config/db');

const getAllSekretaris = async () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM sekretaris', (error, results) => {
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

const addKomentar = (userId, comment, callback) => {
    const query = 'UPDATE sekretaris SET komentar_sekretaris = ? WHERE id = ?';
    db.query(query, [comment, userId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    getAllSekretaris,
    addKomentar
};
