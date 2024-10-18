const express = require('express');
const router = express.Router();
const sekretarisAdmController = require('../../controllers/Admin/sekretarisAdmController');

router.get('/', sekretarisAdmController.getSekretarisAdm);
router.post('/', sekretarisAdmController.addKomentarSekretarisAdm);
router.put('/:id', sekretarisAdmController.addRangeKinerjaSekretarisAdm);
router.put('/kinerja-sekretaris/:userId', sekretarisAdmController.addKomentarKinerjaSekretarisAdm);

module.exports = router;
