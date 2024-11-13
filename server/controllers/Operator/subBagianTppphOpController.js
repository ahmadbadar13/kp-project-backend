const subBagianTppphModel = require('../../models/Operator/subBagianTppphOpModel');

// Fungsi untuk menambahkan data Sub Bagian TPPPH Operator
const addSubBagianTppphOp = (req, res) => {
    const { name, nip, position } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    if (!name || !nip || !position) {
        return res.status(400).json({ error: 'Nama, NIP, dan posisi diperlukan' });
    }

    subBagianTppphModel.insertSubBagianTppph({ name, nip, position, photo }, (err, results) => {
        if (err) {
            console.error('Error inserting data into sub_bagian_tppph:', err.message);
            return res.status(500).json({ error: 'Gagal menambahkan data. Silakan coba lagi.' });
        }
        res.status(201).json({ success: true, message: 'User added successfully' });
    });
};

// Fungsi untuk mendapatkan data Sub Bagian TPPPH Operator
const getSubBagianTppphOp = (req, res) => {
    subBagianTppphModel.getAllSubBagianTppph((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

// Fungsi untuk memperbarui data Sub Bagian TPPPH Operator
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

// Fungsi untuk menghapus data Sub Bagian TPPPH Operator
const delSubBagianTppphOp = (req, res) => {
    const { id } = req.params;
    subBagianTppphModel.deleteSubBagianTppph(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    });
};

// Fungsi untuk mendapatkan komentar Sub Bagian TPPPH Operator
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

// Fungsi untuk menghapus komentar Sub Bagian TPPPH
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
