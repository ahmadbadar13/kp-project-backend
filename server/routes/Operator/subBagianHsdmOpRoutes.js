const express = require('express');
const subBagianHsdmOpController = require('../../controllers/Operator/subBagianHsdmOpController');
const { upload } = require('../../index');
const router = express.Router();

// Route untuk create data anggota
router.post('/', upload.single('photo'), subBagianHsdmOpController.addSubBagianHsdmOp);

// Route untuk read data anggota
router.get('/', subBagianHsdmOpController.getSubBagianHsdmOp);

// Route untuk update data anggota
router.put('/:id', upload.single('photo'), subBagianHsdmOpController.updtSubBagianHsdmOp);

// Route untuk delete data anggota
router.delete('/anggota/:id', subBagianHsdmOpController.delSubBagianHsdmOp);

// Route untuk mengambil komentar berdasarkan ID divisi
router.get('/:id', subBagianHsdmOpController.getKomentarSubBagianHsdmOp);

// Route untuk menghapus komentar berdasarkan ID divisi
router.delete('/:id', subBagianHsdmOpController.delKomentarSubBagianHsdmOp);

module.exports = router;