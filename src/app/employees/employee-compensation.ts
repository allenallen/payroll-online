import { Employees } from "./employees";

export interface EmployeeCompensation {
    employee: Employees;
    id: number;
    daily: number;
    sss: boolean;
    philhealth: boolean;
    pagibig: boolean;
}
