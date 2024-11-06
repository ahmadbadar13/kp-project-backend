const StrukturOrganisasi = require('../models/strukturOrganisasiModel');

class StrukturOrganisasiController {
    static async getStrukturOrganisasi(req, res) {
        try {
            const results = await Promise.all([
                new Promise((resolve, reject) => StrukturOrganisasi.getKetua((err, result) => (err ? reject(err) : resolve(result)))),
                new Promise((resolve, reject) => StrukturOrganisasi.getAnggotaDivisi((err, result) => (err ? reject(err) : resolve(result)))),
                new Promise((resolve, reject) => StrukturOrganisasi.getSekretaris((err, result) => (err ? reject(err) : resolve(result)))),
                new Promise((resolve, reject) => StrukturOrganisasi.getSubBagian((err, result) => (err ? reject(err) : resolve(result))))
            ]);
            
            const mergedResults = [].concat(...results);
            res.json(mergedResults);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = StrukturOrganisasiController;
