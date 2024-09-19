const db = require('../config/db');

exports.getStrukturOrganisasi = (req, res) => {
    const queries = [
        'SELECT foto_div_kurl AS foto, nama_div_kurl AS nama, "Ketua" AS peran FROM divisi_kurl LIMIT 1',
        'SELECT foto_div_tp AS foto, nama_div_tp AS nama, "Anggota" AS peran FROM divisi_tp LIMIT 1',
        'SELECT foto_div_pdi AS foto, nama_div_pdi AS nama, "Anggota" AS peran FROM divisi_pdi LIMIT 1',
        'SELECT foto_div_hp AS foto, nama_div_hp AS nama, "Anggota" AS peran FROM divisi_hp LIMIT 1',
        'SELECT foto_div_sppp_sdm AS foto, nama_div_sppp_sdm AS nama, "Anggota" AS peran FROM divisi_sppp_sdm LIMIT 1',
    ];

    Promise.all(queries.map((query) => new Promise((resolve, reject) => {
        db.query(query, (error, results) => {
        if (error) return reject(error);
        resolve(results[0]);
        });
    })))
    .then(results => res.json(results))
    .catch(err => res.status(500).json({ error: err.message }));
};
