const { addDivisiSpppSdm, getAllDivisiSpppSdm, getDivisiSpppSdmCount } = require('../../models/Operator/divisiSpppSdmOpModel');
const DivisiSpppSdmModel = require('../../models/Operator/divisiSpppSdmOpModel');

const addDivisiSpppSdmOp = async (req, res) => {
    try {
        const { nama_div_sppp_sdm, foto_div_sppp_sdm, tanggal_lahir, email, masa_jabatan, komentar_div_sppp_sdm } = req.body;

        if (!nama_div_sppp_sdm || !tanggal_lahir || !email || !masa_jabatan) {
            return res.status(400).json({
                success: false,
                message: 'Nama divisi, tanggal lahir, email, dan masa jabatan wajib diisi.'
            });
        }

        const existingData = await getDivisiSpppSdmCount();
        if (existingData >= 1) {
            return res.status(400).json({
                success: false,
                message: 'Tidak bisa menambah data lagi. Hanya diperbolehkan satu data.'
            });
        }

        await addDivisiSpppSdm({
            nama_div_sppp_sdm,
            foto_div_sppp_sdm,
            tanggal_lahir,
            email,
            masa_jabatan,
            komentar_div_sppp_sdm,
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

const getDivisiSpppSdmOp = async (req, res) => {
    try {
        const divisiSpppSdmData = await getAllDivisiSpppSdm();
        
        // Pastikan data selalu dikembalikan sebagai array, meskipun kosong
        if (!divisiSpppSdmData || !Array.isArray(divisiSpppSdmData)) {
            return res.status(200).json([]); // Kembalikan array kosong dengan status 200
        }

        res.status(200).json(divisiSpppSdmData); // Kembalikan data jika ada
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ error: 'Error fetching data from database' });
    }
};

const updtDivisiSpppSdmOp = async (req, res) => {
    const { id } = req.params;
    const { name, tanggal_lahir, email, komentar_div_sppp_sdm } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    try {
        // Cek apakah user dengan ID ada di database
        const results = await DivisiSpppSdmModel.getDivisiSpppSdmById(id);
        console.log(results);
        
        if (!results || results.length === 0) {
            return res.status(404).json({ error: 'Data tidak ditemukan' });
        }

        // Hanya ubah data yang diterima, jika ada perubahan
        const updatedName = name !== undefined ? name : results[0].nama_div_sppp_sdm;
        const updatedPhoto = photo !== null ? photo : results[0].foto_div_sppp_sdm;
        const updatedTanggalLahir = tanggal_lahir !== undefined ? tanggal_lahir : results[0].tanggal_lahir;
        const updatedEmail = email !== undefined ? email : results[0].email;
        const updatedKomentar = komentar_div_sppp_sdm !== undefined ? komentar_div_sppp_sdm : results[0].komentar_div_sppp_sdm;

        // Update hanya data yang berubah
        const updateResult = await DivisiSpppSdmModel.updateDivisiSpppSdm(id, updatedName, updatedPhoto, updatedTanggalLahir, updatedEmail, updatedKomentar);
        
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

// Delete Divisi SPPP SDM Operator
const delDivisiSpppSdmOp = (req, res) => {
    const { id } = req.params;

    DivisiSpppSdmModel.deleteDivisiSpppSdm(id, (err) => {
        if (err) {
            console.error('Error deleting user:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    });
};

// Read Komentar Divisi SPPP SDM Operator
const getKomentarDivisiSpppSdmOp = (req, res) => {
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
};

// Delete Komentar Divisi SPPP SDM Operator
const delKomentarDivisiSpppSdmOp = (req, res) => {
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
};

module.exports = {
    addDivisiSpppSdmOp,
    getDivisiSpppSdmOp,
    updtDivisiSpppSdmOp,
    delDivisiSpppSdmOp,
    getKomentarDivisiSpppSdmOp,
    delKomentarDivisiSpppSdmOp,
};
