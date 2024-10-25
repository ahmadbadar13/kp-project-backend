const DivisiSpppSdmModel = require('../../models/Operator/divisiSpppSdmOpModel');

class DivisiSpppSdmController {
    // Create Data Divisi Sppp SDM Operator
    static addDivisiSpppSdmOp(req, res) {
        const { name } = req.body;
        const photo = req.file ? `/uploads/${req.file.filename}` : null;

        // Mengecek jumlah data
        DivisiSpppSdmModel.checkDataCount((err, result) => {
            if (err) {
                console.error('Error checking data in divisi_sppp_sdm:', err.message);
                return res.status(500).json({ error: err.message });
            }

            const totalUsers = result[0].total;

            if (totalUsers >= 1) {
                return res.status(400).json({ success: false, message: 'Maksimal hanya bisa menambahkan 1 data!' });
            }

            // Menambahkan data
            DivisiSpppSdmModel.addDivisiSpppSdm(name, photo, (err) => {
                if (err) {
                    console.error('Error inserting data into divisi_sppp_sdm:', err.message);
                    return res.status(500).json({ error: err.message });
                }
                res.status(201).json({ success: true, message: 'User added successfully' });
            });
        });
    }

    // Read Data Divisi SPPP SDM Operator
    static getDivisiSpppSdmOp(req, res) {
        DivisiSpppSdmModel.getAllDivisiSpppSdm((err, results) => {
            if (err) {
                console.error('Error fetching data:', err.message);
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json(results);
        });
    }

    // Update Data Divisi SPPP SDM Operator
    static updtDivisiSpppSdmOp(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        const photo = req.file ? `/uploads/${req.file.filename}` : null;

        DivisiSpppSdmModel.getDivisiSpppSdmById(id, (err, results) => {
            if (err) {
                console.error('Error fetching user:', err.message);
                return res.status(500).json({ error: err.message });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }

            const updatedName = name || results[0].nama_div_sppp_sdm;
            const updatedPhoto = photo || results[0].foto_div_sppp_sdm;

            DivisiSpppSdmModel.updateDivisiSpppSdm(id, updatedName, updatedPhoto, (err) => {
                if (err) {
                    console.error('Error updating user:', err.message);
                    return res.status(500).json({ error: err.message });
                }
                res.status(200).json({ success: true, message: 'User updated successfully' });
            });
        });
    }

    // Delete Divisi SPPP SDM Operator
    static delDivisiSpppSdmOp(req, res) {
        const { id } = req.params;

        DivisiSpppSdmModel.deleteDivisiSpppSdm(id, (err) => {
            if (err) {
                console.error('Error deleting user:', err.message);
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ success: true, message: 'User deleted successfully' });
        });
    }

    // Read Komentar Divisi SPPP SDM Operator
    static getKomentarDivisiSpppSdmOp(req, res) {
        const id = req.params.id;

        if (!Number.isInteger(parseInt(id))) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }

        DivisiSpppSdmModel.getKomentarDivisiSpppSdm(id, (err, result) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: 'Database error' });
            }
            if (result.length === 0) {
                return res.status(404).json({ error: 'Data not found' });
            }
            res.json({ komentar: result[0].komentar_div_sppp_sdm });
        });
    }

    // Delete Komentar Divisi SPPP SDM Operator
    static delKomentarDivisiSpppSdmOp(req, res) {
        const id = req.params.id;

        if (!Number.isInteger(parseInt(id))) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }

        DivisiSpppSdmModel.deleteKomentarDivisiSpppSdm(id, (err, result) => {
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

module.exports = DivisiSpppSdmController;
