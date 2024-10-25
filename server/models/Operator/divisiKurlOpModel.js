const db = require('../../config/db');

// Menambahkan data Divisi KURL
exports.addDivisiKurl = (name, photo, callback) => {
    const insertQuery = 'INSERT INTO divisi_kurl (nama_div_kurl, foto_div_kurl, komentar_div_kurl) VALUES (?, ?, ?)';
    db.query(insertQuery, [name, photo, ''], callback);
    };

    // Mengecek jumlah data dalam tabel divisi_kurl
    exports.checkDataCount = (callback) => {
    const checkQuery = 'SELECT COUNT(*) AS total FROM divisi_kurl';
    db.query(checkQuery, callback);
    };

    // Mendapatkan seluruh data Divisi KURL
    exports.getAllDivisiKurl = (callback) => {
    const query = 'SELECT * FROM divisi_kurl';
    db.query(query, callback);
    };

    // Mendapatkan data Divisi KURL berdasarkan ID
    exports.getDivisiKurlById = (id, callback) => {
    const query = 'SELECT * FROM divisi_kurl WHERE id = ?';
    db.query(query, [id], callback);
    };

    // Mengupdate data Divisi KURL berdasarkan ID
    exports.updateDivisiKurl = (id, name, photo, callback) => {
    const updateUserQuery = 'UPDATE divisi_kurl SET nama_div_kurl = ?, foto_div_kurl = ? WHERE id = ?';
    db.query(updateUserQuery, [name, photo, id], callback);
    };

    // Menghapus data Divisi KURL berdasarkan ID
    exports.deleteDivisiKurl = (id, callback) => {
    const query = 'DELETE FROM divisi_kurl WHERE id = ?';
    db.query(query, [id], callback);
    };

    // Mendapatkan komentar Divisi KURL berdasarkan ID
    exports.getKomentarDivisiKurl = (id, callback) => {
    const query = 'SELECT komentar_div_kurl FROM divisi_kurl WHERE id = ?';
    db.query(query, [id], callback);
    };

    // Menghapus komentar Divisi KURL
    exports.deleteKomentarDivisiKurl = (id, callback) => {
    const query = 'UPDATE divisi_kurl SET komentar_div_kurl = NULL WHERE id = ?';
    db.query(query, [id], callback);
};
