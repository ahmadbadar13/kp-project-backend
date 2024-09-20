const db = require('../../config/db');

//Create Data Sekretaris Operator
exports.addSekretarisOp = (req, res) => {
  const { name, nip } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  if (!name || !nip) {
    return res.status(400).json({ error: 'Nama dan NIP diperlukan' });
  }

  const query = 'INSERT INTO sekretaris (nama_sekretaris, nip_sekretaris, foto_sekretaris, komentar_sekretaris) VALUES (?, ?, ?, ?)';

  db.query(query, [name, nip, photo, ''], (err, results) => {
    if (err) {
      console.error('Error inserting data into sekretaris:', err.message);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ success: true, message: 'User added successfully' });
  });
};

//Read Data Sekretaris Operator
exports.getSekretarisOp = (req, res) => {
  const query = 'SELECT * FROM sekretaris';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
}

//Update Data  Sekretaris Operator
exports.updtSekretarisOp = (req, res) => {
  const { id } = req.params;
  const { name, nip } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  // Query untuk mendapatkan data anggota yang ada
  const getUserQuery = 'SELECT * FROM sekretaris WHERE id = ?';
  db.query(getUserQuery, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'User not found' });

    // Data yang akan diperbarui
    const updatedName = name || results[0].nama_sekretaris;
    const updatedNip = nip || results[0].nip_sekretaris;
    const updatedPhoto = photo || results[0].foto_sekretaris;

    // Query untuk memperbarui data anggota
    const updateUserQuery = 'UPDATE sekretaris SET nama_sekretaris = ?, nip_sekretaris = ?, foto_sekretaris = ? WHERE id = ?';
    db.query(updateUserQuery, [updatedName, updatedNip, updatedPhoto, id], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ success: true, message: 'User updated successfully' });
    });
  });
}

//Delete Sekretaris Operator
exports.delSekretarisOp = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM sekretaris WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  });
}

//Read Komentar  Sekretaris Operator
exports.getKomentarSekretarisOp = (req, res) => {
  const id = req.params.id;

  // Validasi ID
  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const query = 'SELECT komentar_sekretaris FROM sekretaris WHERE id = ?';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.json({ komentar: result[0].komentar_sekretaris });
  });
}

//Delete Komentar Sekretaris
exports.delKomentarSekretarisOp = (req, res) => {
  const id = req.params.id;

  // Validasi ID
  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const query = 'UPDATE sekretaris SET komentar_sekretaris = NULL WHERE id = ?';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.json({ message: 'Komentar berhasil dihapus' });
  });
}