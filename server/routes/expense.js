const router = require("express").Router();
const controller = require("../controllers/expense");
const authenticate = require("../jwt/jwt");

router.post("/", authenticate, controller.createExpense);
router.get("/", authenticate, controller.getAllExpenses);
router.get("/:id", authenticate, controller.getExpense);
router.put("/:id", authenticate, controller.updateExpense);
router.delete("/:id", authenticate, controller.deleteExpense);

module.exports = router;
