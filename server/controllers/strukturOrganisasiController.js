const StrukturOrganisasiModel = require('../models/strukturOrganisasiModel');

const getStrukturOrganisasi = async (req, res) => {
    try {
        const results = await Promise.all([
            StrukturOrganisasiModel.getKetua(),
            StrukturOrganisasiModel.getAnggotaDivisi(),
            StrukturOrganisasiModel.getSekretaris(),
            StrukturOrganisasiModel.getSubBagian()
        ]);

        const mergedResults = [].concat(...results);
        res.json(mergedResults);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getStrukturOrganisasi
};
