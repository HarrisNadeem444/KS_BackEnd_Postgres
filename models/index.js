const user = require("../models/schemas/userSchema");
const teacher = require("../models/schemas/teacherSchema");
const sequelize = require("../common/dbconnection");

user.hasOne(teacher, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
teacher.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});

const models = sequelize.models;
console.log(models);
const db = {};
db.sequelize = sequelize;
module.exports = { sequelize, models };
