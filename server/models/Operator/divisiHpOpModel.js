const db = require('../../config/db');

const addDivisiHp = (name, photo, callback) => {
    const insertQuery = 'INSERT INTO divisi_hp (nama_div_hp, foto_div_hp, komentar_div_hp) VALUES (?, ?, ?)';
    db.query(insertQuery, [name, photo, ''], callback);
};

const checkDataCount = (callback) => {
    const checkQuery = 'SELECT COUNT(*) AS total FROM divisi_hp';
    db.query(checkQuery, callback);
};

const getAllDivisiHp = (callback) => {
    const query = 'SELECT * FROM divisi_hp';
    db.query(query, callback);
};

const getDivisiHpById = (id, callback) => {
    const query = 'SELECT * FROM divisi_hp WHERE id = ?';
    db.query(query, [id], callback);
};

const updateDivisiHp = (id, name, photo, callback) => {
    const updateUserQuery = 'UPDATE divisi_hp SET nama_div_hp = ?, foto_div_hp = ? WHERE id = ?';
    db.query(updateUserQuery, [name, photo, id], callback);
};

const deleteDivisiHp = (id, callback) => {
    const query = 'DELETE FROM divisi_hp WHERE id = ?';
    db.query(query, [id], callback);
};

const getKomentarDivisiHp = (id, callback) => {
    const query = 'SELECT komentar_div_hp FROM divisi_hp WHERE id = ?';
    db.query(query, [id], callback);
};

const deleteKomentarDivisiHp = (id, callback) => {
    const query = 'UPDATE divisi_hp SET komentar_div_hp = NULL WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = {
    addDivisiHp,
    checkDataCount,
    getAllDivisiHp,
    getDivisiHpById,
    updateDivisiHp,
    deleteDivisiHp,
    getKomentarDivisiHp,
    deleteKomentarDivisiHp
};
