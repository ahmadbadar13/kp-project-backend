const express = require('express');
const router = express.Router();
const divisiHpAdmController = require('../../controllers/Admin/divisiHpAdmController');

router.get('/', divisiHpAdmController.getDivisiHpAdm);
router.post('/', divisiHpAdmController.addKomentarDivisiHpAdm);
router.put('/:id', divisiHpAdmController.addRangeKinerjaDivisiHpAdm);
router.put('/kinerja-div-hp/:userId', divisiHpAdmController.addKomentarKinerjaDivisiHpAdm);

module.exports = router;
