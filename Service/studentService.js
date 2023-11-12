const {models} = require("../models")

  //Db operations
  module.exports = {
    getStudent: async () => {
      const students = await models.student.findAll({include: models.user});
      return students;
    },
    addStudent: async(data) => {
      const students = await models.student.create(data);
      console.log(students);
      return students;
    },

    updatedStudent: async (studentId, updateStudentData) => {
      const students = await models.student.findByPk(studentId);
    if (students) {
        students.update(updateStudentData);
    }
    return students;
    },

    deleteStudent: async (studentId) => {
      const students = await models.student.findByPk(studentId);
    if (students) {
        students.destroy();
        return "STUDENT DELETED SUCCESSFULLY";
    }
    return null;
    },
  };
  
   