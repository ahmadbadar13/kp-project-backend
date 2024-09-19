const express = require('express');
const { login, register } = require('../controllers/authController');
const router = express.Router();

router.post('/', login);
router.post('/', register);

module.exports = router;
