const express = require('express');
const router = express.Router();
const newsController = require('../../controllers/Admin/newsController');
const { upload } = require('../../index');

router.post('/add', upload.single('image'), newsController.addNewsController);
router.get('/list', newsController.getNewsController);
router.put('/edit/:id', upload.single('image'), newsController.editNewsController);
router.delete('/delete/:id', newsController.deleteNewsController);
router.get('/:id', newsController.getNewsByIdController);

module.exports = router;
