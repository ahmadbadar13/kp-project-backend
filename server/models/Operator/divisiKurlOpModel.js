const db = require('../../config/db');

// Menambahkan data Divisi KURL
const addDivisiKurl = (name, photo, callback) => {
    const insertQuery = 'INSERT INTO divisi_kurl (nama_div_kurl, foto_div_kurl, komentar_div_kurl) VALUES (?, ?, ?)';
    db.query(insertQuery, [name, photo, ''], callback);
};

// Mengecek jumlah data dalam tabel divisi_kurl
const checkDataCount = (callback) => {
    const checkQuery = 'SELECT COUNT(*) AS total FROM divisi_kurl';
    db.query(checkQuery, callback);
};

// Mendapatkan seluruh data Divisi KURL
const getAllDivisiKurl = (callback) => {
    const query = 'SELECT * FROM divisi_kurl';
    db.query(query, callback);
};

// Mendapatkan data Divisi KURL berdasarkan ID
const getDivisiKurlById = (id, callback) => {
    const query = 'SELECT * FROM divisi_kurl WHERE id = ?';
    db.query(query, [id], callback);
};

// Mengupdate data Divisi KURL berdasarkan ID
const updateDivisiKurl = (id, name, photo, callback) => {
    const updateUserQuery = 'UPDATE divisi_kurl SET nama_div_kurl = ?, foto_div_kurl = ? WHERE id = ?';
    db.query(updateUserQuery, [name, photo, id], callback);
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
    checkDataCount,
    getAllDivisiKurl,
    getDivisiKurlById,
    updateDivisiKurl,
    deleteDivisiKurl,
    getKomentarDivisiKurl,
    deleteKomentarDivisiKurl
};
