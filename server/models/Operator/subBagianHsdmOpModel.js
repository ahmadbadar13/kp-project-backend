const db = require('../../config/db');

// Menambahkan data sub bagian HSDM
const checkEmailExists = (email) => {
    return new Promise((resolve, reject) => {
        db.query(
            'SELECT COUNT(*) AS count FROM sub_bagian_hsdm WHERE email = ?',
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

const insertSubBagianHsdm = (data) => {
    const { nama_sb, nip_sb, posisi_sb, foto_sb, tanggal_lahir, email, status_kepegawaian, surat_keputusan, komentar_sb_hsdm } = data;

    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO sub_bagian_hsdm (nama_sb_hsdm, nip_sb_hsdm, posisi_sb_hsdm, foto_sb_hsdm, tanggal_lahir, email, status_kepegawaian, surat_keputusan, komentar_sb_hsdm) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [nama_sb, nip_sb, posisi_sb, foto_sb, tanggal_lahir, email, status_kepegawaian, surat_keputusan, komentar_sb_hsdm],
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

// Mendapatkan semua data sub bagian HSDM
const getAllSubBagianHsdm = (callback) => {
    const query = 'SELECT * FROM sub_bagian_hsdm';
    db.query(query, callback);
};

// Mendapatkan sub bagian HSDM berdasarkan ID
const getSubBagianHsdmById = (id, callback) => {
    const query = 'SELECT * FROM sub_bagian_hsdm WHERE id = ?';
    db.query(query, [id], callback);
};

// Memperbarui data sub bagian HSDM
const updateSubBagianHsdm = (id, data, callback) => {
    const query = 'UPDATE sub_bagian_hsdm SET nama_sb_hsdm = ?, nip_sb_hsdm = ?, posisi_sb_hsdm = ?, foto_sb_hsdm = ? WHERE id = ?';
    db.query(query, [data.name, data.nip, data.position, data.photo, id], callback);
};

// Menghapus sub bagian HSDM berdasarkan ID
const deleteSubBagianHsdm = (id, callback) => {
    const query = 'DELETE FROM sub_bagian_hsdm WHERE id = ?';
    db.query(query, [id], callback);
};

// Mendapatkan komentar berdasarkan ID
const getKomentarById = (id, callback) => {
    const query = 'SELECT komentar_sb_hsdm FROM sub_bagian_hsdm WHERE id = ?';
    db.query(query, [id], callback);
};

// Menghapus komentar berdasarkan ID
const deleteKomentarById = (id, callback) => {
    const query = 'UPDATE sub_bagian_hsdm SET komentar_sb_hsdm = NULL WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = {
    checkEmailExists,
    insertSubBagianHsdm,
    getAllSubBagianHsdm,
    getSubBagianHsdmById,
    updateSubBagianHsdm,
    deleteSubBagianHsdm,
    getKomentarById,
    deleteKomentarById
};
