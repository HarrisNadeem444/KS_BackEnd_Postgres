var express = require("express");
const userController = require("../Controller/userController");
var router = express.Router();

/* GET users listing. */
router.get("/", userController.userController);
router.get("/data", userController.userData);
router.post("/addUser", userController.addUser);
router.put("/updateUser/:id", userController.updatedUser);
router.delete("/deleteUser/:id", userController.deleteuser);

module.exports = router;
