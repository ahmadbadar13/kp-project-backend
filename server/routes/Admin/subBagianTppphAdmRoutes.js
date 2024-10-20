const express = require('express');
const router = express.Router();
const subBagianTppphAdmController = require('../../controllers/Admin/subBagianTppphAdmController');

router.get('/', subBagianTppphAdmController.getSubBagianTppphAdm);
router.post('/', subBagianTppphAdmController.addKomentarSubBagianTppphAdm);

module.exports = router;