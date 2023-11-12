const joi = require("joi");

module.exports={
    addTeacher: joi.object().keys({
        specialization: joi.string().required(),
        userID: joi.number().required(),
    }),
    deleteTeacher: joi.object().keys({
        rollNo: joi.number(),
    }),
    updatedTeacher: joi.object().keys({
        id: joi.number().required(),
        specialization: joi.string(),
    }),
}