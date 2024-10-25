const db = require('../../config/db');

class SubBagianTppphModel {
    // Menambahkan data sub bagian TPPPH
    static insertSubBagianTppph(data, callback) {
        const query = 'INSERT INTO sub_bagian_tppph (nama_sb_tppph, nip_sb_tppph, posisi_sb_tppph, foto_sb_tppph) VALUES (?, ?, ?, ?)';
        db.query(query, [data.name, data.nip, data.position, data.photo], callback);
    }

    // Mendapatkan semua data sub bagian TPPPH
    static getAllSubBagianTppph(callback) {
        const query = 'SELECT * FROM sub_bagian_tppph';
        db.query(query, callback);
    }

    // Mendapatkan sub bagian TPPPH berdasarkan ID
    static getSubBagianTppphById(id, callback) {
        const query = 'SELECT * FROM sub_bagian_tppph WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Memperbarui data sub bagian TPPPH
    static updateSubBagianTppph(id, data, callback) {
        const query = 'UPDATE sub_bagian_tppph SET nama_sb_tppph = ?, nip_sb_tppph = ?, posisi_sb_tppph = ?, foto_sb_tppph = ? WHERE id = ?';
        db.query(query, [data.name, data.nip, data.position, data.photo, id], callback);
    }

    // Menghapus sub bagian TPPPH berdasarkan ID
    static deleteSubBagianTppph(id, callback) {
        const query = 'DELETE FROM sub_bagian_tppph WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Mendapatkan komentar berdasarkan ID
    static getKomentarById(id, callback) {
        const query = 'SELECT komentar_sb_tppph FROM sub_bagian_tppph WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Menghapus komentar berdasarkan ID
    static deleteKomentarById(id, callback) {
        const query = 'UPDATE sub_bagian_tppph SET komentar_sb_tppph = NULL WHERE id = ?';
        db.query(query, [id], callback);
    }
}

module.exports = SubBagianTppphModel;
