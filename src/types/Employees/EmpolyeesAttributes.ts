export default interface EmployeesAttributes {
    id?: number;
    name: String;
    oldyear: Number;
    email: String;
    password: String;  
    birth_date: String;
    slug: String;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}