"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.getById = exports.getAll = exports.update = exports.create = void 0;
/** Template Sequelize Dal - Typescript */
const sequelize_1 = require("sequelize");
const Employee_1 = __importDefault(require("../models/Employee"));
const create = async (payload) => {
    const employee = await Employee_1.default.create(payload);
    return employee;
};
exports.create = create;
const update = async (id, payload) => {
    const employee = await Employee_1.default.findByPk(id);
    if (!employee) {
        /** @todo throw custom error */
        throw new Error("not found.");
    }
    ;
    const updatedEmployee = await employee.update(payload);
    return updatedEmployee;
};
exports.update = update;
const getAll = async (filter) => {
    return Employee_1.default.findAll(Object.assign({ where: Object.assign({}, ((filter === null || filter === void 0 ? void 0 : filter.isDeleted) && { deletedAt: { [sequelize_1.Op.not]: null } })) }, (((filter === null || filter === void 0 ? void 0 : filter.isDeleted) || (filter === null || filter === void 0 ? void 0 : filter.includeDeleted)) && { paranoid: true })));
};
exports.getAll = getAll;
const getById = async (id) => {
    const employee = await Employee_1.default.findByPk(id);
    if (!employee) {
        /** @todo throw custom error */
        throw new Error("not found.");
    }
    ;
    return employee;
};
exports.getById = getById;
const deleteById = async (id) => {
    const deletedEmployeeCount = await Employee_1.default.destroy({
        where: { id }
    });
    return !!deletedEmployeeCount;
};
exports.deleteById = deleteById;
