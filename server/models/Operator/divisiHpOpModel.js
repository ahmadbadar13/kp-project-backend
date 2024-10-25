const db = require('../../config/db');

class DivisiHpOp {
    // Menambahkan data Divisi HP
    static addDivisiHp(name, photo, callback) {
        const insertQuery = 'INSERT INTO divisi_hp (nama_div_hp, foto_div_hp, komentar_div_hp) VALUES (?, ?, ?)';
        db.query(insertQuery, [name, photo, ''], callback);
    }

    // Mengecek jumlah data dalam tabel divisi_hp
    static checkDataCount(callback) {
        const checkQuery = 'SELECT COUNT(*) AS total FROM divisi_hp';
        db.query(checkQuery, callback);
    }

    // Mendapatkan seluruh data Divisi HP
    static getAllDivisiHp(callback) {
        const query = 'SELECT * FROM divisi_hp';
        db.query(query, callback);
    }

    // Mendapatkan data Divisi HP berdasarkan ID
    static getDivisiHpById(id, callback) {
        const query = 'SELECT * FROM divisi_hp WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Mengupdate data Divisi HP berdasarkan ID
    static updateDivisiHp(id, name, photo, callback) {
        const updateUserQuery = 'UPDATE divisi_hp SET nama_div_hp = ?, foto_div_hp = ? WHERE id = ?';
        db.query(updateUserQuery, [name, photo, id], callback);
    }

    // Menghapus data Divisi HP berdasarkan ID
    static deleteDivisiHp(id, callback) {
        const query = 'DELETE FROM divisi_hp WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Mendapatkan komentar Divisi HP berdasarkan ID
    static getKomentarDivisiHp(id, callback) {
        const query = 'SELECT komentar_div_hp FROM divisi_hp WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Menghapus komentar Divisi HP
    static deleteKomentarDivisiHp(id, callback) {
        const query = 'UPDATE divisi_hp SET komentar_div_hp = NULL WHERE id = ?';
        db.query(query, [id], callback);
    }
}

module.exports = DivisiHpOp;
