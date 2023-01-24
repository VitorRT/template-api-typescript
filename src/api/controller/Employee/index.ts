import * as service from "../../../db/services/EmployeeServices";
import { EmployeesInput } from "../../../types/Employees/EmployesInput";
import { GetAllEmployeesFilters } from "../../../types/Employees/GetAllEmployeesFilters";
import EmployeesAttributes from "../../../types/Employees/EmpolyeesAttributes";
import * as mapper from './mapper';
import { deleteById } from "../../../db/dal/employeeDal";

export default class EmployeeController {

    public static async create(payload: EmployeesInput): Promise<EmployeesAttributes> {
        return mapper.toEmployee(await service.create(payload))
    }

    public static async update(id: number, payload: Partial<EmployeesInput>): Promise<EmployeesAttributes> {
        return mapper.toEmployee(await service.update(id, payload));
    }

    public static async getAll(filters?: GetAllEmployeesFilters): Promise<EmployeesAttributes[]> {
        return (await service.getAll(filters)).map(mapper.toEmployee);
    }

    public static async getById(id: number): Promise<EmployeesAttributes> {
        return mapper.toEmployee(await service.getById(id));
    }

    public static async deleteById(id: number): Promise<boolean> {
        const isDeleted = await service.deleteById(id);
        return isDeleted;
    }
}