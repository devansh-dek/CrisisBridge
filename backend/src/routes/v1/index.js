const express = require('express');
const router = express.Router();
const { UserController } = require('../../controllers');
// authentication
router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.post('/isauthenticated', UserController.isAuthenticated);
module.exports = router;