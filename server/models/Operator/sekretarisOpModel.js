const db = require('../../config/db');

// Menambahkan data Sekretaris
const insertSekretaris = async (data) => {
    const { nama_sekretaris, nip_sekretaris, foto_sekretaris, tanggal_lahir, email, masa_jabatan, komentar_sekretaris } = data;
    try {
        await db.query(
            'INSERT INTO sekretaris (nama_sekretaris, nip_sekretaris, foto_sekretaris, tanggal_lahir, email, masa_jabatan, komentar_sekretaris) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [nama_sekretaris, nip_sekretaris, foto_sekretaris, tanggal_lahir, email, masa_jabatan, komentar_sekretaris]
        );
    } catch (error) {
        throw new Error('Error while adding data to the database: ' + error.message);
    }
};

// Mengecek jumlah data Sekretaris
const checkSekretarisCount = async () => {
    try {
        return new Promise((resolve, reject) => {
            db.query('SELECT COUNT(*) AS count FROM sekretaris', (error, results) => {
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

// Mendapatkan semua data Sekretaris
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

// Mendapatkan data Sekretaris berdasarkan ID
const getSekretarisById = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM sekretaris WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

// Memperbarui data Sekretaris
const updateSekretaris = (id, nama_sekretaris, nip_sekretaris, foto_sekretaris, tanggal_lahir, email, komentar_sekretaris) => {
    return new Promise((resolve, reject) => {
        const updateUserQuery = `
            UPDATE sekretaris 
            SET 
                nama_sekretaris = ?, 
                nip_sekretaris = ?, 
                foto_sekretaris = ?, 
                tanggal_lahir = ?, 
                email = ?, 
                komentar_sekretaris = ?
            WHERE id = ?`;

        console.log("Query:", updateUserQuery);
        console.log("Values:", [nama_sekretaris, nip_sekretaris, foto_sekretaris, tanggal_lahir, email, komentar_sekretaris, id]);

        db.query(updateUserQuery, [nama_sekretaris, nip_sekretaris, foto_sekretaris, tanggal_lahir, email, komentar_sekretaris, id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

// Menghapus data Sekretaris berdasarkan ID
const deleteSekretaris = (id, callback) => {
    const query = 'DELETE FROM sekretaris WHERE id = ?';
    db.query(query, [id], callback);
};

// Mendapatkan komentar Sekretaris berdasarkan ID
const getKomentarSekretaris = (id, callback) => {
    const query = 'SELECT komentar_sekretaris FROM sekretaris WHERE id = ?';
    db.query(query, [id], callback);
};

// Menghapus komentar Sekretaris
const deleteKomentarSekretaris = (id, callback) => {
    const query = 'UPDATE sekretaris SET komentar_sekretaris = NULL WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = {
    insertSekretaris,
    checkSekretarisCount,
    getAllSekretaris,
    getSekretarisById,
    updateSekretaris,
    deleteSekretaris,
    getKomentarSekretaris,
    deleteKomentarSekretaris
};