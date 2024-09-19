const express = require('express');
const router = express.Router();
const divisiTpAdmController = require('../../controllers/Admin/divisiTpAdmController');

router.get('/', divisiTpAdmController.getDivisiTpAdm);
router.post('/', divisiTpAdmController.addKomentarDivisiTpAdm);

module.exports = router;