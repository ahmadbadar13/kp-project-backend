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

    // Fungsi untuk mendapatkan pengguna berdasarkan ID
    static getUserById(id, callback) {
        const query = 'SELECT * FROM user WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    }
    
    // Memperbarui data pengguna
    static update(id, email, role, password, callback) {
        let query = 'UPDATE user SET email = ?, role = ?';
        const params = [email, role];

        // Jika password diberikan, tambahkan ke query dan params
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
