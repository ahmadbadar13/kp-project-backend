const db = require('../../config/db');

const addDivisiHp = async (data) => {
    const { nama_div_hp, foto_div_hp, tanggal_lahir, email, komentar_div_hp } = data;
    try {
        // Menjalankan query untuk menambah divisi dengan data yang diterima
        await db.query('INSERT INTO divisi_hp (nama_div_hp, foto_div_hp, tanggal_lahir, email, komentar_div_hp) VALUES (?, ?, ?, ?, ?)', [
            nama_div_hp,
            foto_div_hp,
            tanggal_lahir,
            email,
            komentar_div_hp
        ]);
    } catch (error) {
        throw new Error('Error while adding data to the database: ' + error.message);
    }
};

const checkDataCount = (callback) => {
    const checkQuery = 'SELECT COUNT(*) AS total FROM divisi_hp';
    db.query(checkQuery, callback);
};

const getAllDivisiHp = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM divisi_hp');
        return rows;
    } catch (error) {
        throw new Error('Error fetching data from database: ' + error.message);
    }
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
