const express = require('express');
const router = express.Router();
const newsController = require('../../controllers/Admin/newsController');
const { upload } = require('../../index');

router.post('/add', upload.single('image'), newsController.addNews);
router.get('/list', newsController.getNews);

module.exports = router;
