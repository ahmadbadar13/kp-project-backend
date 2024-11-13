const db = require('../../config/db');

// Menambahkan data Divisi SPPP SDM
const addDivisiSpppSdm = (name, photo, callback) => {
    const insertQuery = 'INSERT INTO divisi_sppp_sdm (nama_div_sppp_sdm, foto_div_sppp_sdm, komentar_div_sppp_sdm) VALUES (?, ?, ?)';
    db.query(insertQuery, [name, photo, ''], callback);
};

// Mengecek jumlah data dalam tabel divisi_sppp_sdm
const checkDataCount = (callback) => {
    const checkQuery = 'SELECT COUNT(*) AS total FROM divisi_sppp_sdm';
    db.query(checkQuery, callback);
};

// Mendapatkan seluruh data Divisi SPPP SDM
const getAllDivisiSpppSdm = (callback) => {
    const query = 'SELECT * FROM divisi_sppp_sdm';
    db.query(query, callback);
};

// Mendapatkan data Divisi SPPP SDM berdasarkan ID
const getDivisiSpppSdmById = (id, callback) => {
    const query = 'SELECT * FROM divisi_sppp_sdm WHERE id = ?';
    db.query(query, [id], callback);
};

// Mengupdate data Divisi SPPP SDM berdasarkan ID
const updateDivisiSpppSdm = (id, name, photo, callback) => {
    const updateUserQuery = 'UPDATE divisi_sppp_sdm SET nama_div_sppp_sdm = ?, foto_div_sppp_sdm = ? WHERE id = ?';
    db.query(updateUserQuery, [name, photo, id], callback);
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
    checkDataCount,
    getAllDivisiSpppSdm,
    getDivisiSpppSdmById,
    updateDivisiSpppSdm,
    deleteDivisiSpppSdm,
    getKomentarDivisiSpppSdm,
    deleteKomentarDivisiSpppSdm,
};
