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

    static findAll(callback) {
        const query = 'SELECT * FROM user';
        db.query(query, callback);
    }

    static update(id, email, role, password, callback) {
        // Jika password tidak diberikan, maka tidak perlu memperbarui password
        let query = 'UPDATE user SET email = ?, role = ?';
        const params = [email, role];

        // Hanya tambahkan password jika diberikan
        if (password) {
            query += ', password = ?';
            params.push(password);
        }

        query += ' WHERE id = ?';
        params.push(id);

        db.query(query, params, (err, result) => {
            if (err) {
                return callback(err, null);
            }

            // Periksa apakah ada baris yang terpengaruh
            if (result.affectedRows === 0) {
                return callback(new Error('Tidak ada akun yang ditemukan untuk diupdate'), null);
            }
            callback(null, result);
        });
    }

    static delete(id, callback) {
        const query = 'DELETE FROM user WHERE id = ?';
        db.query(query, [id], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            
            // Periksa apakah ada baris yang terpengaruh
            if (result.affectedRows === 0) {
                return callback(new Error('Tidak ada akun yang ditemukan untuk dihapus'), null);
            }
            callback(null, result);
        });
    }
}

module.exports = User;
