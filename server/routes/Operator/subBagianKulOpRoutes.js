const express = require('express');
const subBagianKulOpController = require('../../controllers/Operator/subBagianKulOpController');
const { upload } = require('../../index');
const router = express.Router();

// Route untuk create data anggota
router.post('/', upload.single('photo'), subBagianKulOpController.addSubBagianKulOp);

// Route untuk read data anggota
router.get('/', subBagianKulOpController.getSubBagianKulOp);

// Route untuk update data anggota
router.put('/:id', upload.single('photo'), subBagianKulOpController.updtSubBagianKulOp);

// Route untuk delete data anggota
router.delete('/anggota/:id', subBagianKulOpController.delSubBagianKulOp);

// Route untuk mengambil komentar berdasarkan ID divisi
router.get('/:id', subBagianKulOpController.getKomentarSubBagianKulOp);

// Route untuk menghapus komentar berdasarkan ID divisi
router.delete('/:id', subBagianKulOpController.delKomentarSubBagianKulOp);

module.exports = router;