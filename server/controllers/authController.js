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
    }
}

module.exports = AuthController;
