const { getAllDivisiKurl, addComment } = require('../../models/Admin/divisiKurlAdmModel');

const getDivisiKurlAdm = async (req, res) => {
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

const addKomentarDivisiKurlAdm = (req, res) => {
    const { userId, comment } = req.body;
    if (!userId || !comment) {
        return res.status(400).json({ error: 'User ID and comment are required' });
    }

    addComment(userId, comment, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'Comment added successfully' });
    });
};

module.exports = {
    getDivisiKurlAdm,
    addKomentarDivisiKurlAdm
};
