const db = require('../../config/db');

const addDivisiHp = async (data) => {
    const { nama_div_hp, foto_div_hp, tanggal_lahir, email, alamat, komentar_div_hp } = data;
    try {
        // Menjalankan query untuk menambah divisi dengan data yang diterima
        await db.query('INSERT INTO divisi_hp (nama_div_hp, foto_div_hp, tanggal_lahir, email, alamat, komentar_div_hp) VALUES (?, ?, ?, ?, ?, ?)', [
            nama_div_hp,
            foto_div_hp,
            tanggal_lahir,
            email,
            alamat,
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
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM divisi_hp', (error, results) => {
            if (error) {
                reject('Error fetching data from database: ' + error.message);
                return;
            }
            // Log hasil query untuk memastikan data dikembalikan dengan benar
            console.log('Query result:', results);
            if (Array.isArray(results)) {
                resolve(results);
            } else {
                reject('Query result is not an array');
            }
        });
    });
};

const getDivisiHpById = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM divisi_hp WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const updateDivisiHp = (id, nama_div_hp, foto_div_hp, tanggal_lahir, email, alamat, komentar_div_hp) => {
    return new Promise((resolve, reject) => {
        // Hanya update kolom yang ada perubahan
        const updateUserQuery = `
            UPDATE divisi_hp 
            SET 
                nama_div_hp = ?, 
                foto_div_hp = ?, 
                tanggal_lahir = ?, 
                email = ?, 
                alamat = ?,
                komentar_div_hp = ?
            WHERE id = ?`;

        console.log("Query:", updateUserQuery);
        console.log("Values:", [nama_div_hp, foto_div_hp, tanggal_lahir, email, alamat, komentar_div_hp, id]);

        db.query(updateUserQuery, [nama_div_hp, foto_div_hp, tanggal_lahir, email, alamat, komentar_div_hp, id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
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
