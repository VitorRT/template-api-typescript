"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmployeesRoutes_1 = __importDefault(require("./EmployeesRoutes"));
exports.default = (app) => {
    app.use('/api/v1', EmployeesRoutes_1.default);
};
