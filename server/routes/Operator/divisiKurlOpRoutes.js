const express = require('express');
const divisiKurlOpController = require('../../controllers/Operator/divisiKurlOpController');
const { upload } = require('../../index');
const router = express.Router();

// Route untuk create data anggota
router.post('/', upload.single('photo'), divisiKurlOpController.addDivisiKurlOp);

// Route untuk read data anggota
router.get('/', divisiKurlOpController.getDivisiKurlOp);

// Route untuk update data anggota
router.put('/:id', upload.single('photo'), divisiKurlOpController.updtDivisiKurlOp);

// Route untuk delete data anggota
router.delete('/anggota/:id', divisiKurlOpController.delDivisiKurlOp);

// Route untuk mengambil komentar berdasarkan ID divisi
router.get('/:id', divisiKurlOpController.getKomentarDivisiKurlOp);

// Route untuk menghapus komentar berdasarkan ID divisi
router.delete('/:id', divisiKurlOpController.delKomentarDivisiKurlOp);

module.exports = router;