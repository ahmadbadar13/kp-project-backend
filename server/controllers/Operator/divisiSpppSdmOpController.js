const db = require('../../config/db');

//Create Data Divisi SPPP_SDM Operator
exports.addDivisiSpppSdmOp = (req, res) => {
  const { name } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  // Query untuk mengecek jumlah data di dalam tabel
  const checkQuery = 'SELECT COUNT(*) AS total FROM divisi_sppp_sdm';
  
  db.query(checkQuery, (err, result) => {
    if (err) {
      console.error('Error checking data in divisi_sppp_sdm:', err.message);
      return res.status(500).json({ error: err.message });
    }

    const totalUsers = result[0].total;

    // Jika sudah ada 1 data, kembalikan error
    if (totalUsers >= 1) {
      return res.status(400).json({ success: false, message: 'Maksimal hanya bisa menambahkan 1 data!' });
    }    

    // Jika belum ada data, lakukan penambahan
    const insertQuery = 'INSERT INTO divisi_sppp_sdm (nama_div_sppp_sdm, foto_div_sppp_sdm, komentar_div_sppp_sdm) VALUES (?, ?, ?)';
    db.query(insertQuery, [name, photo, ''], (err) => {
      if (err) {
        console.error('Error inserting data into divisi__sppp_sdm:', err.message);
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ success: true, message: 'User added successfully' });
    });
  });
};

//Read Data Divisi SPPP_SDM Operator
exports.getDivisiSpppSdmOp = (req, res) => {
  const query = 'SELECT * FROM divisi_sppp_sdm';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
}

//Update Data Divisi SPPP_SDM Operator
exports.updtDivisiSpppSdmOp = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  const getUserQuery = 'SELECT * FROM divisi_sppp_sdm WHERE id = ?';
  db.query(getUserQuery, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'User not found' });

    const updatedName = name || results[0].nama_div_sppp_sdm;
    const updatedPhoto = photo || results[0].foto_div_sppp_sdm;

    const updateUserQuery = 'UPDATE divisi_sppp_sdm SET nama_div_sppp_sdm = ?, foto_div_sppp_sdm = ? WHERE id = ?';
    db.query(updateUserQuery, [updatedName, updatedPhoto, id], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ success: true, message: 'User updated successfully' });
    });
  });
}

//Delete Divisi SPPP_SDM Operator
exports.delDivisiSpppSdmOp = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM divisi_sppp_sdm WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  });
}

//Read Komentar Divisi SPPP_SDM Operator
exports.getKomentarDivisiSpppSdmOp = (req, res) => {
  const id = req.params.id;

  // Validasi ID
  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const query = 'SELECT komentar_div_sppp_sdm FROM divisi_sppp_sdm WHERE id = ?';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.json({ komentar: result[0].komentar_div_sppp_sdm });
  });
}

//Delete Komentar Divisi SPPP_SDM
exports.delKomentarDivisiSpppSdmOp = (req, res) => {
  const id = req.params.id;

  // Validasi ID
  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const query = 'UPDATE divisi_sppp_sdm SET komentar_div_sppp_sdm = NULL WHERE id = ?';

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