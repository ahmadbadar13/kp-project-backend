const express = require('express');
const router = express.Router();
const divisiPdiAdmController = require('../../controllers/Admin/divisiPdiAdmController');

router.get('/', divisiPdiAdmController.getDivisiPdiAdm);
router.post('/', divisiPdiAdmController.addKomentarDivisiPdiAdm);
router.put('/:id', divisiPdiAdmController.addRangeKinerjaDivisiPdiAdm);
router.put('/kinerja-div-pdi/:userId', divisiPdiAdmController.addKomentarKinerjaDivisiPdiAdm);

module.exports = router;
