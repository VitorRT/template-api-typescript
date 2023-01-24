"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("./config"));
const sequelize = new sequelize_1.Sequelize(config_1.default.database, config_1.default.username, config_1.default.password, config_1.default);
exports.default = sequelize;
