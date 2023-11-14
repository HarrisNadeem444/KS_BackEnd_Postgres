var express = require("express");
const users = require("../Controller/userController");
const authenticate = require("../Controller/common/authenticationController");
var router = express.Router();

/* GET users listing. */
router.get("/", authenticate.verifyToken, users.usersController);
router.post("/login", authenticate.login);
router.post("/add", users.addUserController);
router.put("/update/:id", users.updatedUserController);
router.delete("/delete/:id", users.deleteUserController);

module.exports = router;
