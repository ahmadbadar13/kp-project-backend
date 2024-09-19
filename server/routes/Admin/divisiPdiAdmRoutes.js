const express = require('express');
const router = express.Router();
const divisiPdiAdmController = require('../../controllers/Admin/divisiPdiAdmController');

router.get('/', divisiPdiAdmController.getDivisiPdiAdm);
router.post('/', divisiPdiAdmController.addKomentarDivisiPdiAdm);

module.exports = router;
