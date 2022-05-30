const router = require('express').Router();
const controller = require('../controllers/expense');

router.post('/new', controller.createExpense);

module.exports = router;
