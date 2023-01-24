"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./models/Employee"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const isDev = process.env.NODE_ENV === "development";
const dbInit = () => {
    Employee_1.default.sync({ alter: isDev });
};
exports.default = dbInit;
