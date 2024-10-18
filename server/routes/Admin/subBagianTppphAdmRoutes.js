const express = require('express');
const router = express.Router();
const subBagianTppphAdmController = require('../../controllers/Admin/subBagianTppphAdmController');

router.get('/', subBagianTppphAdmController.getSubBagianTppphAdm);
router.post('/', subBagianTppphAdmController.addKomentarSubBagianTppphAdm);
router.put('/:id', subBagianTppphAdmController.addRangeKinerjaSbTppphAdm);
router.put('/kinerja-sb-tppph/:userId', subBagianTppphAdmController.addKomentarKinerjaSbTppphAdm);

module.exports = router;
