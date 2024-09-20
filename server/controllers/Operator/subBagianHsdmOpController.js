const db = require('../../config/db');

//Create Data Sub Bagian HSDM Operator
exports.addSubBagianHsdmOp = (req, res) => {
  const { name, nip, position } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  if (!name || !nip || !position) {
    return res.status(400).json({ error: 'Nama, NIP, dan posisi diperlukan' });
  }

  const query = 'INSERT INTO sub_bagian_hsdm (nama_sb_hsdm, nip_sb_hsdm, posisi_sb_hsdm, foto_sb_hsdm) VALUES (?, ?, ?, ?)';

  db.query(query, [name, nip, position, photo], (err, results) => {
    if (err) {
      console.error('Error inserting data into sub_bagian_hsdm:', err.message);
      return res.status(500).json({ error: 'Gagal menambahkan data. Silakan coba lagi.' });
    }
    res.status(201).json({ success: true, message: 'User added successfully' });
  });
};

//Read Data Sub Bagian HSDM Operator
exports.getSubBagianHsdmOp = (req, res) => {
  const query = 'SELECT * FROM sub_bagian_hsdm';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
}

//Update Data Sub Bagian HSDM Operator
exports.updtSubBagianHsdmOp = (req, res) => {
  const { id } = req.params;
  const { name, nip, position } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  // Query untuk mendapatkan data anggota yang ada
  const getUserQuery = 'SELECT * FROM sub_bagian_hsdm WHERE id = ?';
  db.query(getUserQuery, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'User not found' });

    // Data yang akan diperbarui
    const updatedName = name || results[0].nama_sb_hsdm;
    const updatedNip = nip || results[0].nip_sb_hsdm;
    const updatedPosition = position || results[0].posisi_sb_hsdm;
    const updatedPhoto = photo || results[0].foto_sb_hsdm;

    // Query untuk memperbarui data anggota
    const updateUserQuery = 'UPDATE sub_bagian_hsdm SET nama_sb_hsdm = ?, nip_sb_hsdm = ?, posisi_sb_hsdm = ?, foto_sb_hsdm = ? WHERE id = ?';
    db.query(updateUserQuery, [updatedName, updatedNip, updatedPosition, updatedPhoto, id], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ success: true, message: 'User updated successfully' });
    });
  });
}

//Delete Sub Bagian HSDM Operator
exports.delSubBagianHsdmOp = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM sub_bagian_hsdm WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  });
}

//Read Komentar Sub Bagian HSDM Operator
exports.getKomentarSubBagianHsdmOp = (req, res) => {
  const id = req.params.id;

  // Validasi ID
  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const query = 'SELECT komentar_sb_hsdm FROM sub_bagian_hsdm WHERE id = ?';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.json({ komentar: result[0].komentar_sb_hsdm });
  });
}

//Delete Komentar Sub Bagian HSDM
exports.delKomentarSubBagianHsdmOp = (req, res) => {
  const id = req.params.id;

  // Validasi ID
  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const query = 'UPDATE sub_bagian_hsdm SET komentar_sb_hsdm = NULL WHERE id = ?';

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