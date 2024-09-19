const express = require('express');
const divisiHpOpController = require('../../controllers/Operator/divisiHpOpController');
const { upload } = require('../../index');
const router = express.Router();

// Route untuk create data anggota
router.post('/', upload.single('photo'), divisiHpOpController.addDivisiHpOp);

// Route untuk read data anggota
router.get('/', divisiHpOpController.getDivisiHpOp);

// Route untuk update data anggota
router.put('/:id', upload.single('photo'), divisiHpOpController.updtDivisiHpOp);

// Route untuk delete data anggota
router.delete('/:id', divisiHpOpController.delDivisiHpOp);

// Route untuk mengambil komentar berdasarkan ID divisi
router.get('/:id', divisiHpOpController.getKomentarDivisiHpOp);

// Route untuk menghapus komentar berdasarkan ID divisi
router.delete('/:id', divisiHpOpController.delKomentarDivisiHpOp);

module.exports = router;