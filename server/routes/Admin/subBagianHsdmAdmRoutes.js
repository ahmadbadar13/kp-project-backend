const express = require('express');
const router = express.Router();
const subBagianHsdmAdmController = require('../../controllers/Admin/subBagianHsdmAdmController');

router.get('/', subBagianHsdmAdmController.getSubBagianHsdmAdm);
router.post('/', subBagianHsdmAdmController.addKomentarSubBagianHsdmAdm);
router.put('/:id', subBagianHsdmAdmController.addRangeKinerjaSbHsdmAdm);
router.put('/kinerja-sb-hsdm/:userId', subBagianHsdmAdmController.addKomentarKinerjaSbHsdmAdm);

module.exports = router;
