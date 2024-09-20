const express = require('express');
const divisiSpppSdmOpController = require('../../controllers/Operator/divisiSpppSdmOpController');
const { upload } = require('../../index');
const router = express.Router();

// Route untuk create data anggota
router.post('/', upload.single('photo'), divisiSpppSdmOpController.addDivisiSpppSdmOp);

// Route untuk read data anggota
router.get('/', divisiSpppSdmOpController.getDivisiSpppSdmOp);

// Route untuk update data anggota
router.put('/:id', upload.single('photo'), divisiSpppSdmOpController.updtDivisiSpppSdmOp);

// Route untuk delete data anggota
router.delete('/anggota/:id', divisiSpppSdmOpController.delDivisiSpppSdmOp);

// Route untuk mengambil komentar berdasarkan ID divisi
router.get('/:id', divisiSpppSdmOpController.getKomentarDivisiSpppSdmOp);

// Route untuk menghapus komentar berdasarkan ID divisi
router.delete('/:id', divisiSpppSdmOpController.delKomentarDivisiSpppSdmOp);

module.exports = router;