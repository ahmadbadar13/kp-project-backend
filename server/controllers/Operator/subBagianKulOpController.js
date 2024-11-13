const subBagianKulModel = require('../../models/Operator/subBagianKulOpModel');

// Create Data Sub Bagian KUL Operator
const addSubBagianKulOp = (req, res) => {
    const { name, nip, position } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    if (!name || !nip || !position) {
        return res.status(400).json({ error: 'Nama, NIP, dan posisi diperlukan' });
    }

    subBagianKulModel.insertSubBagianKul({ name, nip, position, photo }, (err, results) => {
        if (err) {
            console.error('Error inserting data into sub_bagian_kul:', err.message);
            return res.status(500).json({ error: 'Gagal menambahkan data. Silakan coba lagi.' });
        }
        res.status(201).json({ success: true, message: 'User added successfully' });
    });
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

// Delete Sub Bagian KUL Operator
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
