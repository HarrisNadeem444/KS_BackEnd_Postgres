const { models } = require("../models");

const students = [
  {
    rollNumber: 1,
    name: "Harris",
    fatherName: "Nadeem",
    phoneNumber: 0312345,
  },
  {
    rollNumber: 2,
    name: "Ammar",
    fatherName: "Azeem",
    phoneNumber: 0312346,
  },
  {
    rollNumber: 3,
    name: "Azeem",
    fatherName: "Ahmad",
    phoneNumber: 0312347,
  },
];

module.exports = {
  getUser: async () => {
    const users = await models.user.findAll();
    return users;
  },
  addUser: async (data) => {
    const users = await models.user.create(data);
    return users;
  },
  updatedUserService: (userID, data) => {
    const userIndex = user.findIndex((u) => u.id == userID);
    user[userIndex] = { ...user[userIndex], ...data };
    return user;
  },
  deleteUser: (userID) => {
    const userIndex = user.findIndex((u) => u.id == userID);
    user.splice(userIndex, 1);
    return user;
  },
  getStudents: () => {
    return students;
  },
  addStudent: (data) => {
    const updatedArray = students.push(data);
    return students;
  },
};
