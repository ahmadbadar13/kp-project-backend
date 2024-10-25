const sekretarisModel = require('../../models/Operator/sekretarisOpModel');

class SekretarisOpController {
    // Menambahkan Sekretaris
    static addSekretarisOp(req, res) {
        const { name, nip } = req.body;
        const photo = req.file ? `/uploads/${req.file.filename}` : null;

        sekretarisModel.checkSekretarisCount((err, result) => {
            if (err) {
                console.error('Error checking data in sekretaris:', err.message);
                return res.status(500).json({ error: err.message });
            }

            if (result[0].total >= 1) {
                return res.status(400).json({ success: false, message: 'Maksimal hanya bisa menambahkan 1 data!' });
            }

            sekretarisModel.insertSekretaris(name, nip, photo, (err) => {
                if (err) {
                    console.error('Error inserting data into sekretaris:', err.message);
                    return res.status(500).json({ error: err.message });
                }
                res.status(201).json({ success: true, message: 'User added successfully' });
            });
        });
    }

    // Mendapatkan semua Sekretaris
    static getSekretarisOp(req, res) {
        sekretarisModel.getAllSekretaris((err, results) => {
            if (err) {
                console.error('Error fetching data:', err.message);
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json(results);
        });
    }

    // Memperbarui Sekretaris
    static updtSekretarisOp(req, res) {
        const { id } = req.params;
        const { name, nip } = req.body;
        const photo = req.file ? `/uploads/${req.file.filename}` : null;

        sekretarisModel.getSekretarisById(id, (err, results) => {
            if (err) {
                console.error('Error fetching user:', err.message);
                return res.status(500).json({ error: err.message });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }

            const updatedName = name || results[0].nama_sekretaris;
            const updatedNip = nip || results[0].nip_sekretaris;
            const updatedPhoto = photo || results[0].foto_sekretaris;

            sekretarisModel.updateSekretaris(id, updatedName, updatedNip, updatedPhoto, (err) => {
                if (err) {
                    console.error('Error updating user:', err.message);
                    return res.status(500).json({ error: err.message });
                }
                res.status(200).json({ success: true, message: 'User updated successfully' });
            });
        });
    }

    // Menghapus Sekretaris
    static delSekretarisOp(req, res) {
        const { id } = req.params;
        sekretarisModel.deleteSekretaris(id, (err) => {
            if (err) {
                console.error('Error deleting user:', err.message);
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ success: true, message: 'User deleted successfully' });
        });
    }

    // Mendapatkan Komentar Sekretaris
    static getKomentarSekretarisOp(req, res) {
        const id = req.params.id;

        if (!Number.isInteger(parseInt(id))) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }

        sekretarisModel.getKomentarSekretaris(id, (err, result) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: 'Database error' });
            }
            if (result.length === 0) {
                return res.status(404).json({ error: 'Data not found' });
            }
            res.json({ komentar: result[0].komentar_sekretaris });
        });
    }

    // Menghapus Komentar Sekretaris
    static delKomentarSekretarisOp(req, res) {
        const id = req.params.id;

        if (!Number.isInteger(parseInt(id))) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }

        sekretarisModel.deleteKomentarSekretaris(id, (err, result) => {
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

module.exports = SekretarisOpController;
