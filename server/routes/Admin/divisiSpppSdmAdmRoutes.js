const express = require('express');
const router = express.Router();
const divisiSpppSdmAdmController = require('../../controllers/Admin/divisiSpppSdmAdmController');

router.get('/', divisiSpppSdmAdmController.getDivisiSpppSdmAdm);
router.post('/', divisiSpppSdmAdmController.addKomentarDivisiSpppSdmAdm);

module.exports = router;