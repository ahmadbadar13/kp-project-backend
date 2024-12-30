const { getAllSekretaris } = require('../../models/Admin/sekretarisAdmModel');
const Sekretaris = require('../../models/Admin/sekretarisAdmModel');

const getSekretarisAdm = async (req, res) => {
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

const addKomentarSekretarisAdm = (req, res) => {
    const { userId, comment } = req.body;

    if (!userId || !comment) {
        return res.status(400).json({ error: 'User ID and comment are required' });
    }

    Sekretaris.addKomentar(userId, comment, (err, results) => {
        if (err) {
            console.error('Error updating comment:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ message: 'Comment added successfully' });
    });
};

module.exports = {
    getSekretarisAdm,
    addKomentarSekretarisAdm
};
