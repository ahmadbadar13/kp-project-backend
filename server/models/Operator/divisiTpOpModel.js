const db = require('../../config/db');

// Menambahkan data Divisi TP
const addDivisiTp = async (data) => {
    const { nama_div_tp, nip_tp, foto_div_tp, tanggal_lahir, email, masa_jabatan, komentar_div_tp } = data;
    try {
        await db.query(
            'INSERT INTO divisi_tp (nama_div_tp, nip_tp, foto_div_tp, tanggal_lahir, email, masa_jabatan, komentar_div_tp) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [nama_div_tp, nip_tp, foto_div_tp, tanggal_lahir, email, masa_jabatan, komentar_div_tp]
        );
    } catch (error) {
        throw new Error('Error while adding data to the database: ' + error.message);
    }
};

const getDivisiTpCount = async () => {
    try {
        return new Promise((resolve, reject) => {
            db.query('SELECT COUNT(*) AS count FROM divisi_tp', (error, results) => {
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

const getDivisiTpById = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM divisi_tp WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const updateDivisiTp = (id, nama_div_tp, foto_div_tp, tanggal_lahir, email, komentar_div_tp) => {
    return new Promise((resolve, reject) => {
        const updateUserQuery = `
            UPDATE divisi_tp 
            SET 
                nama_div_tp = ?, 
                foto_div_tp = ?, 
                tanggal_lahir = ?, 
                email = ?, 
                komentar_div_tp = ?
            WHERE id = ?`;

        console.log("Query:", updateUserQuery);
        console.log("Values:", [nama_div_tp, foto_div_tp, tanggal_lahir, email, komentar_div_tp, id]);

        db.query(updateUserQuery, [nama_div_tp, foto_div_tp, tanggal_lahir, email, komentar_div_tp, id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

// Menghapus data Divisi TP berdasarkan ID
const deleteDivisiTp = (id, callback) => {
    const query = 'DELETE FROM divisi_tp WHERE id = ?';
    db.query(query, [id], callback);
};

// Mendapatkan komentar Divisi TP berdasarkan ID
const getKomentarDivisiTp = (id, callback) => {
    const query = 'SELECT komentar_div_tp FROM divisi_tp WHERE id = ?';
    db.query(query, [id], callback);
};

// Menghapus komentar Divisi TP
const deleteKomentarDivisiTp = (id, callback) => {
    const query = 'UPDATE divisi_tp SET komentar_div_tp = NULL WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = {
    addDivisiTp,
    getDivisiTpCount,
    getAllDivisiTp,
    getDivisiTpById,
    updateDivisiTp,
    deleteDivisiTp,
    getKomentarDivisiTp,
    deleteKomentarDivisiTp
};
