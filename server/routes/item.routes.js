const router = require('express').Router();
const { append } = require('express/lib/response');
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.post("/signup",itemController.signUp)
router.post("/login",itemController.login)
router.post("/sellProduct",itemController.sellProduct)

module.exports = router;
