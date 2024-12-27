const { addDivisiTp, getAllDivisiTp, getDivisiTpCount } = require('../../models/Operator/divisiTpOpModel');
const DivisiTpModel = require('../../models/Operator/divisiTpOpModel');

const addDivisiTpOp = async (req, res) => {
    try {
        const { nama_div_tp, foto_div_tp, tanggal_lahir, email, masa_jabatan, komentar_div_tp } = req.body;

        if (!nama_div_tp || !tanggal_lahir || !email || !masa_jabatan) {
            return res.status(400).json({
                success: false,
                message: 'Nama divisi, tanggal lahir, email, dan masa jabatan wajib diisi.'
            });
        }

        const existingData = await getDivisiTpCount();
        if (existingData >= 1) {
            return res.status(400).json({
                success: false,
                message: 'Tidak bisa menambah data lagi. Hanya diperbolehkan satu data.'
            });
        }

        await addDivisiTp({
            nama_div_tp,
            foto_div_tp,
            tanggal_lahir,
            email,
            masa_jabatan,
            komentar_div_tp,
        });

        res.status(201).json({ success: true, message: 'Divisi berhasil ditambahkan.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error adding data',
            error: error.message,
        });
    }
};

const getDivisiTpOp = async (req, res) => {
    try {
        const divisiTpData = await getAllDivisiTp();
        
        // Pastikan data selalu dikembalikan sebagai array, meskipun kosong
        if (!divisiTpData || !Array.isArray(divisiTpData)) {
            return res.status(200).json([]); // Kembalikan array kosong dengan status 200
        }

        res.status(200).json(divisiTpData); // Kembalikan data jika ada
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ error: 'Error fetching data from database' });
    }
};

const updtDivisiTpOp = async (req, res) => {
    const { id } = req.params;
    const { name, tanggal_lahir, email, komentar_div_tp } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    try {
        // Cek apakah user dengan ID ada di database
        const results = await DivisiTpModel.getDivisiTpById(id);
        console.log(results);
        
        if (!results || results.length === 0) {
            return res.status(404).json({ error: 'Data tidak ditemukan' });
        }

        // Hanya ubah data yang diterima, jika ada perubahan
        const updatedName = name !== undefined ? name : results[0].nama_div_tp;
        const updatedPhoto = photo !== null ? photo : results[0].foto_div_tp;
        const updatedTanggalLahir = tanggal_lahir !== undefined ? tanggal_lahir : results[0].tanggal_lahir;
        const updatedEmail = email !== undefined ? email : results[0].email;
        const updatedKomentar = komentar_div_tp !== undefined ? komentar_div_tp : results[0].komentar_div_tp;

        // Update hanya data yang berubah
        const updateResult = await DivisiTpModel.updateDivisiTp(id, updatedName, updatedPhoto, updatedTanggalLahir, updatedEmail, updatedKomentar);
        
        if (updateResult.affectedRows > 0) {
            res.status(200).json({ success: true, message: 'Data berhasil diperbarui' });
        } else {
            res.status(500).json({ error: 'Tidak dapat memperbarui data' });
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Terjadi kesalahan saat mengedit anggota.' });
    }
};

// Delete Divisi TP Operator
const delDivisiTpOp = (req, res) => {
    const { id } = req.params;

    DivisiTpModel.deleteDivisiTp(id, (err) => {
        if (err) {
            console.error('Error deleting user:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    });
};

// Read Komentar Divisi TP Operator
const getKomentarDivisiTpOp = (req, res) => {
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
};

// Delete Komentar Divisi TP Operator
const delKomentarDivisiTpOp = (req, res) => {
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
};

module.exports = {
    addDivisiTpOp,
    getDivisiTpOp,
    updtDivisiTpOp,
    delDivisiTpOp,
    getKomentarDivisiTpOp,
    delKomentarDivisiTpOp
};
