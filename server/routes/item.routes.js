const router = require('express').Router();
// const { append } = require('express/lib/response');
const itemController = require("../controllers/item.controller");

router.get("/fetch", itemController.selectAll);
router.post("/signup",itemController.signUp)
router.post("/login",itemController.login)
router.post("/sellProduct",itemController.sellProduct)
router.patch("/updateNft/:id",itemController.updateNft)
router.delete("/deleteNft/:title",itemController.deleteNft)

module.exports = router;
