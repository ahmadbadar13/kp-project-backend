const express = require('express');
const router = express.Router();
const subBagianKulAdmController = require('../../controllers/Admin/subBagianKulAdmController');

router.get('/', subBagianKulAdmController.getSubBagianKulAdm);
router.post('/', subBagianKulAdmController.addKomentarSubBagianKulAdm);
router.put('/:id', subBagianKulAdmController.addRangeKinerjaSbKulAdm);
router.put('/kinerja-sb-kul/:userId', subBagianKulAdmController.addKomentarKinerjaSbKulAdm);

module.exports = router;
