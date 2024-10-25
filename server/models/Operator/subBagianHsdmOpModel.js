const db = require('../../config/db');

class SubBagianHsdmModel {
    // Menambahkan data sub bagian HSDM
    static insertSubBagianHsdm(data, callback) {
        const query = 'INSERT INTO sub_bagian_hsdm (nama_sb_hsdm, nip_sb_hsdm, posisi_sb_hsdm, foto_sb_hsdm) VALUES (?, ?, ?, ?)';
        db.query(query, [data.name, data.nip, data.position, data.photo], callback);
    }

    // Mendapatkan semua data sub bagian HSDM
    static getAllSubBagianHsdm(callback) {
        const query = 'SELECT * FROM sub_bagian_hsdm';
        db.query(query, callback);
    }

    // Mendapatkan sub bagian HSDM berdasarkan ID
    static getSubBagianHsdmById(id, callback) {
        const query = 'SELECT * FROM sub_bagian_hsdm WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Memperbarui data sub bagian HSDM
    static updateSubBagianHsdm(id, data, callback) {
        const query = 'UPDATE sub_bagian_hsdm SET nama_sb_hsdm = ?, nip_sb_hsdm = ?, posisi_sb_hsdm = ?, foto_sb_hsdm = ? WHERE id = ?';
        db.query(query, [data.name, data.nip, data.position, data.photo, id], callback);
    }

    // Menghapus sub bagian HSDM berdasarkan ID
    static deleteSubBagianHsdm(id, callback) {
        const query = 'DELETE FROM sub_bagian_hsdm WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Mendapatkan komentar berdasarkan ID
    static getKomentarById(id, callback) {
        const query = 'SELECT komentar_sb_hsdm FROM sub_bagian_hsdm WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Menghapus komentar berdasarkan ID
    static deleteKomentarById(id, callback) {
        const query = 'UPDATE sub_bagian_hsdm SET komentar_sb_hsdm = NULL WHERE id = ?';
        db.query(query, [id], callback);
    }
}

module.exports = SubBagianHsdmModel;
