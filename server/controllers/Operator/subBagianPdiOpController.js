const subBagianPdiModel = require('../../models/Operator/subBagianPdiOpModel');

class SubBagianPdiController {
    // Create Data Sub Bagian PDI Operator
    static addSubBagianPdiOp(req, res) {
        const { name, nip, position } = req.body;
        const photo = req.file ? `/uploads/${req.file.filename}` : null;

        if (!name || !nip || !position) {
            return res.status(400).json({ error: 'Nama, NIP, dan posisi diperlukan' });
        }

        subBagianPdiModel.insertSubBagianPdi({ name, nip, position, photo }, (err, results) => {
            if (err) {
                console.error('Error inserting data into sub_bagian_pdi:', err.message);
                return res.status(500).json({ error: 'Gagal menambahkan data. Silakan coba lagi.' });
            }
            res.status(201).json({ success: true, message: 'User added successfully' });
        });
    }

    // Read Data Sub Bagian PDI Operator
    static getSubBagianPdiOp(req, res) {
        subBagianPdiModel.getAllSubBagianPdi((err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json(results);
        });
    }

    // Update Data Sub Bagian PDI Operator
    static updtSubBagianPdiOp(req, res) {
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
    }

    // Delete Sub Bagian PDI Operator
    static delSubBagianPdiOp(req, res) {
        const { id } = req.params;
        subBagianPdiModel.deleteSubBagianPdi(id, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json({ success: true, message: 'User deleted successfully' });
        });
    }

    // Read Komentar Sub Bagian PDI Operator
    static getKomentarSubBagianPdiOp(req, res) {
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
    }

    // Delete Komentar Sub Bagian PDI
    static delKomentarSubBagianPdiOp(req, res) {
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
    }
}

module.exports = SubBagianPdiController;
