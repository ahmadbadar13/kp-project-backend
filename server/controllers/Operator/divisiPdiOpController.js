const { addDivisiPdi, getAllDivisiPdi, getDivisiPdiCount } = require('../../models/Operator/divisiPdiOpModel');
const DivisiPdiModel = require('../../models/Operator/divisiPdiOpModel');

const addDivisiPdiOp = async (req, res) => {
    try {
        const { nama_div_pdi, foto_div_pdi, tanggal_lahir, email, masa_jabatan, komentar_div_pdi } = req.body;

        if (!nama_div_pdi || !tanggal_lahir || !email || !masa_jabatan) {
            return res.status(400).json({
                success: false,
                message: 'Nama divisi, tanggal lahir, email, dan masa jabatan wajib diisi.'
            });
        }

        const existingData = await getDivisiPdiCount();
        if (existingData >= 1) {
            return res.status(400).json({
                success: false,
                message: 'Tidak bisa menambah data lagi. Hanya diperbolehkan satu data.'
            });
        }

        await addDivisiPdi({
            nama_div_pdi,
            foto_div_pdi,
            tanggal_lahir,
            email,
            masa_jabatan,
            komentar_div_pdi,
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

const getDivisiPdiOp = async (req, res) => {
    try {
        const divisiPdiData = await getAllDivisiPdi();
        
        // Pastikan data selalu dikembalikan sebagai array, meskipun kosong
        if (!divisiPdiData || !Array.isArray(divisiPdiData)) {
            return res.status(200).json([]); // Kembalikan array kosong dengan status 200
        }

        res.status(200).json(divisiPdiData); // Kembalikan data jika ada
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ error: 'Error fetching data from database' });
    }
};

const updtDivisiPdiOp = async (req, res) => {
    const { id } = req.params;
    const { name, tanggal_lahir, email, komentar_div_pdi } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    try {
        // Cek apakah user dengan ID ada di database
        const results = await DivisiPdiModel.getDivisiPdiById(id);
        console.log(results);
        
        if (!results || results.length === 0) {
            return res.status(404).json({ error: 'Data tidak ditemukan' });
        }

        // Hanya ubah data yang diterima, jika ada perubahan
        const updatedName = name !== undefined ? name : results[0].nama_div_pdi;
        const updatedPhoto = photo !== null ? photo : results[0].foto_div_pdi;
        const updatedTanggalLahir = tanggal_lahir !== undefined ? tanggal_lahir : results[0].tanggal_lahir;
        const updatedEmail = email !== undefined ? email : results[0].email;
        const updatedKomentar = komentar_div_pdi !== undefined ? komentar_div_pdi : results[0].komentar_div_pdi;

        // Update hanya data yang berubah
        const updateResult = await DivisiPdiModel.updateDivisiPdi(id, updatedName, updatedPhoto, updatedTanggalLahir, updatedEmail, updatedKomentar);
        
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
