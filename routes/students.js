var express = require("express");
const userController = require("../Controller/userController");
var router = express.Router();

/* GET users listing. */
router.get("/", userController.userController);
router.get("/data", userController.studentData);

module.exports = router;
