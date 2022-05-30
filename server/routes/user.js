const router = require('express').Router();
const controller = require('../controllers/user');
const authenticate = require('../jwt/jwt');

router.post('/signup', controller.register);
router.post('/signin', controller.login);
router.post('/logout', controller.logout);
router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUser);
router.put('/:id/budget', controller.addBudget);

module.exports = router;
