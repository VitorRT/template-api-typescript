export default interface EmployeesAttributes {
    id: number;
    name: string;
    oldyear: number;
    email: string;
    password: string;  
    birth_date: string;
    slug: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}