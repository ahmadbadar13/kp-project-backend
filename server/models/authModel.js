const db = require('../config/db');

// Fungsi untuk mencari pengguna berdasarkan email
const findByEmail = async (email) => {
    const query = 'SELECT * FROM user WHERE email = ?';
    return new Promise((resolve, reject) => {
        db.query(query, [email], (err, results) => {
            if (err) return reject(err);
            resolve(results[0]);
        });
    });
};

// Fungsi untuk membuat pengguna baru
const create = async (email, hashedPassword, role) => {
    const query = 'INSERT INTO user (email, role, password) VALUES (?, ?, ?)';
    return new Promise((resolve, reject) => {
        db.query(query, [email, role, hashedPassword], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

// Fungsi untuk mengambil semua pengguna
const findAll = async () => {
    const query = 'SELECT * FROM user';
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

// Fungsi untuk mendapatkan pengguna berdasarkan ID
const getUserById = async (id) => {
    const query = 'SELECT * FROM user WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(query, [id], (err, results) => {
            if (err) return reject(err);
            resolve(results[0]);
        });
    });
};

// Fungsi untuk memperbarui data pengguna
// Fungsi untuk memperbarui data pengguna
const update = async (id, updates) => {
    const fields = [];
    const values = [];

    // Dynamically build query based on provided fields
    if (updates.email) {
        fields.push('email = ?');
        values.push(updates.email);
    }
    if (updates.role) {
        fields.push('role = ?');
        values.push(updates.role);
    }
    if (updates.password) {
        fields.push('password = ?');
        values.push(updates.password);
    }

    if (fields.length === 0) {
        throw new Error('Tidak ada field yang diperbarui');
    }

    const query = `UPDATE user SET ${fields.join(', ')} WHERE id = ?`;
    values.push(id);

    return new Promise((resolve, reject) => {
        db.query(query, values, (err, result) => {
            if (err) return reject(err);
            if (result.affectedRows === 0) {
                return reject(new Error('Tidak ada akun yang ditemukan untuk diupdate'));
            }
            resolve(result);
        });
    });
};

// Fungsi untuk memperbarui status verifikasi pengguna
const updateVerificationStatus = async (email, status = 1) => {
    const query = 'UPDATE user SET isVerified = ? WHERE email = ?';
    return new Promise((resolve, reject) => {
        db.query(query, [status, email], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

const updatePasswordOnly = async (id, password) => {
    const query = 'UPDATE user SET password = ? WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(query, [password, id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};


module.exports = { findByEmail, create, findAll, getUserById, update, updateVerificationStatus, updatePasswordOnly };
