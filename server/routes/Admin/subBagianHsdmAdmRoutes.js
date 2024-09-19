const express = require('express');
const router = express.Router();
const subBagianHsdmAdmController = require('../../controllers/Admin/subBagianHsdmAdmController');

router.get('/', subBagianHsdmAdmController.getSubBagianHsdmAdm);
router.post('/', subBagianHsdmAdmController.addKomentarSubBagianHsdmAdm);

module.exports = router;
