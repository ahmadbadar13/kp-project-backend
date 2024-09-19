const express = require('express');
const router = express.Router();
const divisiHpOpController = require('../../controllers/Operator/divisiHpOpController');

router.post('/', divisiHpOpController.addDivisiHpOp);
router.get('/', divisiHpOpController.getDivisiHpOp);
router.put('/', divisiHpOpController.updtDivisiHpOp);
router.delete('/', divisiHpOpController.delDivisiHpOp);
router.get('/', divisiHpOpController.getKomentarDivisiHpOp);
router.delete('/', divisiHpOpController.delKomentarDivisiHpOp);

module.exports = router;