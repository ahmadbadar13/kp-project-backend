const db = require('../../config/db');

class DivisiPdiOp {
    // Menambahkan data Divisi PDI
    static addDivisiPdi(name, photo, callback) {
        const insertQuery = 'INSERT INTO divisi_pdi (nama_div_pdi, foto_div_pdi, komentar_div_pdi) VALUES (?, ?, ?)';
        db.query(insertQuery, [name, photo, ''], callback);
    }

    // Mengecek jumlah data dalam tabel divisi_pdi
    static checkDataCount(callback) {
        const checkQuery = 'SELECT COUNT(*) AS total FROM divisi_pdi';
        db.query(checkQuery, callback);
    }

    // Mendapatkan seluruh data Divisi PDI
    static getAllDivisiPdi(callback) {
        const query = 'SELECT * FROM divisi_pdi';
        db.query(query, callback);
    }

    // Mendapatkan data Divisi PDI berdasarkan ID
    static getDivisiPdiById(id, callback) {
        const query = 'SELECT * FROM divisi_pdi WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Mengupdate data Divisi PDI berdasarkan ID
    static updateDivisiPdi(id, name, photo, callback) {
        const updateUserQuery = 'UPDATE divisi_pdi SET nama_div_pdi = ?, foto_div_pdi = ? WHERE id = ?';
        db.query(updateUserQuery, [name, photo, id], callback);
    }

    // Menghapus data Divisi PDI berdasarkan ID
    static deleteDivisiPdi(id, callback) {
        const query = 'DELETE FROM divisi_pdi WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Mendapatkan komentar Divisi PDI berdasarkan ID
    static getKomentarDivisiPdi(id, callback) {
        const query = 'SELECT komentar_div_pdi FROM divisi_pdi WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Menghapus komentar Divisi PDI
    static deleteKomentarDivisiPdi(id, callback) {
        const query = 'UPDATE divisi_pdi SET komentar_div_pdi = NULL WHERE id = ?';
        db.query(query, [id], callback);
    }
}

module.exports = DivisiPdiOp;
