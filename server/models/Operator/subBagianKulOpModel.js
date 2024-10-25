const db = require('../../config/db');

class SubBagianKulModel {
    // Menambahkan data sub bagian KUL
    static insertSubBagianKul(data, callback) {
        const query = 'INSERT INTO sub_bagian_kul (nama_sb_kul, nip_sb_kul, posisi_sb_kul, foto_sb_kul) VALUES (?, ?, ?, ?)';
        db.query(query, [data.name, data.nip, data.position, data.photo], callback);
    }

    // Mendapatkan semua data sub bagian KUL
    static getAllSubBagianKul(callback) {
        const query = 'SELECT * FROM sub_bagian_kul';
        db.query(query, callback);
    }

    // Mendapatkan sub bagian KUL berdasarkan ID
    static getSubBagianKulById(id, callback) {
        const query = 'SELECT * FROM sub_bagian_kul WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Memperbarui data sub bagian KUL
    static updateSubBagianKul(id, data, callback) {
        const query = 'UPDATE sub_bagian_kul SET nama_sb_kul = ?, nip_sb_kul = ?, posisi_sb_kul = ?, foto_sb_kul = ? WHERE id = ?';
        db.query(query, [data.name, data.nip, data.position, data.photo, id], callback);
    }

    // Menghapus sub bagian KUL berdasarkan ID
    static deleteSubBagianKul(id, callback) {
        const query = 'DELETE FROM sub_bagian_kul WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Mendapatkan komentar berdasarkan ID
    static getKomentarById(id, callback) {
        const query = 'SELECT komentar_sb_kul FROM sub_bagian_kul WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Menghapus komentar berdasarkan ID
    static deleteKomentarById(id, callback) {
        const query = 'UPDATE sub_bagian_kul SET komentar_sb_kul = NULL WHERE id = ?';
        db.query(query, [id], callback);
    }
}

module.exports = SubBagianKulModel;
