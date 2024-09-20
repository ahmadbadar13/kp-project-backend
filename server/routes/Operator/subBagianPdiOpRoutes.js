const express = require('express');
const subBagianPdiOpController = require('../../controllers/Operator/subBagianPdiOpController');
const { upload } = require('../../index');
const router = express.Router();

// Route untuk create data anggota
router.post('/', upload.single('photo'), subBagianPdiOpController.addSubBagianPdiOp);

// Route untuk read data anggota
router.get('/', subBagianPdiOpController.getSubBagianPdiOp);

// Route untuk update data anggota
router.put('/:id', upload.single('photo'), subBagianPdiOpController.updtSubBagianPdiOp);

// Route untuk delete data anggota
router.delete('/anggota/:id', subBagianPdiOpController.delSubBagianPdiOp);

// Route untuk mengambil komentar berdasarkan ID divisi
router.get('/:id', subBagianPdiOpController.getKomentarSubBagianPdiOp);

// Route untuk menghapus komentar berdasarkan ID divisi
router.delete('/:id', subBagianPdiOpController.delKomentarSubBagianPdiOp);

module.exports = router;