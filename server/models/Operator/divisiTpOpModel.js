const db = require('../../config/db');

class DivisiTpOp {
    // Menambahkan data Divisi TP
    static addDivisiTp(name, photo, callback) {
        const insertQuery = 'INSERT INTO divisi_tp (nama_div_tp, foto_div_tp, komentar_div_tp) VALUES (?, ?, ?)';
        db.query(insertQuery, [name, photo, ''], callback);
    }

    // Mengecek jumlah data dalam tabel divisi_tp
    static checkDataCount(callback) {
        const checkQuery = 'SELECT COUNT(*) AS total FROM divisi_tp';
        db.query(checkQuery, callback);
    }

    // Mendapatkan seluruh data Divisi TP
    static getAllDivisiTp(callback) {
        const query = 'SELECT * FROM divisi_tp';
        db.query(query, callback);
    }

    // Mendapatkan data Divisi TP berdasarkan ID
    static getDivisiTpById(id, callback) {
        const query = 'SELECT * FROM divisi_tp WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Mengupdate data Divisi TP berdasarkan ID
    static updateDivisiTp(id, name, photo, callback) {
        const updateUserQuery = 'UPDATE divisi_tp SET nama_div_tp = ?, foto_div_tp = ? WHERE id = ?';
        db.query(updateUserQuery, [name, photo, id], callback);
    }

    // Menghapus data Divisi TP berdasarkan ID
    static deleteDivisiTp(id, callback) {
        const query = 'DELETE FROM divisi_tp WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Mendapatkan komentar Divisi TP berdasarkan ID
    static getKomentarDivisiTp(id, callback) {
        const query = 'SELECT komentar_div_tp FROM divisi_tp WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Menghapus komentar Divisi TP
    static deleteKomentarDivisiTp(id, callback) {
        const query = 'UPDATE divisi_tp SET komentar_div_tp = NULL WHERE id = ?';
        db.query(query, [id], callback);
    }
}

module.exports = DivisiTpOp;
