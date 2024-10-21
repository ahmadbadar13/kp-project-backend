const db = require('../../config/db');
const path = require('path');

// Fungsi untuk menambah berita ke database
exports.addNews = (req, res) => {
    const { title, date, content } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!title || !date || !content || !image) {
        return res.status(400).json({ message: 'Semua field wajib diisi!' });
    }

    // Query untuk menambahkan berita ke database
    const query = 'INSERT INTO news (title, date, content, image) VALUES (?, ?, ?, ?)';
    const imagePath = `/uploads/${image}`;

    db.query(query, [title, date, content, imagePath], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(201).json({ message: 'Berita berhasil ditambahkan!', news: { title, date, content, image: imagePath } });
    });
};

// Fungsi untuk mengambil semua berita
exports.getNews = (req, res) => {
    const query = 'SELECT * FROM news';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching news:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.status(200).json(results);
    });
};

// Fungsi untuk mengedit berita
exports.editNews = (req, res) => {
    const { id } = req.params; 
    const { title, date, content } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!title || !date || !content) {
        return res.status(400).json({ message: 'Semua field wajib diisi kecuali gambar!' });
    }

    // Query untuk memperbarui berita di database
    let query = 'UPDATE news SET title = ?, date = ?, content = ?';
    const params = [title, date, content];

    if (image) {
        query += ', image = ?';
        const imagePath = `/uploads/${image}`;
        params.push(imagePath);
    }

    query += ' WHERE id = ?';
    params.push(id);

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Berita tidak ditemukan!' });
        }

        res.status(200).json({ message: 'Berita berhasil diperbarui!' });
    });
};

// Fungsi untuk menghapus berita
exports.deleteNews = (req, res) => {
    const { id } = req.params; // Ambil ID berita dari parameter URL

    // Query untuk menghapus berita dari database
    const query = 'DELETE FROM news WHERE id = ?';

    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Berita tidak ditemukan!' });
        }

        res.status(200).json({ message: 'Berita berhasil dihapus!' });
    });
};
