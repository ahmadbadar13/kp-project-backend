const bcrypt = require('bcrypt');
const { findByEmail, create, findAll, getUserById, update, updateVerificationStatus, updatePasswordOnly  } = require('../models/authModel');

// Controller untuk login
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await findByEmail(email);
        if (!user) {
            return res.status(401).json({ success: false, message: 'Kredensial tidak valid' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Kredensial tidak valid' });
        }

        res.status(200).json({ success: true, message: 'Login berhasil', data: { id: user.id, role: user.role } });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Terjadi kesalahan pada server', error: error.message });
    }
};

// Controller untuk register
const register = async (req, res) => {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
        return res.status(400).json({ success: false, message: 'Semua field harus diisi' });
    }

    try {
        const existingUser = await findByEmail(email);
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email sudah terdaftar' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await create(email, hashedPassword, role);

        res.status(201).json({ success: true, message: 'Registrasi berhasil' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Terjadi kesalahan pada server', error: error.message });
    }
};

// Controller untuk mengambil semua pengguna
const getAllUsers = async (req, res) => {
    try {
        const users = await findAll();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Terjadi kesalahan pada server', error: error.message });
    }
};

// Controller untuk memperbarui pengguna
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { email, role, password } = req.body;

    try {
        const user = await getUserById(id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User tidak ditemukan' });
        }

        const existingEmailUser = await findByEmail(email);
        if (existingEmailUser && existingEmailUser.id !== parseInt(id)) {
            return res.status(400).json({ success: false, message: 'Email sudah digunakan oleh pengguna lain' });
        }

        const hashedPassword = password ? await bcrypt.hash(password, 10) : null;
        await update(id, email, role, hashedPassword);

        res.status(200).json({ success: true, message: 'User berhasil diperbarui' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Terjadi kesalahan pada server', error: error.message });
    }
};

const verifyEmail = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        // Cari pengguna berdasarkan email
        const user = await findByEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'Email not found' });
        }

        // Perbarui status email menjadi terverifikasi tanpa pengecekan
        await updateVerificationStatus(email);

        res.status(200).json({ message: 'Email has been verified successfully' });
    } catch (error) {
        console.error('Error verifying email:', error);
        res.status(500).json({ message: 'An error occurred while verifying email', error: error.message });
    }
};

// Controller untuk memperbarui password
const updatePassword = async (req, res) => {
    const { userId, newPassword, confirmPassword } = req.body;

    if (!newPassword || !confirmPassword) {
        return res.status(400).json({ success: false, message: 'Semua field harus diisi' });
    }

    if (newPassword !== confirmPassword) {
        return res.status(400).json({ success: false, message: 'Password tidak cocok' });
    }

    try {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await update(userId, { password: hashedPassword });

        res.status(200).json({ success: true, message: 'Password berhasil diperbarui' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Terjadi kesalahan pada server', error: error.message });
    }
};

module.exports = { login, register, getAllUsers, updateUser, verifyEmail, updatePassword };
