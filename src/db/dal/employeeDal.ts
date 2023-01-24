/** Template Sequelize Dal - Typescript */
import { Op } from 'sequelize';
import Employee from '../models/Employee';
import { EmployeesInput } from '../../types/Employees/EmployesInput';
import { EmployeesOutput } from '../../types/Employees/EmployesOutput';
import { GetAllEmployeesFilters } from '../../types/Employees/GetAllEmployeesFilters';

export const create = async(payload: EmployeesInput): Promise<EmployeesOutput> => {
    const employee = await Employee.create(payload);
    return employee;
};

export const update = async(id: number, payload: Partial<EmployeesInput>): Promise<EmployeesOutput>  => {
    const employee = await Employee.findByPk(id);
    if(!employee) {
        /** @todo throw custom error */
        throw new Error("not found.");
    };
    const updatedEmployee = await (employee as Employee).update(payload);

    return updatedEmployee;
};

export const getAll = async (filter?: GetAllEmployeesFilters): Promise<EmployeesOutput[]> => {
    return Employee.findAll({
        where: {
            ...(filter?.isDeleted && { deletedAt: {[Op.not]: null}})
        },
        ...((filter?.isDeleted || filter?.includeDeleted) && {paranoid: true})
    });
}

export const getById = async (id: number): Promise<EmployeesOutput> => {
    const employee = await Employee.findByPk(id);
    if(!employee) {
        /** @todo throw custom error */
        throw new Error("not found.");
    };
    return employee;
};

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedEmployeeCount = await Employee.destroy({
        where: { id }
    });
    return !!deletedEmployeeCount;
};