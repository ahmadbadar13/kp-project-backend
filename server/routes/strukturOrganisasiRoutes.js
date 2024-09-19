const express = require('express');
const router = express.Router();
const strukturOrganisasiController = require('../controllers/strukturOrganisasiController');

router.get('/', strukturOrganisasiController.getStrukturOrganisasi);

module.exports = router;
