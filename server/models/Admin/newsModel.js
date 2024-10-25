const db = require('../../config/db');

class News {
    static addNews(title, date, content, image, callback) {
        const query = 'INSERT INTO news (title, date, content, image) VALUES (?, ?, ?, ?)';
        const imagePath = `/uploads/${image}`;
        db.query(query, [title, date, content, imagePath], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }

    static getAllNews(callback) {
        const query = 'SELECT * FROM news';
        db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }

    static updateNews(id, title, date, content, image, callback) {
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
    }

    static deleteNews(id, callback) {
        const query = 'DELETE FROM news WHERE id = ?';
        db.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }
}

module.exports = News;
