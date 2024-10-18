const express = require('express');
const router = express.Router();
const divisiSpppSdmAdmController = require('../../controllers/Admin/divisiSpppSdmAdmController');

router.get('/', divisiSpppSdmAdmController.getDivisiSpppSdmAdm);
router.post('/', divisiSpppSdmAdmController.addKomentarDivisiSpppSdmAdm);
router.put('/:id', divisiSpppSdmAdmController.addRangeKinerjaDivisiSpppSdmAdm);
router.put('/kinerja-div-sppp_sdm/:userId', divisiSpppSdmAdmController.addKomentarKinerjaDivisiSpppSdmAdm);

module.exports = router;