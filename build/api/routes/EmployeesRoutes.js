"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Employee_1 = __importDefault(require("../controller/Employee"));
const EmployeeRoutes = (0, express_1.Router)();
EmployeeRoutes.get('/', async (req, res) => {
    const filters = req.query;
    const results = await Employee_1.default.getAll(filters);
    return res.status(200).json({
        status: 200,
        status_message: "ok",
        employees: results
    });
});
EmployeeRoutes.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const result = await Employee_1.default.getById(id);
    return res.status(200).json({
        status: 200,
        status_message: "ok",
        employee: result
    });
});
EmployeeRoutes.post("/", async (req, res) => {
    const payload = req.body;
    const result = await Employee_1.default.create(payload);
    return res.status(200).json({
        status: 201,
        status_message: "created",
        employee: result
    });
});
EmployeeRoutes.put("/:id", async (req, res) => {
    const id = Number(req.params.id);
    const payload = req.body;
    const result = await Employee_1.default.update(id, payload);
    return res.status(200).json({
        status: 201,
        status_message: "created",
        employee: result
    });
});
EmployeeRoutes.delete("/:id", async (req, res) => {
    const id = Number(req.params.id);
    const employee = await Employee_1.default.getById(id);
    const result = await Employee_1.default.deleteById(employee.id);
    return res.status(204).json({
        status: 204,
        status_message: "no content.",
        employee_deleted: employee.name,
        sucess: result
    });
});
exports.default = EmployeeRoutes;
