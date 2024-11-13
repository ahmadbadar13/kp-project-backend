const DivisiHpModel = require('../../models/Operator/divisiHpOpModel');

const addDivisiHpOp = (req, res) => {
    const { name } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    // Mengecek jumlah data
    DivisiHpModel.checkDataCount((err, result) => {
        if (err) {
            console.error('Error checking data in divisi_hp:', err.message);
            return res.status(500).json({ error: err.message });
        }

        const totalUsers = result[0].total;

        if (totalUsers >= 1) {
            return res.status(400).json({ success: false, message: 'Maksimal hanya bisa menambahkan 1 data!' });
        }

        // Menambahkan data
        DivisiHpModel.addDivisiHp(name, photo, (err) => {
            if (err) {
                console.error('Error inserting data into divisi_hp:', err.message);
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ success: true, message: 'User added successfully' });
        });
    });
};

const getDivisiHpOp = (req, res) => {
    DivisiHpModel.getAllDivisiHp((err, results) => {
        if (err) {
            console.error('Error fetching data:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

const updtDivisiHpOp = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    DivisiHpModel.getDivisiHpById(id, (err, results) => {
        if (err) {
            console.error('Error fetching user:', err.message);
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const updatedName = name || results[0].nama_div_hp;
        const updatedPhoto = photo || results[0].foto_div_hp;

        DivisiHpModel.updateDivisiHp(id, updatedName, updatedPhoto, (err) => {
            if (err) {
                console.error('Error updating user:', err.message);
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ success: true, message: 'User updated successfully' });
        });
    });
};

const delDivisiHpOp = (req, res) => {
    const { id } = req.params;

    DivisiHpModel.deleteDivisiHp(id, (err) => {
        if (err) {
            console.error('Error deleting user:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    });
};

const getKomentarDivisiHpOp = (req, res) => {
    const id = req.params.id;

    if (!Number.isInteger(parseInt(id))) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    DivisiHpModel.getKomentarDivisiHp(id, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (result.length === 0) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json({ komentar: result[0].komentar_div_hp });
    });
};

const delKomentarDivisiHpOp = (req, res) => {
    const id = req.params.id;

    if (!Number.isInteger(parseInt(id))) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    DivisiHpModel.deleteKomentarDivisiHp(id, (err, result) => {
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
    addDivisiHpOp,
    getDivisiHpOp,
    updtDivisiHpOp,
    delDivisiHpOp,
    getKomentarDivisiHpOp,
    delKomentarDivisiHpOp
};
