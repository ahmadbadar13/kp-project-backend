const express = require('express');
const router = express.Router();
const newsController = require('../../controllers/Admin/newsController');
const { upload } = require('../../index');

router.post('/add', upload.single('image'), newsController.addNews);
router.get('/list', newsController.getNews);
router.put('/edit/:id', upload.single('image'), newsController.editNews);
router.delete('/delete/:id', newsController.deleteNews);
router.get('/:id', newsController.getNewsById);

module.exports = router;
