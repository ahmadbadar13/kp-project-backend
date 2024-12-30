const { getAllSbKul } = require('../../models/Admin/subBagianKulAdmModel');
const SubBagianKul = require('../../models/Admin/subBagianKulAdmModel');

const getSubBagianKulAdm = (req, res) => {
    getAllSbKul((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

const addKomentarSubBagianKulAdm = (req, res) => {
    const { userId, comment } = req.body;

    if (!userId || !comment) {
        return res.status(400).json({ error: 'User ID and comment are required' });
    }

    SubBagianKul.addKomentar(userId, comment, (err, results) => {
        if (err) {
            console.error('Error adding comment:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ message: 'Comment added successfully' });
    });
};

module.exports = {
    getSubBagianKulAdm,
    addKomentarSubBagianKulAdm
};
