var express = require("express");
var router = express.Router();
const userService = require("../Service/userService");
const userValidation = require("./userValidation");

const userController = (req, res, next) => {
  console.log("userController");
  res.send("Its Harris");
};
const userData = (req, res, next) => {
  const user = userService.getUser();
  res.send(user);
};
const addUser = async (req, res, next) => {
  console.log("i am here");
  const { error, value } = userValidation.createUser.validate(req.body);
  if (!error) {
    const add = await userService.addUser(value);
    res.send(add);
  } else {
    res.send(error.details[0].message);
  }
};
const updatedUser = (req, res, next) => {
  console.log(req.params);
  const { error, value } = userValidation.updateUser.validate(req.body);
  if (!error) {
    const user = userService.updatedUserService(req.params.id, value);
    res.send(user);
  } else {
    res.send(error.details[0].message);
  }
};
const deleteuser = (req, res, next) => {
  const user = userService.deleteUser(req.params.id);
  res.send(user);
};
const studentData = (req, res, next) => {
  const student = userService.getStudents();
  res.send(student);
};

module.exports = {
  userController,
  userData,
  addUser,
  updatedUser,
  deleteuser,
  studentData,
};
