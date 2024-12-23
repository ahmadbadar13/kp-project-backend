const { addDivisiHp } = require('../../models/Operator/divisiHpOpModel');

const addDivisiHpOp = async (req, res) => {
    try {
        // Mendapatkan data dari body request
        const { nama_div_hp, foto_div_hp, tanggal_lahir, email, komentar_div_hp } = req.body;

        // Validasi jika nama divisi tidak ada
        if (!nama_div_hp || !tanggal_lahir || !email) {
            return res.status(400).json({
                success: false,
                message: 'Nama divisi, tanggal lahir, dan email wajib diisi.'
            });
        }

        // Simpan data ke database
        await addDivisiHp({ 
            nama_div_hp, 
            foto_div_hp, 
            tanggal_lahir, 
            email, 
            komentar_div_hp 
        });

        res.status(201).json({ success: true, message: 'Divisi berhasil ditambahkan.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error adding data',
            error: error.message
        });
    }
};

const getDivisiHpOp = async (req, res) => {
    try {
        const divisi = await getAllDivisi();
        res.status(200).json(divisi);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching data', error: error.message });
    }
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
