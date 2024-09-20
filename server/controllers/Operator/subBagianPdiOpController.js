const db = require('../../config/db');

//Create Data Sub Bagian PDI Operator
exports.addSubBagianPdiOp = (req, res) => {
  const { name, nip, position } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  if (!name || !nip || !position) {
    return res.status(400).json({ error: 'Nama, NIP, dan posisi diperlukan' });
  }

  const query = 'INSERT INTO sub_bagian_pdi (nama_sb_pdi, nip_sb_pdi, posisi_sb_pdi, foto_sb_pdi) VALUES (?, ?, ?, ?)';

  db.query(query, [name, nip, position, photo], (err, results) => {
    if (err) {
      console.error('Error inserting data into sub_bagian_pdi:', err.message);
      return res.status(500).json({ error: 'Gagal menambahkan data. Silakan coba lagi.' });
    }
    res.status(201).json({ success: true, message: 'User added successfully' });
  });
};

//Read Data Sub Bagian PDI Operator
exports.getSubBagianPdiOp = (req, res) => {
  const query = 'SELECT * FROM sub_bagian_pdi';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
}

//Update Data Sub Bagian PDI Operator
exports.updtSubBagianPdiOp = (req, res) => {
  const { id } = req.params;
  const { name, nip, position } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  // Query untuk mendapatkan data anggota yang ada
  const getUserQuery = 'SELECT * FROM sub_bagian_pdi WHERE id = ?';
  db.query(getUserQuery, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'User not found' });

    // Data yang akan diperbarui
    const updatedName = name || results[0].nama_sb_pdi;
    const updatedNip = nip || results[0].nip_sb_pdi;
    const updatedPosition = position || results[0].posisi_sb_pdi;
    const updatedPhoto = photo || results[0].foto_sb_pdi;

    // Query untuk memperbarui data anggota
    const updateUserQuery = 'UPDATE sub_bagian_pdi SET nama_sb_pdi = ?, nip_sb_pdi = ?, posisi_sb_pdi = ?, foto_sb_pdi = ? WHERE id = ?';
    db.query(updateUserQuery, [updatedName, updatedNip, updatedPosition, updatedPhoto, id], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ success: true, message: 'User updated successfully' });
    });
  });
}

//Delete Sub Bagian PDI Operator
exports.delSubBagianPdiOp = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM sub_bagian_pdi WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  });
}

//Read Komentar Sub Bagian PDI Operator
exports.getKomentarSubBagianPdiOp = (req, res) => {
  const id = req.params.id;

  // Validasi ID
  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const query = 'SELECT komentar_sb_pdi FROM sub_bagian_pdi WHERE id = ?';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.json({ komentar: result[0].komentar_sb_pdi });
  });
}

//Delete Komentar Sub Bagian PDI
exports.delKomentarSubBagianPdiOp = (req, res) => {
  const id = req.params.id;

  // Validasi ID
  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const query = 'UPDATE sub_bagian_pdi SET komentar_sb_pdi = NULL WHERE id = ?';

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