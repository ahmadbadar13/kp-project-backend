const db = require('../../config/db');

// Menambahkan data sub bagian TPPPH
const checkEmailExists = (email) => {
    return new Promise((resolve, reject) => {
        db.query(
            'SELECT COUNT(*) AS count FROM sub_bagian_tppph WHERE email = ?',
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

const insertSubBagianTppph = (data) => {
    const { nama_sb, nip_sb, posisi_sb, foto_sb, tanggal_lahir, email, komentar_sb_tppph } = data;

    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO sub_bagian_tppph (nama_sb_tppph, nip_sb_tppph, posisi_sb_tppph, foto_sb_tppph, tanggal_lahir, email, komentar_sb_tppph) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [nama_sb, nip_sb, posisi_sb, foto_sb, tanggal_lahir, email, komentar_sb_tppph],
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

// Mendapatkan semua data sub bagian TPPPH
const getAllSubBagianTppph = (callback) => {
    const query = 'SELECT * FROM sub_bagian_tppph';
    db.query(query, callback);
};

// Mendapatkan sub bagian TPPPH berdasarkan ID
const getSubBagianTppphById = (id, callback) => {
    const query = 'SELECT * FROM sub_bagian_tppph WHERE id = ?';
    db.query(query, [id], callback);
};

// Memperbarui data sub bagian TPPPH
const updateSubBagianTppph = (id, data, callback) => {
    const query = 'UPDATE sub_bagian_tppph SET nama_sb_tppph = ?, nip_sb_tppph = ?, posisi_sb_tppph = ?, foto_sb_tppph = ? WHERE id = ?';
    db.query(query, [data.name, data.nip, data.position, data.photo, id], callback);
};

// Menghapus sub bagian TPPPH berdasarkan ID
const deleteSubBagianTppph = (id, callback) => {
    const query = 'DELETE FROM sub_bagian_tppph WHERE id = ?';
    db.query(query, [id], callback);
};

// Mendapatkan komentar berdasarkan ID
const getKomentarById = (id, callback) => {
    const query = 'SELECT komentar_sb_tppph FROM sub_bagian_tppph WHERE id = ?';
    db.query(query, [id], callback);
};

// Menghapus komentar berdasarkan ID
const deleteKomentarById = (id, callback) => {
    const query = 'UPDATE sub_bagian_tppph SET komentar_sb_tppph = NULL WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = {
    checkEmailExists,
    insertSubBagianTppph,
    getAllSubBagianTppph,
    getSubBagianTppphById,
    updateSubBagianTppph,
    deleteSubBagianTppph,
    getKomentarById,
    deleteKomentarById
};
