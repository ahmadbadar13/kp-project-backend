const db = require('../../config/db');

exports.getDivisiPdiAdm = (req, res) => {
    const query = 'SELECT * FROM divisi_pdi';
    db.query(query, (err, results) => {
        if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(results);
    });
    };

exports.addKomentarDivisiPdiAdm = (req, res) => {
    const { userId, comment } = req.body;

    if (!userId || !comment) {
        return res.status(400).json({ error: 'User ID and comment are required' });
    }

    const query = 'UPDATE divisi_pdi SET komentar_div_pdi = ? WHERE id = ?';
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

// Tambah range kinerja Divisi PDI
exports.addRangeKinerjaDivisiPdiAdm = (req, res) => {
    const { id } = req.params;
    const { kinerja_div_pdi } = req.body;

    if (kinerja_div_pdi === undefined) {
        return res.status(400).json({ error: 'Kinerja value is required' });
    }

    const query = 'UPDATE divisi_pdi SET kinerja_div_pdi = ? WHERE id = ?';
    db.query(query, [kinerja_div_pdi, id], (err, results) => {
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

//Tambah Komentar Kinerja Divisi PDI
exports.addKomentarKinerjaDivisiPdiAdm = (req, res) => {
    const userId = req.params.userId;
    const { performanceComment, kinerja_div_pdi } = req.body;

    // Validasi input
    if (!userId || !performanceComment) {
        return res.status(400).json({ error: 'User ID and performance comment are required' });
    }

    // Validasi kinerja_div_pdi
    if (kinerja_div_pdi === undefined || kinerja_div_pdi <= 0) {
        return res.status(400).json({ error: 'Kinerja value must be greater than 0' });
    }

    const query = 'UPDATE divisi_pdi SET komkin_div_pdi = ?, kinerja_div_pdi = ? WHERE id = ?';
    db.query(query, [performanceComment, kinerja_div_pdi, userId], (err, results) => {
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