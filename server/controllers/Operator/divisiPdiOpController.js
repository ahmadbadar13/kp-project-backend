const DivisiPdiModel = require('../../models/Operator/divisiPdiOpModel');

// Create Data Divisi PDI Operator
const addDivisiPdiOp = (req, res) => {
    const { name } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    DivisiPdiModel.checkDataCount((err, result) => {
        if (err) {
            console.error('Error checking data in divisi_pdi:', err.message);
            return res.status(500).json({ error: err.message });
        }

        const totalUsers = result[0].total;

        if (totalUsers >= 1) {
            return res.status(400).json({ success: false, message: 'Maksimal hanya bisa menambahkan 1 data!' });
        }

        DivisiPdiModel.addDivisiPdi(name, photo, (err) => {
            if (err) {
                console.error('Error inserting data into divisi_pdi:', err.message);
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ success: true, message: 'User added successfully' });
        });
    });
};

// Read Data Divisi PDI Operator
const getDivisiPdiOp = (req, res) => {
    DivisiPdiModel.getAllDivisiPdi((err, results) => {
        if (err) {
            console.error('Error fetching data:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Update Data Divisi PDI Operator
const updtDivisiPdiOp = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    DivisiPdiModel.getDivisiPdiById(id, (err, results) => {
        if (err) {
            console.error('Error fetching user:', err.message);
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const updatedName = name || results[0].nama_div_pdi;
        const updatedPhoto = photo || results[0].foto_div_pdi;

        DivisiPdiModel.updateDivisiPdi(id, updatedName, updatedPhoto, (err) => {
            if (err) {
                console.error('Error updating user:', err.message);
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ success: true, message: 'User updated successfully' });
        });
    });
};

// Delete Divisi PDI Operator
const delDivisiPdiOp = (req, res) => {
    const { id } = req.params;

    DivisiPdiModel.deleteDivisiPdi(id, (err) => {
        if (err) {
            console.error('Error deleting user:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    });
};

// Read Komentar Divisi PDI Operator
const getKomentarDivisiPdiOp = (req, res) => {
    const id = req.params.id;

    if (!Number.isInteger(parseInt(id))) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    DivisiPdiModel.getKomentarDivisiPdi(id, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (result.length === 0) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json({ komentar: result[0].komentar_div_pdi });
    });
};

// Delete Komentar Divisi PDI Operator
const delKomentarDivisiPdiOp = (req, res) => {
    const id = req.params.id;

    if (!Number.isInteger(parseInt(id))) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    DivisiPdiModel.deleteKomentarDivisiPdi(id, (err, result) => {
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
    addDivisiPdiOp,
    getDivisiPdiOp,
    updtDivisiPdiOp,
    delDivisiPdiOp,
    getKomentarDivisiPdiOp,
    delKomentarDivisiPdiOp
};
