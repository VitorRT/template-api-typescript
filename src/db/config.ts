import { Dialect } from "sequelize";
import dot from 'dotenv';
import ConnectionAttributes from "../types/ConnectionAttributes";
dot.config();

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST as string;
const dbPort = process.env.DB_PORT as string;
const dbDriver = process.env.DB_DRIVER as Dialect;
const dbPwd = process.env.DB_PWD as string;

const config: ConnectionAttributes = {
    database: dbName,
    username: dbUser,
    password: dbPwd,
    hostname: dbHost,
    port: Number(dbPort),
    dialect: dbDriver
} 

export default config;

