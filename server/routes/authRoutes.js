const express = require('express');
const { login, register, getAllUsers, updateUser, deleteUser } = require('../controllers/authController');
const router = express.Router();

router.post('/', login);
router.post('/newaccount', register);

router.get('/', getAllUsers);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;
