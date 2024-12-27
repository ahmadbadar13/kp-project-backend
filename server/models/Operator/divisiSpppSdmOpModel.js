const db = require('../../config/db');

const addDivisiSpppSdm = async (data) => {
    const { nama_div_sppp_sdm, foto_div_sppp_sdm, tanggal_lahir, email, masa_jabatan, komentar_div_sppp_sdm } = data;
    try {
        await db.query(
            'INSERT INTO divisi_sppp_sdm (nama_div_sppp_sdm, foto_div_sppp_sdm, tanggal_lahir, email, masa_jabatan, komentar_div_sppp_sdm) VALUES (?, ?, ?, ?, ?, ?)',
            [nama_div_sppp_sdm, foto_div_sppp_sdm, tanggal_lahir, email, masa_jabatan, komentar_div_sppp_sdm]
        );
    } catch (error) {
        throw new Error('Error while adding data to the database: ' + error.message);
    }
};

const getDivisiSpppSdmCount = async () => {
    try {
        return new Promise((resolve, reject) => {
            db.query('SELECT COUNT(*) AS count FROM divisi_sppp_sdm', (error, results) => {
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

const getAllDivisiSpppSdm = async () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM divisi_sppp_sdm', (error, results) => {
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

const getDivisiSpppSdmById = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM divisi_sppp_sdm WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const updateDivisiSpppSdm = (id, nama_div_sppp_sdm, foto_div_sppp_sdm, tanggal_lahir, email, komentar_div_sppp_sdm) => {
    return new Promise((resolve, reject) => {
        const updateUserQuery = `
            UPDATE divisi_sppp_sdm 
            SET 
                nama_div_sppp_sdm = ?, 
                foto_div_sppp_sdm = ?, 
                tanggal_lahir = ?, 
                email = ?, 
                komentar_div_sppp_sdm = ?
            WHERE id = ?`;

        console.log("Query:", updateUserQuery);
        console.log("Values:", [nama_div_sppp_sdm, foto_div_sppp_sdm, tanggal_lahir, email, komentar_div_sppp_sdm, id]);

        db.query(updateUserQuery, [nama_div_sppp_sdm, foto_div_sppp_sdm, tanggal_lahir, email, komentar_div_sppp_sdm, id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

// Menghapus data Divisi SPPP SDM berdasarkan ID
const deleteDivisiSpppSdm = (id, callback) => {
    const query = 'DELETE FROM divisi_sppp_sdm WHERE id = ?';
    db.query(query, [id], callback);
};

// Mendapatkan komentar Divisi SPPP SDM berdasarkan ID
const getKomentarDivisiSpppSdm = (id, callback) => {
    const query = 'SELECT komentar_div_sppp_sdm FROM divisi_sppp_sdm WHERE id = ?';
    db.query(query, [id], callback);
};

// Menghapus komentar Divisi SPPP SDM
const deleteKomentarDivisiSpppSdm = (id, callback) => {
    const query = 'UPDATE divisi_sppp_sdm SET komentar_div_sppp_sdm = NULL WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = {
    addDivisiSpppSdm,
    getDivisiSpppSdmCount,
    getAllDivisiSpppSdm,
    getDivisiSpppSdmById,
    updateDivisiSpppSdm,
    deleteDivisiSpppSdm,
    getKomentarDivisiSpppSdm,
    deleteKomentarDivisiSpppSdm,
};
