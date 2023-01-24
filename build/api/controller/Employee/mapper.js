"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEmployee = void 0;
const toEmployee = (employee) => {
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
exports.toEmployee = toEmployee;
