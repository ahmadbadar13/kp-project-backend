const bcrypt = require('bcrypt');
const User = require('../models/authModel');

class AuthController {
  // Controller untuk login
    static async login(req, res) {
        const { email, password } = req.body;

        User.findByEmail(email, async (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });

        if (results.length > 0) {
            const user = results[0];

            // Cek password menggunakan bcrypt
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
            res.status(200).json({ message: 'Login berhasil', data: { id: user.id, role: user.role } });
            } else {
            res.status(401).json({ message: 'Kredensial tidak valid' });
            }
        } else {
            res.status(401).json({ message: 'Kredensial tidak valid' });
        }
        });
    }

    // Controller untuk register
    static async register(req, res) {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({ success: false, message: 'Semua field harus diisi' });
        }

        // Cek apakah email sudah ada di database
        User.findByEmail(email, async (err, results) => {
            if (err) return res.status(500).json({ error: 'Database query failed' });

            if (results.length > 0) {
                return res.status(400).json({ success: false, message: 'Email sudah terdaftar' });
            }

            try {
                const hashedPassword = await bcrypt.hash(password, 10);
                User.create(email, hashedPassword, role, (err, result) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ success: false, message: 'Terjadi kesalahan pada server' });
                    }
                    res.json({ success: true, message: 'Registrasi berhasil' });
                });
            } catch (error) {
                res.status(500).json({ success: false, message: 'Terjadi kesalahan saat registrasi' });
            }
        });
    }

    // Controller untuk mengambil semua pengguna
    static getAllUsers(req, res) {
        User.findAll((err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error fetching users', details: err });
            }
            res.status(200).json(results);
        });
    }

    // Controller untuk memperbarui pengguna
    static async updateUser(req, res) {
        const { id } = req.params;
        const { email, role, password } = req.body;

        // Memastikan pengguna ada sebelum memperbarui
        User.getUserById(id, async (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.length === 0) return res.status(404).json({ error: 'User not found' });

            // Cek apakah email baru sudah digunakan oleh pengguna lain
            User.findByEmail(email, async (err, emailResults) => {
                if (err) return res.status(500).json({ error: 'Database query failed' });

                // Jika email ditemukan dan bukan milik pengguna yang sedang diupdate
                if (emailResults.length > 0 && emailResults[0].id !== parseInt(id)) {
                    return res.status(400).json({ error: 'Email sudah digunakan oleh pengguna lain' });
                }

                try {
                    let hashedPassword = null;
                    if (password) {
                        hashedPassword = await bcrypt.hash(password, 10);
                    }

                    // Memperbarui pengguna dengan data baru
                    User.update(id, email, role, hashedPassword, (err) => {
                        if (err) return res.status(500).json({ error: 'Error updating user', details: err });
                        res.status(200).json({ success: true, message: 'User updated successfully', updatedAccount: results });
                    });
                } catch (error) {
                    res.status(500).json({ error: 'Error hashing password', details: error });
                }
            });
        });
    }

    // Controller untuk menghapus pengguna
    static deleteUser(req, res) {
        const { id } = req.params;

        User.delete(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Error deleting user', details: err });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        });
    }
}

module.exports = AuthController;
