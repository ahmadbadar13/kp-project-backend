const express = require('express');
const divisiPdiOpController = require('../../controllers/Operator/divisiPdiOpController');
const { upload } = require('../../index');
const router = express.Router();

// Route untuk create data anggota
router.post('/', upload.single('photo'), divisiPdiOpController.addDivisiPdiOp);

// Route untuk read data anggota
router.get('/', divisiPdiOpController.getDivisiPdiOp);

// Route untuk update data anggota
router.put('/:id', upload.single('photo'), divisiPdiOpController.updtDivisiPdiOp);

// Route untuk delete data anggota
router.delete('/anggota/:id', divisiPdiOpController.delDivisiPdiOp);

// Route untuk mengambil komentar berdasarkan ID divisi
router.get('/:id', divisiPdiOpController.getKomentarDivisiPdiOp);

// Route untuk menghapus komentar berdasarkan ID divisi
router.delete('/:id', divisiPdiOpController.delKomentarDivisiPdiOp);

module.exports = router;