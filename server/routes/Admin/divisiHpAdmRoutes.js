const express = require('express');
const router = express.Router();
const divisiHpAdmController = require('../../controllers/Admin/divisiHpAdmController');

// Rute untuk mendapatkan data divisi_hp
router.get('/', divisiHpAdmController.getDivisiHpAdm);

// Rute untuk menambah komentar divisi_hp
router.post('/', divisiHpAdmController.addKomentarDivisiHpAdm);

// Rute untuk menambah range kinerja divisi_hp
router.put('/:id', divisiHpAdmController.addRangeKinerjaDivisiHpAdm);

// Rute untuk menambah komentar kinerja divisi_hp
router.put('/kinerja/:userId', divisiHpAdmController.addKomentarKinerjaDivisiHpAdm);

module.exports = router;
