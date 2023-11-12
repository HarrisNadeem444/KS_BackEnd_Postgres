const user = require("../models/schemas/userSchema");
const teacher = require("../models/schemas/teacherSchema");
const student = require("../models/schemas/studentSchema");
const course = require("../models/schemas/courseSchema");
const sequelize = require("../common/dbconnection");


user.hasOne(teacher, {onDelete: "CASCADE", foreignKey:{name: "userID", allowNull:false, unique: true,},})
teacher.belongsTo(user, {onDelete: "CASCADE", foreignKey:{name: "userID", allowNull:false, unique: true,},})

user.hasOne(student, {onDelete: "CASCADE", foreignKey:{name: "userID", allowNull:false, unique: true,},})
student.belongsTo(user, {onDelete: "CASCADE", foreignKey:{name: "userID", allowNull:false, unique: true,},})

student.belongsToMany(course,{through: "student_course",},)
course.belongsToMany(student,{through: "student_course",},) 

teacher.belongsToMany(course,{through: "teacher_course",})
course.belongsToMany(teacher,{through: "teacher_course",})

const models = sequelize.models;

console.log(models);
const db = {}
db.sequelize = sequelize;
module.exports = {sequelize, models};