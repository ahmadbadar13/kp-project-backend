const db = require('../../config/db');

//Create Data Divisi TP Operator
exports.addDivisiTpOp = (req, res) => {
  const { name } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  // Query untuk mengecek jumlah data di dalam tabel
  const checkQuery = 'SELECT COUNT(*) AS total FROM divisi_tp';
  
  db.query(checkQuery, (err, result) => {
    if (err) {
      console.error('Error checking data in divisi_tp:', err.message);
      return res.status(500).json({ error: err.message });
    }

    const totalUsers = result[0].total;

    // Jika sudah ada 1 data, kembalikan error
    if (totalUsers >= 1) {
      return res.status(400).json({ success: false, message: 'Maksimal hanya bisa menambahkan 1 data!' });
    }    

    // Jika belum ada data, lakukan penambahan
    const insertQuery = 'INSERT INTO divisi_tp (nama_div_tp, foto_div_tp, komentar_div_tp) VALUES (?, ?, ?)';
    db.query(insertQuery, [name, photo, ''], (err) => {
      if (err) {
        console.error('Error inserting data into divisi_tp:', err.message);
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ success: true, message: 'User added successfully' });
    });
  });
};

//Read Data Divisi TP Operator
exports.getDivisiTpOp = (req, res) => {
  const query = 'SELECT * FROM divisi_tp';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
}

//Update Data Divisi TP Operator
exports.updtDivisiTpOp = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  const getUserQuery = 'SELECT * FROM divisi_tp WHERE id = ?';
  db.query(getUserQuery, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'User not found' });

    const updatedName = name || results[0].nama_div_tp;
    const updatedPhoto = photo || results[0].foto_div_tp;

    const updateUserQuery = 'UPDATE divisi_tp SET nama_div_tp = ?, foto_div_tp = ? WHERE id = ?';
    db.query(updateUserQuery, [updatedName, updatedPhoto, id], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ success: true, message: 'User updated successfully' });
    });
  });
}

//Delete Divisi TP Operator
exports.delDivisiTpOp = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM divisi_tp WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  });
}

//Read Komentar Divisi TP Operator
exports.getKomentarDivisiTpOp = (req, res) => {
  const id = req.params.id;

  // Validasi ID
  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const query = 'SELECT komentar_div_tp FROM divisi_tp WHERE id = ?';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.json({ komentar: result[0].komentar_div_tp });
  });
}

//Delete Komentar Divisi TP
exports.delKomentarDivisiTpOp = (req, res) => {
  const id = req.params.id;

  // Validasi ID
  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const query = 'UPDATE divisi_tp SET komentar_div_tp = NULL WHERE id = ?';

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

// Mengirim data divisi TP ke tabel periode_divisi
exports.addPeriodeDivisiTp = (req, res) => {
  const { id_divisi_tp, periode_awal, periode_akhir } = req.body;

  // Validasi input
  if (!id_divisi_tp || !periode_awal || !periode_akhir) {
    return res.status(400).json({ success: false, message: 'Semua field harus diisi' });
  }

  // Query untuk memasukkan data divisi TP ke dalam tabel periode_divisi
  const insertQuery = `
    INSERT INTO periode_divisi (id_divisi_tp, periode_awal, periode_akhir)
    VALUES (?, ?, ?)
  `;
  
  db.query(insertQuery, [id_divisi_tp, periode_awal, periode_akhir], (err) => {
    if (err) {
      console.error('Error inserting data into periode_divisi:', err.message);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ success: true, message: 'Periode divisi TP berhasil ditambahkan' });
  });
};