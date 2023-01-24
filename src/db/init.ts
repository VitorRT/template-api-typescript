import Employee from "./models/Employee";
import dot from 'dotenv';
dot.config();

const isDev = process.env.NODE_ENV === "development";

const dbInit = () => {
    Employee.sync( { alter: isDev } );
}

export default dbInit;


