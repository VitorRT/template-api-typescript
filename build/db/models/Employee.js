"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Default Sequelize Model - Typescript */
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../connection"));
class Employee extends sequelize_1.Model {
}
;
Employee.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    oldyear: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    birth_date: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    sequelize: connection_1.default,
    paranoid: true,
    modelName: "Employee",
    tableName: "Employees"
});
exports.default = Employee;
