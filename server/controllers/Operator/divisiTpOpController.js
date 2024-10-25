const DivisiTpModel = require('../../models/Operator/divisiTpOpModel');

class DivisiTpController {
    // Create Data Divisi TP Operator
    static addDivisiTpOp(req, res) {
        const { name } = req.body;
        const photo = req.file ? `/uploads/${req.file.filename}` : null;

        // Mengecek jumlah data
        DivisiTpModel.checkDataCount((err, result) => {
            if (err) {
                console.error('Error checking data in divisi_tp:', err.message);
                return res.status(500).json({ error: err.message });
            }

            const totalUsers = result[0].total;

            if (totalUsers >= 1) {
                return res.status(400).json({ success: false, message: 'Maksimal hanya bisa menambahkan 1 data!' });
            }

            // Menambahkan data
            DivisiTpModel.addDivisiTp(name, photo, (err) => {
                if (err) {
                    console.error('Error inserting data into divisi_tp:', err.message);
                    return res.status(500).json({ error: err.message });
                }
                res.status(201).json({ success: true, message: 'User added successfully' });
            });
        });
    }

    // Read Data Divisi TP Operator
    static getDivisiTpOp(req, res) {
        DivisiTpModel.getAllDivisiTp((err, results) => {
            if (err) {
                console.error('Error fetching data:', err.message);
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json(results);
        });
    }

    // Update Data Divisi TP Operator
    static updtDivisiTpOp(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        const photo = req.file ? `/uploads/${req.file.filename}` : null;

        DivisiTpModel.getDivisiTpById(id, (err, results) => {
            if (err) {
                console.error('Error fetching user:', err.message);
                return res.status(500).json({ error: err.message });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }

            const updatedName = name || results[0].nama_div_tp;
            const updatedPhoto = photo || results[0].foto_div_tp;

            DivisiTpModel.updateDivisiTp(id, updatedName, updatedPhoto, (err) => {
                if (err) {
                    console.error('Error updating user:', err.message);
                    return res.status(500).json({ error: err.message });
                }
                res.status(200).json({ success: true, message: 'User updated successfully' });
            });
        });
    }

    // Delete Divisi TP Operator
    static delDivisiTpOp(req, res) {
        const { id } = req.params;

        DivisiTpModel.deleteDivisiTp(id, (err) => {
            if (err) {
                console.error('Error deleting user:', err.message);
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ success: true, message: 'User deleted successfully' });
        });
    }

    // Read Komentar Divisi TP Operator
    static getKomentarDivisiTpOp(req, res) {
        const id = req.params.id;

        if (!Number.isInteger(parseInt(id))) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }

        DivisiTpModel.getKomentarDivisiTp(id, (err, result) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: 'Database error' });
            }
            if (result.length === 0) {
                return res.status(404).json({ error: 'Data not found' });
            }
            res.json({ komentar: result[0].komentar_div_tp });
        });
    }

    // Delete Komentar Divisi TP Operator
    static delKomentarDivisiTpOp(req, res) {
        const id = req.params.id;

        if (!Number.isInteger(parseInt(id))) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }

        DivisiTpModel.deleteKomentarDivisiTp(id, (err, result) => {
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

module.exports = DivisiTpController;
