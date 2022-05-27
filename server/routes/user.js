const router = require('express').Router();
const controller = require('../controllers/authController');

router.post('/signup', controller.register);
router.post('/signin', controller.login);
router.post('/logout', controller.logout);

module.exports = router;
