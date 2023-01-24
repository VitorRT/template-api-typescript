"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbDriver = process.env.DB_DRIVER;
const dbPwd = process.env.DB_PWD;
const config = {
    database: dbName,
    username: dbUser,
    password: dbPwd,
    hostname: dbHost,
    port: Number(dbPort),
    dialect: dbDriver
};
exports.default = config;
