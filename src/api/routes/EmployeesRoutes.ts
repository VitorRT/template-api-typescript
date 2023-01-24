import { Router, Request, Response } from 'express';
import { EmployeesInput } from '../../types/Employees/EmployesInput';
import EmployeesAttributes from '../../types/Employees/EmpolyeesAttributes';
import { GetAllEmployeesFilters } from '../../types/Employees/GetAllEmployeesFilters';
import EmployeeController from '../controller/Employee';

const EmployeeRoutes = Router();

EmployeeRoutes.get('/', async (req: Request, res: Response) => {
    const filters: GetAllEmployeesFilters = req.query;
    const results = await EmployeeController.getAll(filters);
    return res.status(200).json({
        status: 200,
        status_message: "ok",
        employees: results
    });
})

EmployeeRoutes.get('/:id',  async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const result = await EmployeeController.getById(id);
    return res.status(200).json({
        status: 200,
        status_message: "ok",
        employee: result
    });
})


EmployeeRoutes.post("/", async (req: Request, res: Response) => {
    const payload: EmployeesInput = req.body; 
    const result = await EmployeeController.create(payload);
    return res.status(200).json({
        status: 201,
        status_message: "created",
        employee: result
    });
})

EmployeeRoutes.put("/:id", async(req: Request, res: Response) => {
    const id = Number(req.params.id);
    const payload: EmployeesInput = req.body;
    const result = await EmployeeController.update(id, payload);
    return res.status(200).json({
        status: 201,
        status_message: "created",
        employee: result
    });
})

EmployeeRoutes.delete("/:id", async(req: Request, res: Response) => {
    const id = Number(req.params.id);
    const employee: EmployeesAttributes = await EmployeeController.getById(id);
    const result = await EmployeeController.deleteById(employee.id);

    return res.status(204).json({
        status: 204,
        status_message: "no content.",
        employee_deleted: employee.name,
        sucess: result
    });
});


export default EmployeeRoutes;