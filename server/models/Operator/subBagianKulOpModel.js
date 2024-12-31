const db = require('../../config/db');

// Menambahkan data sub bagian KUL
const checkEmailExists = (email) => {
    return new Promise((resolve, reject) => {
        db.query(
            'SELECT COUNT(*) AS count FROM sub_bagian_kul WHERE email = ?',
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

const insertSubBagianKul = (data) => {
    const { nama_sb, nip_sb, posisi_sb, foto_sb, tanggal_lahir, email, status_kepegawaian, komentar_sb_kul } = data;

    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO sub_bagian_kul (nama_sb_kul, nip_sb_kul, posisi_sb_kul, foto_sb_kul, tanggal_lahir, email, status_kepegawaian, komentar_sb_kul) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [nama_sb, nip_sb, posisi_sb, foto_sb, tanggal_lahir, email, status_kepegawaian, komentar_sb_kul],
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

// Mendapatkan semua data sub bagian KUL
const getAllSubBagianKul = (callback) => {
    const query = 'SELECT * FROM sub_bagian_kul';
    db.query(query, callback);
};

// Mendapatkan sub bagian KUL berdasarkan ID
const getSubBagianKulById = (id, callback) => {
    const query = 'SELECT * FROM sub_bagian_kul WHERE id = ?';
    db.query(query, [id], callback);
};

// Memperbarui data sub bagian KUL
const updateSubBagianKul = (id, data, callback) => {
    const query = 'UPDATE sub_bagian_kul SET nama_sb_kul = ?, nip_sb_kul = ?, posisi_sb_kul = ?, foto_sb_kul = ? WHERE id = ?';
    db.query(query, [data.name, data.nip, data.position, data.photo, id], callback);
};

// Menghapus sub bagian KUL berdasarkan ID
const deleteSubBagianKul = (id, callback) => {
    const query = 'DELETE FROM sub_bagian_kul WHERE id = ?';
    db.query(query, [id], callback);
};

// Mendapatkan komentar berdasarkan ID
const getKomentarById = (id, callback) => {
    const query = 'SELECT komentar_sb_kul FROM sub_bagian_kul WHERE id = ?';
    db.query(query, [id], callback);
};

// Menghapus komentar berdasarkan ID
const deleteKomentarById = (id, callback) => {
    const query = 'UPDATE sub_bagian_kul SET komentar_sb_kul = NULL WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = {
    checkEmailExists,
    insertSubBagianKul,
    getAllSubBagianKul,
    getSubBagianKulById,
    updateSubBagianKul,
    deleteSubBagianKul,
    getKomentarById,
    deleteKomentarById
};
