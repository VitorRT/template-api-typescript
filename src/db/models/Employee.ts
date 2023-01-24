/** Default Sequelize Model - Typescript */
import { Model, DataTypes } from "sequelize";
import EmployeesAttributes from "../../types/Employees/EmpolyeesAttributes";
import { EmployeesInput } from "../../types/Employees/EmployesInput";
import sequelize from "../connection";


class Employee extends Model<EmployeesAttributes, EmployeesInput> implements EmployeesAttributes {
    public id!: number;
    public name!: string;
    public oldyear!: number;
    public email!: string;
    public password!: string;  
    public birth_date!: string;
    public slug!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
};

Employee.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    oldyear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birth_date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true,
    modelName: "Employee",
    tableName: "Employees"
});

export default Employee;