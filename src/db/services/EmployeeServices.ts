import * as EmployeeDal from '../dal/employeeDal';

import { GetAllEmployeesFilters } from '../../types/Employees/GetAllEmployeesFilters';
import { EmployeesInput } from '../../types/Employees/EmployesInput';
import { EmployeesOutput } from '../../types/Employees/EmployesOutput';

export const create =  (payload: EmployeesInput): Promise<EmployeesOutput> => {
    return EmployeeDal.create(payload);
};

export const update = (id: number, payload: Partial<EmployeesInput>): Promise<EmployeesOutput> => {
    return EmployeeDal.update(id, payload);
}

export const getAll = (filters?: GetAllEmployeesFilters): Promise<EmployeesOutput[]> => {
    return EmployeeDal.getAll(filters);
}

export const getById = (id: number): Promise<EmployeesOutput> => {
    return EmployeeDal.getById(id);
}

export const deleteById = (id: number): Promise<boolean> => {
    return EmployeeDal.deleteById(id);
}