const db = require('../config/db');

class User {
    static findByEmail(email, callback) {
        const query = 'SELECT * FROM user WHERE email = ?';
        db.query(query, [email], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        });
    }

    static create(email, hashedPassword, role, callback) {
        const query = 'INSERT INTO user (email, role, password) VALUES (?, ?, ?)';
        db.query(query, [email, role, hashedPassword], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
        });
    }
}

module.exports = User;
