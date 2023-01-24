import express from 'express';
import EmployeeRoutes from './EmployeesRoutes';

export default (app: express.Application) => {
    app.use('/api/v1', EmployeeRoutes);
}