const db = require('../../config/db');

//Create Data Divisi KURL Operator
exports.addDivisiKurlOp = (req, res) => {
  const { name } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  // Query untuk mengecek jumlah data di dalam tabel
  const checkQuery = 'SELECT COUNT(*) AS total FROM divisi_kurl';
  
  db.query(checkQuery, (err, result) => {
    if (err) {
      console.error('Error checking data in divisi_kurl:', err.message);
      return res.status(500).json({ error: err.message });
    }

    const totalUsers = result[0].total;

    // Jika sudah ada 1 data, kembalikan error
    if (totalUsers >= 1) {
      return res.status(400).json({ success: false, message: 'Maksimal hanya bisa menambahkan 1 data!' });
    }    

    // Jika belum ada data, lakukan penambahan
    const insertQuery = 'INSERT INTO divisi_kurl (nama_div_kurl, foto_div_kurl, komentar_div_kurl) VALUES (?, ?, ?)';
    db.query(insertQuery, [name, photo, ''], (err) => {
      if (err) {
        console.error('Error inserting data into divisi_kurl:', err.message);
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ success: true, message: 'User added successfully' });
    });
  });
};

//Read Data Divisi KURL Operator
exports.getDivisiKurlOp = (req, res) => {
  const query = 'SELECT * FROM divisi_kurl';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
}

//Update Data Divisi KURL Operator
exports.updtDivisiKurlOp = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  const getUserQuery = 'SELECT * FROM divisi_kurl WHERE id = ?';
  db.query(getUserQuery, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'User not found' });

    const updatedName = name || results[0].nama_div_kurl;
    const updatedPhoto = photo || results[0].foto_div_kurl;

    const updateUserQuery = 'UPDATE divisi_kurl SET nama_div_kurl = ?, foto_div_kurl = ? WHERE id = ?';
    db.query(updateUserQuery, [updatedName, updatedPhoto, id], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ success: true, message: 'User updated successfully' });
    });
  });
}

//Delete Divisi KURL Operator
exports.delDivisiKurlOp = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM divisi_kurl WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  });
}

//Read Komentar Divisi KURL Operator
exports.getKomentarDivisiKurlOp = (req, res) => {
  const id = req.params.id;

  // Validasi ID
  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const query = 'SELECT komentar_div_kurl FROM divisi_kurl WHERE id = ?';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.json({ komentar: result[0].komentar_div_kurl });
  });
}

//Delete Komentar Divisi KURL
exports.delKomentarDivisiKurlOp = (req, res) => {
  const id = req.params.id;

  // Validasi ID
  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const query = 'UPDATE divisi_kurl SET komentar_div_kurl = NULL WHERE id = ?';

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

// Mengirim data divisi KURL ke tabel periode_divisi
exports.addPeriodeDivisiKurl = (req, res) => {
  const { id_divisi_kurl, periode_awal, periode_akhir } = req.body;

  // Validasi input
  if (!id_divisi_kurl || !periode_awal || !periode_akhir) {
    return res.status(400).json({ success: false, message: 'Semua field harus diisi' });
  }

  // Query untuk memasukkan data divisi KURL ke dalam tabel periode_divisi
  const insertQuery = `
    INSERT INTO periode_divisi (id_divisi_kurl, periode_awal, periode_akhir)
    VALUES (?, ?, ?)
  `;
  
  db.query(insertQuery, [id_divisi_kurl, periode_awal, periode_akhir], (err) => {
    if (err) {
      console.error('Error inserting data into periode_divisi:', err.message);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ success: true, message: 'Periode divisi KURL berhasil ditambahkan' });
  });
};

