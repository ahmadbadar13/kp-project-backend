const db = require('../../config/db');

exports.getSubBagianTppphAdm = (req, res) => {
    const query = 'SELECT * FROM sub_bagian_tppph';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(results);
    });
};

exports.addKomentarSubBagianTppphAdm = (req, res) => {
    const { userId, comment } = req.body;

    if (!userId || !comment) {
        return res.status(400).json({ error: 'User ID and comment are required' });
    }

    const query = 'UPDATE sub_bagian_tppph SET komentar_sb_tppph = ? WHERE id = ?';
    db.query(query, [comment, userId], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'Comment added successfully' });
    });
};

// Tambah range kinerja Sub Bagian TPPPH
exports.addRangeKinerjaSbTppphAdm = (req, res) => {
    const { id } = req.params;
    const { kinerja_sb_tppph } = req.body;

    if (kinerja_sb_tppph === undefined) {
        return res.status(400).json({ error: 'Kinerja value is required' });
    }

    const query = 'UPDATE sub_bagian_tppph SET kinerja_sb_tppph = ? WHERE id = ?';
    db.query(query, [kinerja_sb_tppph, id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (results.affectedRows > 0) {
            res.status(200).json({ message: 'Kinerja berhasil diperbarui' });
        } else {
            res.status(404).json({ message: 'Sub bagian tidak ditemukan' });
        }
    });
};

// Tambah Komentar Kinerja Sub Bagian TPPPH
exports.addKomentarKinerjaSbTppphAdm = (req, res) => {
    const userId = req.params.userId;
    const { performanceComment, kinerja_sb_tppph } = req.body;

    // Validasi input
    if (!userId || !performanceComment) {
        return res.status(400).json({ error: 'User ID dan komentar kinerja diperlukan' });
    }

    // Validasi kinerja_sb_tppph
    if (kinerja_sb_tppph === undefined || kinerja_sb_tppph <= 0) {
        return res.status(400).json({ error: 'Kinerja value must be greater than 0' });
    }

    const query = 'UPDATE sub_bagian_tppph SET komentar_sb_tppph = ?, kinerja_sb_tppph = ? WHERE id = ?';
    db.query(query, [performanceComment, kinerja_sb_tppph, userId], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Sub bagian tidak ditemukan' });
        }
        res.status(200).json({ message: 'Komentar kinerja berhasil ditambahkan' });
    });
};