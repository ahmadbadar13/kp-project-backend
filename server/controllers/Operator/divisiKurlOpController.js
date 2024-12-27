const { addDivisiKurl, getAllDivisiKurl, getDivisiKurlCount } = require('../../models/Operator/divisiKurlOpModel');
const DivisiKurlModel = require('../../models/Operator/divisiKurlOpModel');

const addDivisiKurlOp = async (req, res) => {
    try {
        const { nama_div_kurl, foto_div_kurl, tanggal_lahir, email, masa_jabatan, komentar_div_kurl } = req.body;

        if (!nama_div_kurl || !tanggal_lahir || !email || !masa_jabatan) {
            return res.status(400).json({
                success: false,
                message: 'Nama divisi, tanggal lahir, email, dan masa jabatan wajib diisi.'
            });
        }

        const existingData = await getDivisiKurlCount();
        if (existingData >= 1) {
            return res.status(400).json({
                success: false,
                message: 'Tidak bisa menambah data lagi. Hanya diperbolehkan satu data.'
            });
        }

        await addDivisiKurl({
            nama_div_kurl,
            foto_div_kurl,
            tanggal_lahir,
            email,
            masa_jabatan,
            komentar_div_kurl,
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

const getDivisiKurlOp = async (req, res) => {
    try {
        const divisiKurlData = await getAllDivisiKurl();
        
        // Pastikan data selalu dikembalikan sebagai array, meskipun kosong
        if (!divisiKurlData || !Array.isArray(divisiKurlData)) {
            return res.status(200).json([]); // Kembalikan array kosong dengan status 200
        }

        res.status(200).json(divisiKurlData); // Kembalikan data jika ada
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ error: 'Error fetching data from database' });
    }
};

const updtDivisiKurlOp = async (req, res) => {
    const { id } = req.params;
    const { name, tanggal_lahir, email, komentar_div_kurl } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    try {
        // Cek apakah user dengan ID ada di database
        const results = await DivisiKurlModel.getDivisiKurlById(id);
        console.log(results);
        
        if (!results || results.length === 0) {
            return res.status(404).json({ error: 'Data tidak ditemukan' });
        }

        // Hanya ubah data yang diterima, jika ada perubahan
        const updatedName = name !== undefined ? name : results[0].nama_div_kurl;
        const updatedPhoto = photo !== null ? photo : results[0].foto_div_kurl;
        const updatedTanggalLahir = tanggal_lahir !== undefined ? tanggal_lahir : results[0].tanggal_lahir;
        const updatedEmail = email !== undefined ? email : results[0].email;
        const updatedKomentar = komentar_div_kurl !== undefined ? komentar_div_kurl : results[0].komentar_div_kurl;

        // Update hanya data yang berubah
        const updateResult = await DivisiKurlModel.updateDivisiKurl(id, updatedName, updatedPhoto, updatedTanggalLahir, updatedEmail, updatedKomentar);
        
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

// Delete Divisi KURL Operator
const delDivisiKurlOp = (req, res) => {
    const { id } = req.params;

    DivisiKurlModel.deleteDivisiKurl(id, (err) => {
        if (err) {
            console.error('Error deleting user:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    });
};

// Read Komentar Divisi KURL Operator
const getKomentarDivisiKurlOp = (req, res) => {
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
};

// Delete Komentar Divisi KURL Operator
const delKomentarDivisiKurlOp = (req, res) => {
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
};

module.exports = {
    addDivisiKurlOp,
    getDivisiKurlOp,
    updtDivisiKurlOp,
    delDivisiKurlOp,
    getKomentarDivisiKurlOp,
    delKomentarDivisiKurlOp
};
