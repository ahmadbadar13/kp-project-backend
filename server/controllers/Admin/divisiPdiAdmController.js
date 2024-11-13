const { getAllDivisiPdi, addComment } = require('../../models/Admin/divisiPdiAdmModel');

const getDivisiPdiAdm = (req, res) => {
    getAllDivisiPdi((err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(results);
    });
};

const addKomentarDivisiPdiAdm = (req, res) => {
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
    getDivisiPdiAdm,
    addKomentarDivisiPdiAdm
};
