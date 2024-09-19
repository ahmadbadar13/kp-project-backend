const bcrypt = require('bcrypt');
const db = require('../config/db');

// Controller untuk login
exports.login = (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM user WHERE email = ?';

    db.query(query, [email], async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length > 0) {
        const user = results[0];

        // Cek password menggunakan bcrypt
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            res.status(200).json({ message: 'Login berhasil', data: { role: user.role } });
        } else {
            res.status(401).json({ message: 'Kredensial tidak valid' });
        }
        } else {
        res.status(401).json({ message: 'Kredensial tidak valid' });
        }
    });
    };

// Controller untuk register
exports.register = async (req, res) => {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
        return res.status(400).json({ success: false, message: 'Semua field harus diisi' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = 'INSERT INTO user (email, role, password) VALUES (?, ?, ?)';
        db.query(sql, [email, role, hashedPassword], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Terjadi kesalahan pada server' });
        }
        res.json({ success: true, message: 'Registrasi berhasil' });
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Terjadi kesalahan saat registrasi' });
    }
};
