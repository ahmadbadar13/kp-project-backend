const express = require('express');
const router = express.Router();
const sekretarisAdmController = require('../../controllers/Admin/sekretarisAdmController');

router.get('/', sekretarisAdmController.getSekretarisAdm);
router.post('/', sekretarisAdmController.addKomentarSekretarisAdm);

module.exports = router;
