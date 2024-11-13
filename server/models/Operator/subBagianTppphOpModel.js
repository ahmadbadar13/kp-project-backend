const db = require('../../config/db');

// Fungsi untuk menambahkan data Sub Bagian TPPPH
const insertSubBagianTppph = (data, callback) => {
    const query = 'INSERT INTO sub_bagian_tppph (nama_sb_tppph, nip_sb_tppph, posisi_sb_tppph, foto_sb_tppph) VALUES (?, ?, ?, ?)';
    db.query(query, [data.name, data.nip, data.position, data.photo], callback);
};

// Fungsi untuk mendapatkan semua data Sub Bagian TPPPH
const getAllSubBagianTppph = (callback) => {
    const query = 'SELECT * FROM sub_bagian_tppph';
    db.query(query, callback);
};

// Fungsi untuk mendapatkan data Sub Bagian TPPPH berdasarkan ID
const getSubBagianTppphById = (id, callback) => {
    const query = 'SELECT * FROM sub_bagian_tppph WHERE id = ?';
    db.query(query, [id], callback);
};

// Fungsi untuk memperbarui data Sub Bagian TPPPH
const updateSubBagianTppph = (id, data, callback) => {
    const query = 'UPDATE sub_bagian_tppph SET nama_sb_tppph = ?, nip_sb_tppph = ?, posisi_sb_tppph = ?, foto_sb_tppph = ? WHERE id = ?';
    db.query(query, [data.name, data.nip, data.position, data.photo, id], callback);
};

// Fungsi untuk menghapus data Sub Bagian TPPPH berdasarkan ID
const deleteSubBagianTppph = (id, callback) => {
    const query = 'DELETE FROM sub_bagian_tppph WHERE id = ?';
    db.query(query, [id], callback);
};

// Fungsi untuk mendapatkan komentar berdasarkan ID
const getKomentarById = (id, callback) => {
    const query = 'SELECT komentar_sb_tppph FROM sub_bagian_tppph WHERE id = ?';
    db.query(query, [id], callback);
};

// Fungsi untuk menghapus komentar berdasarkan ID
const deleteKomentarById = (id, callback) => {
    const query = 'UPDATE sub_bagian_tppph SET komentar_sb_tppph = NULL WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = {
    insertSubBagianTppph,
    getAllSubBagianTppph,
    getSubBagianTppphById,
    updateSubBagianTppph,
    deleteSubBagianTppph,
    getKomentarById,
    deleteKomentarById
};
