const express = require('express');
const subBagianTppphOpController = require('../../controllers/Operator/subBagianTppphOpController');
const { upload } = require('../../index');
const router = express.Router();

// Route untuk create data anggota
router.post('/', upload.single('photo'), subBagianTppphOpController.addSubBagianTppphOp);

// Route untuk read data anggota
router.get('/', subBagianTppphOpController.getSubBagianTppphOp);

// Route untuk update data anggota
router.put('/:id', upload.single('photo'), subBagianTppphOpController.updtSubBagianTppphOp);

// Route untuk delete data anggota
router.delete('/anggota/:id', subBagianTppphOpController.delSubBagianTppphOp);

// Route untuk mengambil komentar berdasarkan ID divisi
router.get('/:id', subBagianTppphOpController.getKomentarSubBagianTppphOp);

// Route untuk menghapus komentar berdasarkan ID divisi
router.delete('/:id', subBagianTppphOpController.delKomentarSubBagianTppphOp);

module.exports = router;