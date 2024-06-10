import { ServiceResponseDto } from "../../Products/Service/service.types";
import { EmployeeResponseDto } from "./employee.types";

export interface EmployeeServicesRequestDto {
    hoursSpent: string | Date | number;
    expertise: number;
    fkEmployee: number | string;
    fkService: number | undefined | null;
}

export interface EmployeeServicesResponseDto {
    id: number;
    employeeTypeId: number;
    hoursSpent: string | Date | number;
    expertise: string;
    employee: EmployeeResponseDto;
    service: ServiceResponseDto;
}