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
