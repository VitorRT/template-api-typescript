/** Você não vai usar esse arquivo aqui no Typescript, não mexa em nada. */

import * as dot from "dotenv"
dot.config();

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST as string;
const dbPort = process.env.DB_PORT as string;
const dbDriver = process.env.DB_DRIVER as String;
const dbPwd = process.env.DB_PWD as string;

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
}

module.exports = config;