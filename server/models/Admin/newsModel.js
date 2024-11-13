const db = require('../../config/db');

const addNews = (title, date, content, image, callback) => {
    const query = 'INSERT INTO news (title, date, content, image) VALUES (?, ?, ?, ?)';
    const imagePath = `/uploads/${image}`;
    db.query(query, [title, date, content, imagePath], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

const getAllNews = (callback) => {
    const query = 'SELECT * FROM news';
    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

const updateNews = (id, title, date, content, image, callback) => {
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
            return callback(err, null);
        }
        callback(null, results);
    });
};

const deleteNews = (id, callback) => {
    const query = 'DELETE FROM news WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

const getNewsById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM news WHERE id = ?', [id], (err, results) => {
            if (err) reject(err);
            resolve(results[0]);
        });
    });
};

module.exports = {
    addNews,
    getAllNews,
    updateNews,
    deleteNews,
    getNewsById
};
