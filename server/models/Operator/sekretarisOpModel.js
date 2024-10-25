const db = require('../../config/db');

class SekretarisOp {
    // Mengecek jumlah data dalam tabel sekretaris
    static checkSekretarisCount(callback) {
        const query = 'SELECT COUNT(*) AS total FROM sekretaris';
        db.query(query, callback);
    }

    // Menambahkan data sekretaris
    static insertSekretaris(name, nip, photo, callback) {
        const query = 'INSERT INTO sekretaris (nama_sekretaris, nip_sekretaris, foto_sekretaris, komentar_sekretaris) VALUES (?, ?, ?, ?)';
        db.query(query, [name, nip, photo, ''], callback);
    }

    // Mendapatkan semua data sekretaris
    static getAllSekretaris(callback) {
        const query = 'SELECT * FROM sekretaris';
        db.query(query, callback);
    }

    // Mendapatkan sekretaris berdasarkan ID
    static getSekretarisById(id, callback) {
        const query = 'SELECT * FROM sekretaris WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Memperbarui data sekretaris
    static updateSekretaris(id, name, nip, photo, callback) {
        const query = 'UPDATE sekretaris SET nama_sekretaris = ?, nip_sekretaris = ?, foto_sekretaris = ? WHERE id = ?';
        db.query(query, [name, nip, photo, id], callback);
    }

    // Menghapus sekretaris berdasarkan ID
    static deleteSekretaris(id, callback) {
        const query = 'DELETE FROM sekretaris WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Mendapatkan komentar sekretaris berdasarkan ID
    static getKomentarSekretaris(id, callback) {
        const query = 'SELECT komentar_sekretaris FROM sekretaris WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Menghapus komentar sekretaris berdasarkan ID
    static deleteKomentarSekretaris(id, callback) {
        const query = 'UPDATE sekretaris SET komentar_sekretaris = NULL WHERE id = ?';
        db.query(query, [id], callback);
    }
}

module.exports = SekretarisOp;
