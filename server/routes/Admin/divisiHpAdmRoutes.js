const express = require('express');
const router = express.Router();
const divisiHpAdmController = require('../../controllers/Admin/divisiHpAdmController');

router.get('/', divisiHpAdmController.getDivisiHpAdm);
router.post('/', divisiHpAdmController.addKomentarDivisiHpAdm);

module.exports = router;