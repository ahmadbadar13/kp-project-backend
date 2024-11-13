const db = require('../../config/db');

const addDivisiPdi = (name, photo, callback) => {
    const insertQuery = 'INSERT INTO divisi_pdi (nama_div_pdi, foto_div_pdi, komentar_div_pdi) VALUES (?, ?, ?)';
    db.query(insertQuery, [name, photo, ''], callback);
};

const checkDataCount = (callback) => {
    const checkQuery = 'SELECT COUNT(*) AS total FROM divisi_pdi';
    db.query(checkQuery, callback);
};

const getAllDivisiPdi = (callback) => {
    const query = 'SELECT * FROM divisi_pdi';
    db.query(query, callback);
};

const getDivisiPdiById = (id, callback) => {
    const query = 'SELECT * FROM divisi_pdi WHERE id = ?';
    db.query(query, [id], callback);
};

const updateDivisiPdi = (id, name, photo, callback) => {
    const updateUserQuery = 'UPDATE divisi_pdi SET nama_div_pdi = ?, foto_div_pdi = ? WHERE id = ?';
    db.query(updateUserQuery, [name, photo, id], callback);
};

const deleteDivisiPdi = (id, callback) => {
    const query = 'DELETE FROM divisi_pdi WHERE id = ?';
    db.query(query, [id], callback);
};

const getKomentarDivisiPdi = (id, callback) => {
    const query = 'SELECT komentar_div_pdi FROM divisi_pdi WHERE id = ?';
    db.query(query, [id], callback);
};

const deleteKomentarDivisiPdi = (id, callback) => {
    const query = 'UPDATE divisi_pdi SET komentar_div_pdi = NULL WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = {
    addDivisiPdi,
    checkDataCount,
    getAllDivisiPdi,
    getDivisiPdiById,
    updateDivisiPdi,
    deleteDivisiPdi,
    getKomentarDivisiPdi,
    deleteKomentarDivisiPdi
};
