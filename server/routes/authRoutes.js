const express = require('express');
const { login, register } = require('../controllers/authController');
const router = express.Router();

router.post('/', login);
router.post('/newaccount', register);

module.exports = router;
