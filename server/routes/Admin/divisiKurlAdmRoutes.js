const express = require('express');
const router = express.Router();
const divisiKurlAdmController = require('../../controllers/Admin/divisiKurlAdmController');

router.get('/', divisiKurlAdmController.getDivisiKurlAdm);
router.post('/', divisiKurlAdmController.addKomentarDivisiKurlAdm);
router.put('/:id', divisiKurlAdmController.addRangeKinerjaDivisiKurlAdm);
router.put('/kinerja-div-kurl/:userId', divisiKurlAdmController.addKomentarKinerjaDivisiKurlAdm);

module.exports = router;
