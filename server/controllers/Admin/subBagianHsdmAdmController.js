const db = require('../../config/db');

// Read data sub bagian HSDM
exports.getSubBagianHsdmAdm = (req, res) => {
    const query = 'SELECT * FROM sub_bagian_hsdm';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(results);
    });
};

// Tambah komentar sub bagian HSDM
exports.addKomentarSubBagianHsdmAdm = (req, res) => {
    const { userId, comment } = req.body;

    if (!userId || !comment) {
        return res.status(400).json({ error: 'User ID and comment are required' });
    }

    const query = 'UPDATE sub_bagian_hsdm SET komentar_sb_hsdm = ? WHERE id = ?';
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

// Tambah range kinerja Sub Bagian HSDM
exports.addRangeKinerjaSbHsdmAdm = (req, res) => {
    const { id } = req.params;
    const { kinerja_sb_hsdm } = req.body;

    if (kinerja_sb_hsdm === undefined) {
        return res.status(400).json({ error: 'Kinerja value is required' });
    }

    const query = 'UPDATE sub_bagian_hsdm SET kinerja_sb_hsdm = ? WHERE id = ?';
    db.query(query, [kinerja_sb_hsdm, id], (err, results) => {
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

// Tambah Komentar Kinerja Sub Bagian HSDM
exports.addKomentarKinerjaSbHsdmAdm = (req, res) => {
    const userId = req.params.userId;
    const { performanceComment, kinerja_sb_hsdm } = req.body;

    // Validasi input
    if (!userId || !performanceComment) {
        return res.status(400).json({ error: 'User ID dan komentar kinerja diperlukan' });
    }

    // Validasi kinerja_sb_hsdm
    if (kinerja_sb_hsdm === undefined || kinerja_sb_hsdm <= 0) {
        return res.status(400).json({ error: 'Kinerja value must be greater than 0' });
    }

    const query = 'UPDATE sub_bagian_hsdm SET komkin_sb_hsdm = ?, kinerja_sb_hsdm = ? WHERE id = ?';
    db.query(query, [performanceComment, kinerja_sb_hsdm, userId], (err, results) => {
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
