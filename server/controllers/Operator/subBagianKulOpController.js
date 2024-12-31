const { checkEmailExists, insertSubBagianKul } = require('../../models/Operator/subBagianKulOpModel');
const subBagianKulModel = require('../../models/Operator/subBagianKulOpModel');

// Create Data Sub Bagian KUL Operator
const addSubBagianKulOp = async (req, res) => {
    try {
        const { nama_sb, nip_sb, posisi_sb, foto_sb, tanggal_lahir, email, status_kepegawaian, komentar_sb_kul } = req.body;

        // Validasi input
        if (!nama_sb || !nip_sb || !posisi_sb || !tanggal_lahir || !email || !status_kepegawaian) {
            return res.status(400).json({
                success: false,
                message: 'Nama, NIP, posisi, tanggal lahir, email, dan status kepegawaian wajib diisi.',
            });
        }

        // Cek apakah email sudah ada
        const emailExists = await checkEmailExists(email);
        if (emailExists) {
            return res.status(400).json({
                success: false,
                message: 'Email sudah terdaftar.',
            });
        }

        // Tambahkan data ke database
        await insertSubBagianKul({
            nama_sb,
            nip_sb,
            posisi_sb,
            foto_sb,
            tanggal_lahir,
            email,
            status_kepegawaian,
            komentar_sb_kul,
        });

        res.status(201).json({ success: true, message: 'Data Sub Bagian KUL berhasil ditambahkan.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error adding data',
            error: error.message,
        });
    }
};

// Read Data Sub Bagian KUL Operator
const getSubBagianKulOp = (req, res) => {
    subBagianKulModel.getAllSubBagianKul((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

// Update Data Sub Bagian KUL Operator
const updtSubBagianKulOp = (req, res) => {
    const { id } = req.params;
    const { name, nip, position } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    subBagianKulModel.getSubBagianKulById(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ error: 'User not found' });

        const updatedData = {
            name: name || results[0].nama_sb_kul,
            nip: nip || results[0].nip_sb_kul,
            position: position || results[0].posisi_sb_kul,
            photo: photo || results[0].foto_sb_kul
        };

        subBagianKulModel.updateSubBagianKul(id, updatedData, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json({ success: true, message: 'User updated successfully' });
        });
    });
};

// Delete Data Sub Bagian KUL Operator
const delSubBagianKulOp = (req, res) => {
    const { id } = req.params;
    subBagianKulModel.deleteSubBagianKul(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    });
};

// Read Komentar Sub Bagian KUL Operator
const getKomentarSubBagianKulOp = (req, res) => {
    const id = req.params.id;

    if (!Number.isInteger(parseInt(id))) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    subBagianKulModel.getKomentarById(id, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (result.length === 0) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json({ komentar: result[0].komentar_sb_kul });
    });
};

// Delete Komentar Sub Bagian KUL
const delKomentarSubBagianKulOp = (req, res) => {
    const id = req.params.id;

    if (!Number.isInteger(parseInt(id))) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    subBagianKulModel.deleteKomentarById(id, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json({ message: 'Komentar berhasil dihapus' });
    });
};

module.exports = {
    addSubBagianKulOp,
    getSubBagianKulOp,
    updtSubBagianKulOp,
    delSubBagianKulOp,
    getKomentarSubBagianKulOp,
    delKomentarSubBagianKulOp
};
