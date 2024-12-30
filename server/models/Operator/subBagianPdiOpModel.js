const db = require('../../config/db');

// Menambahkan data sub bagian PDI
const checkEmailExists = (email) => {
    return new Promise((resolve, reject) => {
        db.query(
            'SELECT COUNT(*) AS count FROM sub_bagian_pdi WHERE email = ?',
            [email],
            (error, results) => {
                if (error) {
                    console.error('Error while checking email in the database:', error);
                    reject(new Error('Error while checking email in the database: ' + error.message));
                } else {
                    // Ambil hasil dan kembalikan true/false
                    const count = results[0]?.count || 0;
                    resolve(count > 0);
                }
            }
        );
    });
};

const insertSubBagianPdi = (data) => {
    const { nama_sb, nip_sb, posisi_sb, foto_sb, tanggal_lahir, email, komentar_sb_pdi } = data;

    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO sub_bagian_pdi (nama_sb_pdi, nip_sb_pdi, posisi_sb_pdi, foto_sb_pdi, tanggal_lahir, email, komentar_sb_pdi) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [nama_sb, nip_sb, posisi_sb, foto_sb, tanggal_lahir, email, komentar_sb_pdi],
            (error, results) => {
                if (error) {
                    console.error('Error while adding data to the database:', error);
                    reject(new Error('Error while adding data to the database: ' + error.message));
                } else {
                    resolve(results);
                }
            }
        );
    });
};

// Mendapatkan semua data sub bagian PDI
const getAllSubBagianPdi = (callback) => {
    const query = 'SELECT * FROM sub_bagian_pdi';
    db.query(query, callback);
};

// Mendapatkan sub bagian PDI berdasarkan ID
const getSubBagianPdiById = (id, callback) => {
    const query = 'SELECT * FROM sub_bagian_pdi WHERE id = ?';
    db.query(query, [id], callback);
};

// Memperbarui data sub bagian PDI
const updateSubBagianPdi = (id, data, callback) => {
    const query = 'UPDATE sub_bagian_pdi SET nama_sb_pdi = ?, nip_sb_pdi = ?, posisi_sb_pdi = ?, foto_sb_pdi = ? WHERE id = ?';
    db.query(query, [data.name, data.nip, data.position, data.photo, id], callback);
};

// Menghapus sub bagian PDI berdasarkan ID
const deleteSubBagianPdi = (id, callback) => {
    const query = 'DELETE FROM sub_bagian_pdi WHERE id = ?';
    db.query(query, [id], callback);
};

// Mendapatkan komentar berdasarkan ID
const getKomentarById = (id, callback) => {
    const query = 'SELECT komentar_sb_pdi FROM sub_bagian_pdi WHERE id = ?';
    db.query(query, [id], callback);
};

// Menghapus komentar berdasarkan ID
const deleteKomentarById = (id, callback) => {
    const query = 'UPDATE sub_bagian_pdi SET komentar_sb_pdi = NULL WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = {
    checkEmailExists,
    insertSubBagianPdi,
    getAllSubBagianPdi,
    getSubBagianPdiById,
    updateSubBagianPdi,
    deleteSubBagianPdi,
    getKomentarById,
    deleteKomentarById
};
