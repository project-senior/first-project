const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/fetch", itemController.selectAll);
router.post("/signup",itemController.signUp)
router.get("/login",itemController.login)
router.post("/sellProduct",itemController.sellProduct)

module.exports = router;
