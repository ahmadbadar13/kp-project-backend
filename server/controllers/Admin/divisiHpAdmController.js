const db = require('../../config/db');

// Read data divisi_hp admin
exports.getDivisiHpAdm = (req, res) => {
    const query = 'SELECT * FROM divisi_hp';
    db.query(query, (err, results) => {
        if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(results);
    });
};

// Tambah komentar divisi_hp admin
exports.addKomentarDivisiHpAdm = (req, res) => {
    const { userId, comment } = req.body;

    if (!userId || !comment) {
        return res.status(400).json({ error: 'User ID and comment are required' });
    }

    const query = 'UPDATE divisi_hp SET komentar_div_hp = ? WHERE id = ?';
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