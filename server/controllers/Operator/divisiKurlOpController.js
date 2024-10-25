const DivisiKurlModel = require('../../models/Operator/divisiKurlOpModel');

class DivisiKurlController {
    // Create Data Divisi KURL Operator
    static addDivisiKurlOp(req, res) {
        const { name } = req.body;
        const photo = req.file ? `/uploads/${req.file.filename}` : null;

        // Mengecek jumlah data
        DivisiKurlModel.checkDataCount((err, result) => {
            if (err) {
                console.error('Error checking data in divisi_kurl:', err.message);
                return res.status(500).json({ error: err.message });
            }

            const totalUsers = result[0].total;

            if (totalUsers >= 1) {
                return res.status(400).json({ success: false, message: 'Maksimal hanya bisa menambahkan 1 data!' });
            }

            // Menambahkan data
            DivisiKurlModel.addDivisiKurl(name, photo, (err) => {
                if (err) {
                    console.error('Error inserting data into divisi_kurl:', err.message);
                    return res.status(500).json({ error: err.message });
                }
                res.status(201).json({ success: true, message: 'User added successfully' });
            });
        });
    }

    // Read Data Divisi KURL Operator
    static getDivisiKurlOp(req, res) {
        DivisiKurlModel.getAllDivisiKurl((err, results) => {
            if (err) {
                console.error('Error fetching data:', err.message);
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json(results);
        });
    }

    // Update Data Divisi KURL Operator
    static updtDivisiKurlOp(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        const photo = req.file ? `/uploads/${req.file.filename}` : null;

        DivisiKurlModel.getDivisiKurlById(id, (err, results) => {
            if (err) {
                console.error('Error fetching user:', err.message);
                return res.status(500).json({ error: err.message });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }

            const updatedName = name || results[0].nama_div_kurl;
            const updatedPhoto = photo || results[0].foto_div_kurl;

            DivisiKurlModel.updateDivisiKurl(id, updatedName, updatedPhoto, (err) => {
                if (err) {
                    console.error('Error updating user:', err.message);
                    return res.status(500).json({ error: err.message });
                }
                res.status(200).json({ success: true, message: 'User updated successfully' });
            });
        });
    }

    // Delete Divisi KURL Operator
    static delDivisiKurlOp(req, res) {
        const { id } = req.params;

        DivisiKurlModel.deleteDivisiKurl(id, (err) => {
            if (err) {
                console.error('Error deleting user:', err.message);
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ success: true, message: 'User deleted successfully' });
        });
    }

    // Read Komentar Divisi KURL Operator
    static getKomentarDivisiKurlOp(req, res) {
        const id = req.params.id;

        if (!Number.isInteger(parseInt(id))) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }

        DivisiKurlModel.getKomentarDivisiKurl(id, (err, result) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: 'Database error' });
            }
            if (result.length === 0) {
                return res.status(404).json({ error: 'Data not found' });
            }
            res.json({ komentar: result[0].komentar_div_kurl });
        });
    }

    // Delete Komentar Divisi KURL Operator
    static delKomentarDivisiKurlOp(req, res) {
        const id = req.params.id;

        if (!Number.isInteger(parseInt(id))) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }

        DivisiKurlModel.deleteKomentarDivisiKurl(id, (err, result) => {
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

module.exports = DivisiKurlController;
