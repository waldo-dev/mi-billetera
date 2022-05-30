const router = require('express').Router();

router.use('/user', require('./user.js'));
router.use('/expense', require('./expense.js'));

module.exports = router;
