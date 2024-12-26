const { insertSekretaris,
    getAllSekretaris,
    checkSekretarisCount,
    getSekretarisById,
    updateSekretaris } = require('../../models/Operator/sekretarisOpModel');
const sekretarisModel = require('../../models/Operator/sekretarisOpModel');

const addSekretarisOp = async (req, res) => {
    try {
        const { nama_sekretaris, nip_sekretaris, foto_sekretaris, tanggal_lahir, email, komentar_sekretaris } = req.body;

        // Validasi data yang dibutuhkan
        if (!nama_sekretaris || !nip_sekretaris || !tanggal_lahir || !email) {
            return res.status(400).json({
                success: false,
                message: 'Nama sekretaris, NIP, tanggal lahir, dan email wajib diisi.'
            });
        }

        // Mengecek apakah sudah ada data yang terdaftar
        const existingData = await checkSekretarisCount();
        if (existingData >= 1) {
            return res.status(400).json({
                success: false,
                message: 'Tidak bisa menambah data lagi. Hanya diperbolehkan satu data.'
            });
        }

        // Menambahkan data sekretaris ke database
        await insertSekretaris({
            nama_sekretaris,
            nip_sekretaris,
            foto_sekretaris,
            tanggal_lahir,
            email,
            komentar_sekretaris,
        });

        res.status(201).json({ success: true, message: 'Sekretaris berhasil ditambahkan.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error adding data',
            error: error.message,
        });
    }
};

const getSekretarisOp = async (req, res) => {
    try {
        const sekretarisData = await getAllSekretaris();

        // Pastikan data selalu dikembalikan sebagai array, meskipun kosong
        if (!sekretarisData || !Array.isArray(sekretarisData)) {
            return res.status(200).json([]); // Kembalikan array kosong dengan status 200
        }

        res.status(200).json(sekretarisData); // Kembalikan data jika ada
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ error: 'Error fetching data from database' });
    }
};

const updtSekretarisOp = async (req, res) => {
    const { id } = req.params;
    const { nama_sekretaris, nip_sekretaris, tanggal_lahir, email, komentar_sekretaris } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    try {
        // Cek apakah user dengan ID ada di database
        const results = await getSekretarisById(id);
        console.log(results);
        
        if (!results || results.length === 0) {
            return res.status(404).json({ error: 'Data tidak ditemukan' });
        }

        // Hanya ubah data yang diterima, jika ada perubahan
        const updatedNama = nama_sekretaris !== undefined ? nama_sekretaris : results[0].nama_sekretaris;
        const updatedNip = nip_sekretaris !== undefined ? nip_sekretaris : results[0].nip_sekretaris;
        const updatedPhoto = photo !== null ? photo : results[0].foto_sekretaris;
        const updatedTanggalLahir = tanggal_lahir !== undefined ? tanggal_lahir : results[0].tanggal_lahir;
        const updatedEmail = email !== undefined ? email : results[0].email;
        const updatedKomentar = komentar_sekretaris !== undefined ? komentar_sekretaris : results[0].komentar_sekretaris;

        // Update hanya data yang berubah
        const updateResult = await updateSekretaris(id, updatedNama, updatedNip, updatedPhoto, updatedTanggalLahir, updatedEmail, updatedKomentar);
        
        if (updateResult.affectedRows > 0) {
            res.status(200).json({ success: true, message: 'Data berhasil diperbarui' });
        } else {
            res.status(500).json({ error: 'Tidak dapat memperbarui data' });
        }
    } catch (error) {
        console.error('Error updating sekretaris:', error);
        res.status(500).json({ error: 'Terjadi kesalahan saat mengedit data sekretaris.' });
    }
};

// Menghapus Sekretaris
const delSekretarisOp = (req, res) => {
    const { id } = req.params;
    sekretarisModel.deleteSekretaris(id, (err) => {
        if (err) {
            console.error('Error deleting user:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    });
};

// Mendapatkan Komentar Sekretaris
const getKomentarSekretarisOp = (req, res) => {
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
};

// Menghapus Komentar Sekretaris
const delKomentarSekretarisOp = (req, res) => {
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
};

module.exports = {
    addSekretarisOp,
    getSekretarisOp,
    updtSekretarisOp,
    delSekretarisOp,
    getKomentarSekretarisOp,
    delKomentarSekretarisOp
};
