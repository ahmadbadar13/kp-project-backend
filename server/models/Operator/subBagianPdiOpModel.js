const db = require('../../config/db');

class SubBagianPdiModel {
    // Menambahkan data sub bagian PDI
    static insertSubBagianPdi(data, callback) {
        const query = 'INSERT INTO sub_bagian_pdi (nama_sb_pdi, nip_sb_pdi, posisi_sb_pdi, foto_sb_pdi) VALUES (?, ?, ?, ?)';
        db.query(query, [data.name, data.nip, data.position, data.photo], callback);
    }

    // Mendapatkan semua data sub bagian PDI
    static getAllSubBagianPdi(callback) {
        const query = 'SELECT * FROM sub_bagian_pdi';
        db.query(query, callback);
    }

    // Mendapatkan sub bagian PDI berdasarkan ID
    static getSubBagianPdiById(id, callback) {
        const query = 'SELECT * FROM sub_bagian_pdi WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Memperbarui data sub bagian PDI
    static updateSubBagianPdi(id, data, callback) {
        const query = 'UPDATE sub_bagian_pdi SET nama_sb_pdi = ?, nip_sb_pdi = ?, posisi_sb_pdi = ?, foto_sb_pdi = ? WHERE id = ?';
        db.query(query, [data.name, data.nip, data.position, data.photo, id], callback);
    }

    // Menghapus sub bagian PDI berdasarkan ID
    static deleteSubBagianPdi(id, callback) {
        const query = 'DELETE FROM sub_bagian_pdi WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Mendapatkan komentar berdasarkan ID
    static getKomentarById(id, callback) {
        const query = 'SELECT komentar_sb_pdi FROM sub_bagian_pdi WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Menghapus komentar berdasarkan ID
    static deleteKomentarById(id, callback) {
        const query = 'UPDATE sub_bagian_pdi SET komentar_sb_pdi = NULL WHERE id = ?';
        db.query(query, [id], callback);
    }
}

module.exports = SubBagianPdiModel;
