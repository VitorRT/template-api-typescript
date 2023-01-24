import EmployeesAttributes from "../../../types/Employees/EmpolyeesAttributes";
import { EmployeesOutput } from "../../../types/Employees/EmployesOutput";

export const toEmployee = (employee: EmployeesOutput): EmployeesAttributes => {
    return {
        id: employee.id,
        name: employee.name,
        oldyear: employee.oldyear,
        email: employee.email,
        password: employee.password,  
        birth_date: employee.birth_date,
        slug: employee.slug,
        createdAt: employee.createdAt,
        updatedAt: employee.updatedAt,
        deletedAt: employee.deletedAt,
    };
};
