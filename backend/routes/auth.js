const express = require('express')
const router = express.Router()

// Import Controller
const {signup, accountActivation, signin, forgotPassword, resetPassword} = require('../controllers/auth');

// Sign in and Sign up
router.post('/signup',  signup);
router.post('/account-activation',  accountActivation);
router.post('/signin',  signin);

// Forgot and reset password
router.put('/forgot-password', forgotPassword);
router.put('/reset-password', resetPassword);

router.post('/googlelogin, googlelogin')

module.exports = router;
