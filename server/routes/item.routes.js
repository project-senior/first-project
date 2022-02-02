const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.post("/sign-up",itemController.signUp)
router.get("/login",itemController.login)

module.exports = router;
