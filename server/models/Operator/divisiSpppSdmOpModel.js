const db = require('../../config/db');

class DivisiSpppSdmOp {
    // Menambahkan data Divisi SPPP SDM
    static addDivisiSpppSdm(name, photo, callback) {
        const insertQuery = 'INSERT INTO divisi_sppp_sdm (nama_div_sppp_sdm, foto_div_sppp_sdm, komentar_div_sppp_sdm) VALUES (?, ?, ?)';
        db.query(insertQuery, [name, photo, ''], callback);
    }

    // Mengecek jumlah data dalam tabel divisi_sppp_sdm
    static checkDataCount(callback) {
        const checkQuery = 'SELECT COUNT(*) AS total FROM divisi_sppp_sdm';
        db.query(checkQuery, callback);
    }

    // Mendapatkan seluruh data Divisi SPPP SDM
    static getAllDivisiSpppSdm(callback) {
        const query = 'SELECT * FROM divisi_sppp_sdm';
        db.query(query, callback);
    }

    // Mendapatkan data Divisi SPPP SDM berdasarkan ID
    static getDivisiSpppSdmById(id, callback) {
        const query = 'SELECT * FROM divisi_sppp_sdm WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Mengupdate data Divisi SPPP SDM berdasarkan ID
    static updateDivisiSpppSdm(id, name, photo, callback) {
        const updateUserQuery = 'UPDATE divisi_sppp_sdm SET nama_div_sppp_sdm = ?, foto_div_sppp_sdm = ? WHERE id = ?';
        db.query(updateUserQuery, [name, photo, id], callback);
    }

    // Menghapus data Divisi SPPP SDM berdasarkan ID
    static deleteDivisiSpppSdm(id, callback) {
        const query = 'DELETE FROM divisi_sppp_sdm WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Mendapatkan komentar Divisi SPPP SDM berdasarkan ID
    static getKomentarDivisiSpppSdm(id, callback) {
        const query = 'SELECT komentar_div_sppp_sdm FROM divisi_sppp_sdm WHERE id = ?';
        db.query(query, [id], callback);
    }

    // Menghapus komentar Divisi SPPP SDM
    static deleteKomentarDivisiSpppSdm(id, callback) {
        const query = 'UPDATE divisi_sppp_sdm SET komentar_div_sppp_sdm = NULL WHERE id = ?';
        db.query(query, [id], callback);
    }
}

module.exports = DivisiSpppSdmOp;
