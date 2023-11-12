var express = require("express");
var router = express.Router();
var studentService = require("../service/studentService");
var studentValidation = require("./studentValidation")

// Callback Functions

/* GET users listing. */
async function studentsController(req, res, next) {
  res.send(await studentService.getStudent());
}

async function addStudentController(req, res, next) {
  try {
    const {error, value} = studentValidation.addStudent.validate(req.body)
  if(error){
    return res.send(error.details[0].message);
  } else{
    const data = await studentService.addStudent(value);
    console.log(data);
    return res.send(data);
  }
  } catch (error) {
    res.send(error);
  }
}

async function updatedStudentController(req, res, next) {
  try {
    const {error, value} = studentValidation.updatedStudent.validate(req.body)
  if(error){
    return res.send(error.details[0].message);
  } else{
    const studentId = req.params.id;
    const updateStudentData = req.body;
    const updated = await studentService.updatedStudent(studentId, updateStudentData, value);
    res.send(updated);
    
  }
  } catch (error) {
    res.send(error);
  }  
}

async function deleteStudentController(req, res, next) {
  try {
    const {error, value} = studentValidation.deleteStudent.validate(req.body)
  if(error){
    return res.send(error.details[0].message);
  } else{
    const studentId = req.params.id;
    const deleted = await studentService.deleteStudent(studentId, value);
    res.send(deleted);
  }
  } catch (error) {
    res.send(error);
  }
}

module.exports = { studentsController, addStudentController, updatedStudentController, deleteStudentController };
