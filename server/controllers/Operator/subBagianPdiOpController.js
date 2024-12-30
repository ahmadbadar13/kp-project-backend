const { checkEmailExists, insertSubBagianPdi } = require('../../models/Operator/subBagianPdiOpModel');
const subBagianPdiModel = require('../../models/Operator/subBagianPdiOpModel');

// Create Data Sub Bagian PDI Operator
const addSubBagianPdiOp = async (req, res) => {
    try {
        const { nama_sb, nip_sb, posisi_sb, foto_sb, tanggal_lahir, email, komentar_sb_pdi } = req.body;

        // Validasi input
        if (!nama_sb || !nip_sb || !posisi_sb || !tanggal_lahir || !email) {
            return res.status(400).json({
                success: false,
                message: 'Nama, NIP, posisi, tanggal lahir, dan email wajib diisi.',
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
        await insertSubBagianPdi({
            nama_sb,
            nip_sb,
            posisi_sb,
            foto_sb,
            tanggal_lahir,
            email,
            komentar_sb_pdi,
        });

        res.status(201).json({ success: true, message: 'Data Sub Bagian PDI berhasil ditambahkan.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error adding data',
            error: error.message,
        });
    }
};

// Read Data Sub Bagian PDI Operator
const getSubBagianPdiOp = (req, res) => {
    subBagianPdiModel.getAllSubBagianPdi((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

// Update Data Sub Bagian PDI Operator
const updtSubBagianPdiOp = (req, res) => {
    const { id } = req.params;
    const { name, nip, position } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    subBagianPdiModel.getSubBagianPdiById(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ error: 'User not found' });

        const updatedData = {
            name: name || results[0].nama_sb_pdi,
            nip: nip || results[0].nip_sb_pdi,
            position: position || results[0].posisi_sb_pdi,
            photo: photo || results[0].foto_sb_pdi
        };

        subBagianPdiModel.updateSubBagianPdi(id, updatedData, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json({ success: true, message: 'User updated successfully' });
        });
    });
};

// Delete Data Sub Bagian PDI Operator
const delSubBagianPdiOp = (req, res) => {
    const { id } = req.params;
    subBagianPdiModel.deleteSubBagianPdi(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    });
};

// Read Komentar Sub Bagian PDI Operator
const getKomentarSubBagianPdiOp = (req, res) => {
    const id = req.params.id;

    if (!Number.isInteger(parseInt(id))) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    subBagianPdiModel.getKomentarById(id, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (result.length === 0) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json({ komentar: result[0].komentar_sb_pdi });
    });
};

// Delete Komentar Sub Bagian PDI
const delKomentarSubBagianPdiOp = (req, res) => {
    const id = req.params.id;

    if (!Number.isInteger(parseInt(id))) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    subBagianPdiModel.deleteKomentarById(id, (err, result) => {
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
    addSubBagianPdiOp,
    getSubBagianPdiOp,
    updtSubBagianPdiOp,
    delSubBagianPdiOp,
    getKomentarSubBagianPdiOp,
    delKomentarSubBagianPdiOp
};
