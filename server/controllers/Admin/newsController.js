const { addNews, getAllNews, updateNews, deleteNews, getNewsById } = require('../../models/Admin/newsModel');

const addNewsController = (req, res) => {
    const { title, date, content } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!title || !date || !content || !image) {
        return res.status(400).json({ message: 'Semua field wajib diisi!' });
    }

    addNews(title, date, content, image, (err, results) => {
        if (err) {
            console.error('Error adding news:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(201).json({ message: 'Berita berhasil ditambahkan!', news: { title, date, content, image: `/uploads/${image}` } });
    });
};

const getNewsController = (req, res) => {
    getAllNews((err, results) => {
        if (err) {
            console.error('Error fetching news:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(results);
    });
};

const editNewsController = (req, res) => {
    const { id } = req.params;
    const { title, date, content } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!title || !date || !content) {
        return res.status(400).json({ message: 'Semua field wajib diisi kecuali gambar!' });
    }

    updateNews(id, title, date, content, image, (err, results) => {
        if (err) {
            console.error('Error updating news:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Berita tidak ditemukan!' });
        }

        res.status(200).json({ message: 'Berita berhasil diperbarui!' });
    });
};

const deleteNewsController = (req, res) => {
    const { id } = req.params;

    deleteNews(id, (err, results) => {
        if (err) {
            console.error('Error deleting news:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Berita tidak ditemukan!' });
        }

        res.status(200).json({ message: 'Berita berhasil dihapus!' });
    });
};

const getNewsByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const article = await getNewsById(id);
        if (article) {
            res.status(200).json(article);
        } else {
            res.status(404).json({ message: 'Artikel tidak ditemukan' });
        }
    } catch (error) {
        console.error('Error fetching article:', error);
        res.status(500).json({ message: 'Error fetching article', error });
    }
};

module.exports = {
    addNewsController,
    getNewsController,
    editNewsController,
    deleteNewsController,
    getNewsByIdController
};
