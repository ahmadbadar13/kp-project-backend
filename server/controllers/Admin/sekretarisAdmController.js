const Sekretaris = require('../../models/Admin/sekretarisModel');

class SekretarisController {
    static getSekretarisAdm(req, res) {
        Sekretaris.getAllSekretaris((err, results) => {
        if (err) {
            console.error('Error fetching sekretaris:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(results);
        });
    }

    static addKomentarSekretarisAdm(req, res) {
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
    }
}

module.exports = SekretarisController;
