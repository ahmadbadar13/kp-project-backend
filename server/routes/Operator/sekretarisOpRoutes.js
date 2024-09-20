const express = require('express');
const sekretarisOpController = require('../../controllers/Operator/sekretarisOpController');
const { upload } = require('../../index');
const router = express.Router();

// Route untuk create data anggota
router.post('/', upload.single('photo'), sekretarisOpController.addSekretarisOp);

// Route untuk read data anggota
router.get('/', sekretarisOpController.getSekretarisOp);

// Route untuk update data anggota
router.put('/:id', upload.single('photo'), sekretarisOpController.updtSekretarisOp);

// Route untuk delete data anggota
router.delete('/anggota/:id', sekretarisOpController.delSekretarisOp);

// Route untuk mengambil komentar berdasarkan ID divisi
router.get('/:id', sekretarisOpController.getKomentarSekretarisOp);

// Route untuk menghapus komentar berdasarkan ID divisi
router.delete('/:id', sekretarisOpController.delKomentarSekretarisOp);

module.exports = router;