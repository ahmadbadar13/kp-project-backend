const express = require('express');
const router = express.Router();
const subBagianKulAdmController = require('../../controllers/Admin/subBagianKulAdmController');

router.get('/', subBagianKulAdmController.getSubBagianKulAdm);
router.post('/', subBagianKulAdmController.addKomentarSubBagianKulAdm);

module.exports = router;
