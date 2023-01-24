import { Optional } from 'sequelize';
import EmployeesAttributes from './EmpolyeesAttributes';

export interface EmployeesInput extends Optional<EmployeesAttributes, 'id' | 'slug'> {}