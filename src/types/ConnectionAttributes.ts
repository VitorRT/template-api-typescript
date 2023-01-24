import { Dialect } from 'sequelize';
export default interface ConnectionAttributes {
    database: string,
    username: string,
    password: string,
    hostname: string,
    port: number,
    dialect: Dialect
}