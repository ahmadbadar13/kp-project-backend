const express = require('express');
const router = express.Router();
const divisiTpAdmController = require('../../controllers/Admin/divisiTpAdmController');

router.get('/', divisiTpAdmController.getDivisiTpAdm);
router.post('/', divisiTpAdmController.addKomentarDivisiTpAdm);
router.put('/:id', divisiTpAdmController.addRangeKinerjaDivisiTpAdm);
router.put('/kinerja-div-tp/:userId', divisiTpAdmController.addKomentarKinerjaDivisiTpAdm);

module.exports = router;