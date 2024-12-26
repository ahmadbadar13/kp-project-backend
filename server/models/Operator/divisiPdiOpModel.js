const db = require('../../config/db');

const addDivisiPdi = async (data) => {
    const { nama_div_pdi, foto_div_pdi, tanggal_lahir, email, komentar_div_pdi } = data;
    try {
        await db.query(
            'INSERT INTO divisi_pdi (nama_div_pdi, foto_div_pdi, tanggal_lahir, email, komentar_div_pdi) VALUES (?, ?, ?, ?, ?)',
            [nama_div_pdi, foto_div_pdi, tanggal_lahir, email, komentar_div_pdi]
        );
    } catch (error) {
        throw new Error('Error while adding data to the database: ' + error.message);
    }
};

const getDivisiPdiCount = async () => {
    try {
        return new Promise((resolve, reject) => {
            db.query('SELECT COUNT(*) AS count FROM divisi_pdi', (error, results) => {
                if (error) {
                    return reject(new Error('Error while counting data: ' + error.message));
                }
                resolve(results[0]?.count || 0);
            });
        });
    } catch (error) {
        throw new Error('Error while counting data: ' + error.message);
    }
};

const getAllDivisiPdi = async () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM divisi_pdi', (error, results) => {
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

const getDivisiPdiById = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM divisi_pdi WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const updateDivisiPdi = (id, nama_div_pdi, foto_div_pdi, tanggal_lahir, email, komentar_div_pdi) => {
    return new Promise((resolve, reject) => {
        const updateUserQuery = `
            UPDATE divisi_pdi 
            SET 
                nama_div_pdi = ?, 
                foto_div_pdi = ?, 
                tanggal_lahir = ?, 
                email = ?, 
                komentar_div_pdi = ?
            WHERE id = ?`;

        console.log("Query:", updateUserQuery);
        console.log("Values:", [nama_div_pdi, foto_div_pdi, tanggal_lahir, email, komentar_div_pdi, id]);

        db.query(updateUserQuery, [nama_div_pdi, foto_div_pdi, tanggal_lahir, email, komentar_div_pdi, id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

const deleteDivisiPdi = (id, callback) => {
    const query = 'DELETE FROM divisi_pdi WHERE id = ?';
    db.query(query, [id], callback);
};

const getKomentarDivisiPdi = (id, callback) => {
    const query = 'SELECT komentar_div_pdi FROM divisi_pdi WHERE id = ?';
    db.query(query, [id], callback);
};

const deleteKomentarDivisiPdi = (id, callback) => {
    const query = 'UPDATE divisi_pdi SET komentar_div_pdi = NULL WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = {
    addDivisiPdi,
    getDivisiPdiCount,
    getAllDivisiPdi,
    getDivisiPdiById,
    updateDivisiPdi,
    deleteDivisiPdi,
    getKomentarDivisiPdi,
    deleteKomentarDivisiPdi
};
