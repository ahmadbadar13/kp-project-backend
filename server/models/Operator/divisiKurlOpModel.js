const db = require('../../config/db');

class DivisiKurlOp {
    // Menambahkan data Divisi KURL
    static addDivisiKurl(name, photo, callback) {
        const insertQuery = 'INSERT INTO divisi_kurl (nama_div_kurl, foto_div_kurl, komentar_div_kurl) VALUES (?, ?, ?)';
        db.query(insertQuery, [name, photo, ''], callback);
    }

    // Mengecek jumlah data dalam tabel divisi_kurl
    static checkDataCount(callback) {
        const checkQuery = 'SELECT COUNT(*) AS total FROM divisi_kurl';
        db.query(checkQuery, callback);
    }

    // Mendapatkan seluruh data Divisi KURL
    static getAllDivisiKurl(callback) {
        const query = 'SELECT * FROM divisi_kurl';
        db.query(query, callback);
    }

    // Mendapatkan data Divisi KURL berdasarkan ID
    static getDivisiKurlById(id, callback) {
        const query = 'SELECT * FROM divisi_kurl WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Mengupdate data Divisi KURL berdasarkan ID
    static updateDivisiKurl(id, name, photo, callback) {
        const updateUserQuery = 'UPDATE divisi_kurl SET nama_div_kurl = ?, foto_div_kurl = ? WHERE id = ?';
        db.query(updateUserQuery, [name, photo, id], callback);
    }

    // Menghapus data Divisi KURL berdasarkan ID
    static deleteDivisiKurl(id, callback) {
        const query = 'DELETE FROM divisi_kurl WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Mendapatkan komentar Divisi KURL berdasarkan ID
    static getKomentarDivisiKurl(id, callback) {
        const query = 'SELECT komentar_div_kurl FROM divisi_kurl WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Menghapus komentar Divisi KURL
    static deleteKomentarDivisiKurl(id, callback) {
        const query = 'UPDATE divisi_kurl SET komentar_div_kurl = NULL WHERE id = ?';
        db.query(query, [id], callback);
    }
}

module.exports = DivisiKurlOp;
