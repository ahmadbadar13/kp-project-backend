const { getAllSbPdi } = require('../../models/Admin/subBagianPdiAdmModel');
const SubBagianPdi = require('../../models/Admin/subBagianPdiAdmModel');

const getSubBagianPdiAdm = (req, res) => {
    getAllSbPdi((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

const addKomentarSubBagianPdiAdm = (req, res) => {
    const { userId, comment } = req.body;

    if (!userId || !comment) {
        return res.status(400).json({ error: 'User ID and comment are required' });
    }

    SubBagianPdi.addKomentar(userId, comment, (err, results) => {
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
    getSubBagianPdiAdm,
    addKomentarSubBagianPdiAdm
};
