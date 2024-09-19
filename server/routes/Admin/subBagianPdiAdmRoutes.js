const express = require('express');
const router = express.Router();
const subBagianPdiAdmController = require('../../controllers/Admin/subBagianPdiAdmController');

router.get('/', subBagianPdiAdmController.getSubBagianPdiAdm);
router.post('/', subBagianPdiAdmController.addKomentarSubBagianPdiAdm);

module.exports = router;
