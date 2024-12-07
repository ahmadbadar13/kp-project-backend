const express = require('express');
const { login, register, getAllUsers, updateUser, verifyEmail, updatePassword } = require('../controllers/authController');
const router = express.Router();

router.post('/', login);
router.post('/newaccount', register);

router.get('/', getAllUsers);
router.put('/update/:id', updateUser);

router.post('/verify-email', verifyEmail);
router.post('/update-password', updatePassword);

module.exports = router;
