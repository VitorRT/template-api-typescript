"use strict";
/** Você não vai usar esse arquivo aqui no Typescript, não mexa em nada. */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dot = __importStar(require("dotenv"));
dot.config();
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbDriver = process.env.DB_DRIVER;
const dbPwd = process.env.DB_PWD;
const config = {
    development: {
        database: dbName,
        username: dbUser,
        password: dbPwd,
        hostname: dbHost,
        port: Number(dbPort),
        dialect: "mysql",
        loggin: true,
    },
    test: {
        database: dbName,
        username: dbUser,
        password: dbPwd,
        hostname: dbHost,
        port: Number(dbPort),
        dialect: "mysql",
        loggin: true,
    },
    production: {
        database: dbName,
        username: dbUser,
        password: dbPwd,
        hostname: dbHost,
        port: Number(dbPort),
        dialect: "mysql",
        loggin: true,
    }
};
module.exports = config;
