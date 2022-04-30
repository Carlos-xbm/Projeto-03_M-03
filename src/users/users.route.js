const router = require("express").Router();
const userController = require("./users.controller");

router.get("/", userController.createUserController);
router.post("/", userController.findAllUserController);

module.exports = router;
