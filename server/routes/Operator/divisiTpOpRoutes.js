const express = require('express');
const divisiTpOpController = require('../../controllers/Operator/divisiTpOpController');
const { upload } = require('../../index');
const router = express.Router();

// Route untuk create data anggota
router.post('/', upload.single('photo'), divisiTpOpController.addDivisiTpOp);

// Route untuk read data anggota
router.get('/', divisiTpOpController.getDivisiTpOp);

// Route untuk update data anggota
router.put('/:id', upload.single('photo'), divisiTpOpController.updtDivisiTpOp);

// Route untuk delete data anggota
router.delete('/anggota/:id', divisiTpOpController.delDivisiTpOp);

// Route untuk mengambil komentar berdasarkan ID divisi
router.get('/:id', divisiTpOpController.getKomentarDivisiTpOp);

// Route untuk menghapus komentar berdasarkan ID divisi
router.delete('/:id', divisiTpOpController.delKomentarDivisiTpOp);

router.post('/add-periode', divisiTpOpController.addPeriodeDivisiTp);

module.exports = router;