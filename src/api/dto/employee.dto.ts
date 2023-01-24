import { Optional } from 'sequelize/types';

export type CreateEmployeeDTO = {
    name: string,
    oldyear?: number;
    email?: string;
    password?: string;  
    birth_date?: string;
    slug?: string;
}

export type UpdateEmployeeDTO = Optional<CreateEmployeeDTO, 'name'>;

export type FilterEmployeesDTO = {
    isDeleted?: boolean;
    includeDeleted?: boolean;
}