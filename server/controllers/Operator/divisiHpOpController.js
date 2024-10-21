const db = require('../../config/db');

//Create Data Divisi HP Operator
exports.addDivisiHpOp = (req, res) => {
  const { name } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  // Query untuk mengecek jumlah data di dalam tabel
  const checkQuery = 'SELECT COUNT(*) AS total FROM divisi_hp';
  
  db.query(checkQuery, (err, result) => {
    if (err) {
      console.error('Error checking data in divisi_hp:', err.message);
      return res.status(500).json({ error: err.message });
    }

    const totalUsers = result[0].total;

    // Jika sudah ada 1 data, kembalikan error
    if (totalUsers >= 1) {
      return res.status(400).json({ success: false, message: 'Maksimal hanya bisa menambahkan 1 data!' });
    }    

    // Jika belum ada data, lakukan penambahan
    const insertQuery = 'INSERT INTO divisi_hp (nama_div_hp, foto_div_hp, komentar_div_hp) VALUES (?, ?, ?)';
    db.query(insertQuery, [name, photo, ''], (err) => {
      if (err) {
        console.error('Error inserting data into divisi_hp:', err.message);
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ success: true, message: 'User added successfully' });
    });
  });
};

//Read Data Divisi HP Operator
exports.getDivisiHpOp = (req, res) => {
  const query = 'SELECT * FROM divisi_hp';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
}

//Update Data Divisi HP Operator
exports.updtDivisiHpOp = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  const getUserQuery = 'SELECT * FROM divisi_hp WHERE id = ?';
  db.query(getUserQuery, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'User not found' });

    const updatedName = name || results[0].nama_div_hp;
    const updatedPhoto = photo || results[0].foto_div_hp;

    const updateUserQuery = 'UPDATE divisi_hp SET nama_div_hp = ?, foto_div_hp = ? WHERE id = ?';
    db.query(updateUserQuery, [updatedName, updatedPhoto, id], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ success: true, message: 'User updated successfully' });
    });
  });
}

//Delete Divisi HP Operator
exports.delDivisiHpOp = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM divisi_hp WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  });
}

//Read Komentar Divisi HP Operator
exports.getKomentarDivisiHpOp = (req, res) => {
  const id = req.params.id;

  // Validasi ID
  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const query = 'SELECT komentar_div_hp FROM divisi_hp WHERE id = ?';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.json({ komentar: result[0].komentar_div_hp });
  });
}

//Delete Komentar Divisi HP
exports.delKomentarDivisiHpOp = (req, res) => {
  const id = req.params.id;

  // Validasi ID
  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const query = 'UPDATE divisi_hp SET komentar_div_hp = NULL WHERE id = ?';

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

// Mengirim data divisi HP ke tabel periode_divisi
exports.addPeriodeDivisiHp = (req, res) => {
  const { id_divisi_hp, periode_awal, periode_akhir } = req.body;

  // Validasi input
  if (!id_divisi_hp || !periode_awal || !periode_akhir) {
    return res.status(400).json({ success: false, message: 'Semua field harus diisi' });
  }

  // Query untuk memasukkan data divisi HP ke dalam tabel periode_divisi
  const insertQuery = `
    INSERT INTO periode_divisi (id_divisi_hp, periode_awal, periode_akhir)
    VALUES (?, ?, ?)
  `;
  
  db.query(insertQuery, [id_divisi_hp, periode_awal, periode_akhir], (err) => {
    if (err) {
      console.error('Error inserting data into periode_divisi:', err.message);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ success: true, message: 'Periode divisi HP berhasil ditambahkan' });
  });
};

// Get semua data dari tabel periode_divisi
exports.getPeriodeDivisi = (req, res) => {
  const query = `
    SELECT pd.id AS id_periode, 
          pd.id_divisi_hp,
          pd.periode_awal, 
          pd.periode_akhir,
          dh.nama_div_hp
    FROM periode_divisi pd
    LEFT JOIN divisi_hp dh ON pd.id_divisi_hp = dh.id
`;


db.query(query, (error, results) => {
  if (error) {
      return res.status(500).json({ message: 'Internal Server Error', error });
  }
    console.log('Hasil Query:', results);
    res.status(200).json(results);
  });
};