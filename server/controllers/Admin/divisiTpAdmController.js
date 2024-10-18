const db = require('../../config/db');

exports.getDivisiTpAdm = (req, res) => {
    const query = 'SELECT * FROM divisi_tp';
    db.query(query, (err, results) => {
        if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(results);
    });
};

exports.addKomentarDivisiTpAdm = (req, res) => {
    const { userId, comment } = req.body;

    if (!userId || !comment) {
        return res.status(400).json({ error: 'User ID and comment are required' });
    }

    const query = 'UPDATE divisi_tp SET komentar_div_tp = ? WHERE id = ?';
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

// Tambah range kinerja Divisi TP
exports.addRangeKinerjaDivisiTpAdm = (req, res) => {
    const { id } = req.params;
    const { kinerja_div_tp } = req.body;

    if (kinerja_div_tp === undefined) {
        return res.status(400).json({ error: 'Kinerja value is required' });
    }

    const query = 'UPDATE divisi_tp SET kinerja_div_tp = ? WHERE id = ?';
    db.query(query, [kinerja_div_tp, id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (results.affectedRows > 0) {
            res.status(200).json({ message: 'Kinerja berhasil diperbarui' });
        } else {
            res.status(404).json({ message: 'Anggota tidak ditemukan' });
        }
    });
};

//Tambah Komentar Kinerja Divisi TP
exports.addKomentarKinerjaDivisiTpAdm = (req, res) => {
    const userId = req.params.userId;
    const { performanceComment, kinerja_div_tp } = req.body;

    // Validasi input
    if (!userId || !performanceComment) {
        return res.status(400).json({ error: 'User ID and performance comment are required' });
    }

    // Validasi kinerja_div_tp
    if (kinerja_div_tp === undefined || kinerja_div_tp <= 0) {
        return res.status(400).json({ error: 'Kinerja value must be greater than 0' });
    }

    const query = 'UPDATE divisi_tp SET komkin_div_tp = ?, kinerja_div_tp = ? WHERE id = ?';
    db.query(query, [performanceComment, kinerja_div_tp, userId], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'Performance comment added successfully' });
    });
};