const db = require('../../config/db');

exports.getSekretarisAdm = (req, res) => {
    const query = 'SELECT * FROM sekretaris';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(results);
    });
};

exports.addKomentarSekretarisAdm = (req, res) => {
    const { userId, comment } = req.body;

    if (!userId || !comment) {
        return res.status(400).json({ error: 'User ID and comment are required' });
    }

    const query = 'UPDATE sekretaris SET komentar_sekretaris = ? WHERE id = ?';
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

// Tambah range kinerja Sekretaris
exports.addRangeKinerjaSekretarisAdm = (req, res) => {
    const { id } = req.params;
    const { kinerja_sekretaris } = req.body;

    if (kinerja_sekretaris === undefined) {
        return res.status(400).json({ error: 'Kinerja value is required' });
    }

    const query = 'UPDATE sekretaris SET kinerja_sekretaris = ? WHERE id = ?';
    db.query(query, [kinerja_sekretaris, id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (results.affectedRows > 0) {
            res.status(200).json({ message: 'Kinerja berhasil diperbarui' });
        } else {
            res.status(404).json({ message: 'Sekretaris tidak ditemukan' });
        }
    });
};

// Tambah Komentar Kinerja Sekretaris
exports.addKomentarKinerjaSekretarisAdm = (req, res) => {
    const userId = req.params.userId;
    const { performanceComment, kinerja_sekretaris } = req.body;

    // Validasi input
    if (!userId || !performanceComment) {
        return res.status(400).json({ error: 'User ID dan komentar kinerja diperlukan' });
    }

    // Validasi kinerja_sekretaris
    if (kinerja_sekretaris === undefined || kinerja_sekretaris <= 0) {
        return res.status(400).json({ error: 'Kinerja value must be greater than 0' });
    }

    const query = 'UPDATE sekretaris SET komentar_sekretaris = ?, kinerja_sekretaris = ? WHERE id = ?';
    db.query(query, [performanceComment, kinerja_sekretaris, userId], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Sekretaris tidak ditemukan' });
        }
        res.status(200).json({ message: 'Komentar kinerja berhasil ditambahkan' });
    });
};
