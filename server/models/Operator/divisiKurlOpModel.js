const db = require('../../config/db');

const addDivisiKurl = async (data) => {
    const { nama_div_kurl, foto_div_kurl, tanggal_lahir, email, komentar_div_kurl } = data;
    try {
        await db.query(
            'INSERT INTO divisi_kurl (nama_div_kurl, foto_div_kurl, tanggal_lahir, email, komentar_div_kurl) VALUES (?, ?, ?, ?, ?)',
            [nama_div_kurl, foto_div_kurl, tanggal_lahir, email, komentar_div_kurl]
        );
    } catch (error) {
        throw new Error('Error while adding data to the database: ' + error.message);
    }
};

const getDivisiKurlCount = async () => {
    try {
        // Menggunakan Promises dengan mysql
        return new Promise((resolve, reject) => {
            db.query('SELECT COUNT(*) AS count FROM divisi_kurl', (error, results) => {
                if (error) {
                    return reject(new Error('Error while counting data: ' + error.message));
                }
                resolve(results[0]?.count || 0); // Mengembalikan nilai count
            });
        });
    } catch (error) {
        throw new Error('Error while counting data: ' + error.message);
    }
};

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

const getDivisiKurlById = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM divisi_kurl WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const updateDivisiKurl = (id, nama_div_kurl, foto_div_kurl, tanggal_lahir, email, komentar_div_kurl) => {
    return new Promise((resolve, reject) => {
        // Hanya update kolom yang ada perubahan
        const updateUserQuery = `
            UPDATE divisi_kurl 
            SET 
                nama_div_kurl = ?, 
                foto_div_kurl = ?, 
                tanggal_lahir = ?, 
                email = ?, 
                komentar_div_kurl = ?
            WHERE id = ?`;

        console.log("Query:", updateUserQuery);
        console.log("Values:", [nama_div_kurl, foto_div_kurl, tanggal_lahir, email, komentar_div_kurl, id]);

        db.query(updateUserQuery, [nama_div_kurl, foto_div_kurl, tanggal_lahir, email, komentar_div_kurl, id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

// Menghapus data Divisi KURL berdasarkan ID
const deleteDivisiKurl = (id, callback) => {
    const query = 'DELETE FROM divisi_kurl WHERE id = ?';
    db.query(query, [id], callback);
};

// Mendapatkan komentar Divisi KURL berdasarkan ID
const getKomentarDivisiKurl = (id, callback) => {
    const query = 'SELECT komentar_div_kurl FROM divisi_kurl WHERE id = ?';
    db.query(query, [id], callback);
};

// Menghapus komentar Divisi KURL
const deleteKomentarDivisiKurl = (id, callback) => {
    const query = 'UPDATE divisi_kurl SET komentar_div_kurl = NULL WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = {
    addDivisiKurl,
    getDivisiKurlCount,
    getAllDivisiKurl,
    getDivisiKurlById,
    updateDivisiKurl,
    deleteDivisiKurl,
    getKomentarDivisiKurl,
    deleteKomentarDivisiKurl
};
