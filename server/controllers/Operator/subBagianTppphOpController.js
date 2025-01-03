const { checkEmailExists, insertSubBagianTppph } = require('../../models/Operator/subBagianTppphOpModel');
const subBagianTppphModel = require('../../models/Operator/subBagianTppphOpModel');

// Create Data Sub Bagian TPPPH Operator
const addSubBagianTppphOp = async (req, res) => {
    try {
        const { nama_sb, nip_sb, posisi_sb, foto_sb, tanggal_lahir, email, status_kepegawaian, surat_keputusan, komentar_sb_tppph } = req.body;

        // Validasi input
        if (!nama_sb || !nip_sb || !posisi_sb || !tanggal_lahir || !email || !status_kepegawaian || !surat_keputusan) {
            return res.status(400).json({
                success: false,
                message: 'Nama, NIP, posisi, tanggal lahir, email, status kepegawaian, dan surat keputusan wajib diisi.',
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
        await insertSubBagianTppph({
            nama_sb,
            nip_sb,
            posisi_sb,
            foto_sb,
            tanggal_lahir,
            email,
            status_kepegawaian,
            surat_keputusan,
            komentar_sb_tppph,
        });

        res.status(201).json({ success: true, message: 'Data Sub Bagian TPPPH berhasil ditambahkan.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error adding data',
            error: error.message,
        });
    }
};

// Read Data Sub Bagian TPPPH Operator
const getSubBagianTppphOp = (req, res) => {
    subBagianTppphModel.getAllSubBagianTppph((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

// Update Data Sub Bagian TPPPH Operator
const updtSubBagianTppphOp = (req, res) => {
    const { id } = req.params;
    const { name, nip, position } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    subBagianTppphModel.getSubBagianTppphById(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ error: 'User not found' });

        const updatedData = {
            name: name || results[0].nama_sb_tppph,
            nip: nip || results[0].nip_sb_tppph,
            position: position || results[0].posisi_sb_tppph,
            photo: photo || results[0].foto_sb_tppph
        };

        subBagianTppphModel.updateSubBagianTppph(id, updatedData, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json({ success: true, message: 'User updated successfully' });
        });
    });
};

// Delete Data Sub Bagian TPPPH Operator
const delSubBagianTppphOp = (req, res) => {
    const { id } = req.params;
    subBagianTppphModel.deleteSubBagianTppph(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    });
};

// Read Komentar Sub Bagian TPPPH Operator
const getKomentarSubBagianTppphOp = (req, res) => {
    const id = req.params.id;

    if (!Number.isInteger(parseInt(id))) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    subBagianTppphModel.getKomentarById(id, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (result.length === 0) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json({ komentar: result[0].komentar_sb_tppph });
    });
};

// Delete Komentar Sub Bagian TPPPH
const delKomentarSubBagianTppphOp = (req, res) => {
    const id = req.params.id;

    if (!Number.isInteger(parseInt(id))) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    subBagianTppphModel.deleteKomentarById(id, (err, result) => {
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
    addSubBagianTppphOp,
    getSubBagianTppphOp,
    updtSubBagianTppphOp,
    delSubBagianTppphOp,
    getKomentarSubBagianTppphOp,
    delKomentarSubBagianTppphOp
};
