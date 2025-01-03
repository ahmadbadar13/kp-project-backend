const { checkEmailExists, insertSubBagianHsdm } = require('../../models/Operator/subBagianHsdmOpModel');
const subBagianHsdmModel = require('../../models/Operator/subBagianHsdmOpModel');

// Create Data Sub Bagian HSDM Operator
const addSubBagianHsdmOp = async (req, res) => {
    try {
        const { nama_sb, nip_sb, posisi_sb, foto_sb, tanggal_lahir, email, status_kepegawaian, surat_keputusan, komentar_sb_hsdm } = req.body;

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
        await insertSubBagianHsdm({
            nama_sb,
            nip_sb,
            posisi_sb,
            foto_sb,
            tanggal_lahir,
            email,
            status_kepegawaian,
            surat_keputusan,
            komentar_sb_hsdm,
        });

        res.status(201).json({ success: true, message: 'Data Sub Bagian HSDM berhasil ditambahkan.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error adding data',
            error: error.message,
        });
    }
};

// Read Data Sub Bagian HSDM Operator
const getSubBagianHsdmOp = (req, res) => {
    subBagianHsdmModel.getAllSubBagianHsdm((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

// Update Data Sub Bagian HSDM Operator
const updtSubBagianHsdmOp = (req, res) => {
    const { id } = req.params;
    const { name, nip, position } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    subBagianHsdmModel.getSubBagianHsdmById(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ error: 'User not found' });

        const updatedData = {
            name: name || results[0].nama_sb_hsdm,
            nip: nip || results[0].nip_sb_hsdm,
            position: position || results[0].posisi_sb_hsdm,
            photo: photo || results[0].foto_sb_hsdm
        };

        subBagianHsdmModel.updateSubBagianHsdm(id, updatedData, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json({ success: true, message: 'User updated successfully' });
        });
    });
};

// Delete Data Sub Bagian HSDM Operator
const delSubBagianHsdmOp = (req, res) => {
    const { id } = req.params;
    subBagianHsdmModel.deleteSubBagianHsdm(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    });
};

// Read Komentar Sub Bagian HSDM Operator
const getKomentarSubBagianHsdmOp = (req, res) => {
    const id = req.params.id;

    if (!Number.isInteger(parseInt(id))) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    subBagianHsdmModel.getKomentarById(id, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (result.length === 0) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json({ komentar: result[0].komentar_sb_hsdm });
    });
};

// Delete Komentar Sub Bagian HSDM
const delKomentarSubBagianHsdmOp = (req, res) => {
    const id = req.params.id;

    if (!Number.isInteger(parseInt(id))) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    subBagianHsdmModel.deleteKomentarById(id, (err, result) => {
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
    addSubBagianHsdmOp,
    getSubBagianHsdmOp,
    updtSubBagianHsdmOp,
    delSubBagianHsdmOp,
    getKomentarSubBagianHsdmOp,
    delKomentarSubBagianHsdmOp
};
