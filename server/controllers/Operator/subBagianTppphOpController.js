const db = require('../../config/db');

//Create Data Sub Bagian TPPPH Operator
exports.addSubBagianTppphOp = (req, res) => {
  const { name, nip, position } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  if (!name || !nip || !position) {
    return res.status(400).json({ error: 'Nama, NIP, dan posisi diperlukan' });
  }

  const query = 'INSERT INTO sub_bagian_tppph (nama_sb_tppph, nip_sb_tppph, posisi_sb_tppph, foto_sb_tppph) VALUES (?, ?, ?, ?)';

  db.query(query, [name, nip, position, photo], (err, results) => {
    if (err) {
      console.error('Error inserting data into sub_bagian_tppph:', err.message);
      return res.status(500).json({ error: 'Gagal menambahkan data. Silakan coba lagi.' });
    }
    res.status(201).json({ success: true, message: 'User added successfully' });
  });
};

//Read Data Sub Bagian TPPPH Operator
exports.getSubBagianTppphOp = (req, res) => {
  const query = 'SELECT * FROM sub_bagian_tppph';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
}

//Update Data Sub Bagian TPPPH Operator
exports.updtSubBagianTppphOp = (req, res) => {
  const { id } = req.params;
  const { name, nip, position } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  // Query untuk mendapatkan data anggota yang ada
  const getUserQuery = 'SELECT * FROM sub_bagian_tppph WHERE id = ?';
  db.query(getUserQuery, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'User not found' });

    // Data yang akan diperbarui
    const updatedName = name || results[0].nama_sb_tppph;
    const updatedNip = nip || results[0].nip_sb_tppph;
    const updatedPosition = position || results[0].posisi_sb_tppph;
    const updatedPhoto = photo || results[0].foto_sb_tppph;

    // Query untuk memperbarui data anggota
    const updateUserQuery = 'UPDATE sub_bagian_tppph SET nama_sb_tppph = ?, nip_sb_tppph = ?, posisi_sb_tppph = ?, foto_sb_tppph = ? WHERE id = ?';
    db.query(updateUserQuery, [updatedName, updatedNip, updatedPosition, updatedPhoto, id], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ success: true, message: 'User updated successfully' });
    });
  });
}

//Delete Sub Bagian TPPPH Operator
exports.delSubBagianTppphOp = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM sub_bagian_tppph WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  });
}

//Read Komentar Sub Bagian TPPPH Operator
exports.getKomentarSubBagianTppphOp = (req, res) => {
  const id = req.params.id;

  // Validasi ID
  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const query = 'SELECT komentar_sb_tppph FROM sub_bagian_tppph WHERE id = ?';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.json({ komentar: result[0].komentar_sb_tppph });
  });
}

//Delete Komentar Sub Bagian TPPPH
exports.delKomentarSubBagianTppphOp = (req, res) => {
  const id = req.params.id;

  // Validasi ID
  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const query = 'UPDATE sub_bagian_tppph SET komentar_sb_tppph = NULL WHERE id = ?';

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