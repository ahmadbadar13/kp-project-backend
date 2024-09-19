const express = require('express');
const router = express.Router();
const divisiKurlAdmController = require('../../controllers/Admin/divisiKurlAdmController');

router.get('/', divisiKurlAdmController.getDivisiKurlAdm);
router.post('/', divisiKurlAdmController.addKomentarDivisiKurlAdm);

module.exports = router;
