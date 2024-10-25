const News = require('../../models/Admin/newsModel');

class NewsController {
    static addNews(req, res) {
        const { title, date, content } = req.body;
        const image = req.file ? req.file.filename : null;

        if (!title || !date || !content || !image) {
        return res.status(400).json({ message: 'Semua field wajib diisi!' });
        }

        News.addNews(title, date, content, image, (err, results) => {
        if (err) {
            console.error('Error adding news:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(201).json({ message: 'Berita berhasil ditambahkan!', news: { title, date, content, image: `/uploads/${image}` } });
        });
    }

    static getNews(req, res) {
        News.getAllNews((err, results) => {
        if (err) {
            console.error('Error fetching news:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(results);
        });
    }

    static editNews(req, res) {
        const { id } = req.params;
        const { title, date, content } = req.body;
        const image = req.file ? req.file.filename : null;

        if (!title || !date || !content) {
        return res.status(400).json({ message: 'Semua field wajib diisi kecuali gambar!' });
        }

        News.updateNews(id, title, date, content, image, (err, results) => {
        if (err) {
            console.error('Error updating news:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Berita tidak ditemukan!' });
        }

        res.status(200).json({ message: 'Berita berhasil diperbarui!' });
        });
    }

    static deleteNews(req, res) {
        const { id } = req.params;

        News.deleteNews(id, (err, results) => {
        if (err) {
            console.error('Error deleting news:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Berita tidak ditemukan!' });
        }

        res.status(200).json({ message: 'Berita berhasil dihapus!' });
        });
    }
}

module.exports = NewsController;
