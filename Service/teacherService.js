const {models} = require("../models")

  //Db operations
  module.exports = {
    getTeacher: async () => {
      const teachers = await models.teacher.findAll({include: models.user});
      return teachers;
    },
    addTeacher: async(data) => {
      const teachers = await models.teacher.create(data);
      console.log(teachers);
      return teachers;
    },

    updatedTeacher: async (teacherId, updateTeacherData) => {
      const teachers = await models.teacher.findByPk(teacherId);
    if (teachers) {
        teachers.update(updateTeacherData);
    }
    return teachers;
    },

    deleteTeacher: async (teacherId) => {
      const teachers = await models.teacher.findByPk(teacherId);
    if (teachers) {
        teachers.destroy();
        return "TEACHER DELETED SUCCESSFULLY";
    }
    return null;
    },
  };
  
   