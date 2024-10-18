const express = require('express');
const router = express.Router();
const subBagianPdiAdmController = require('../../controllers/Admin/subBagianPdiAdmController');

router.get('/', subBagianPdiAdmController.getSubBagianPdiAdm);
router.post('/', subBagianPdiAdmController.addKomentarSubBagianPdiAdm);
router.put('/:id', subBagianPdiAdmController.addRangeKinerjaSbPdiAdm);
router.put('/kinerja-sb-pdi/:userId', subBagianPdiAdmController.addKomentarKinerjaSbPdiAdm);

module.exports = router;
