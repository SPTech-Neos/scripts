import { ServiceResponseDto } from "../Products/Service/service.types";
import { ClientResponseDto } from "../Users/Client/client.types";
import { EmployeeResponseDto } from "../Users/Employee/employee.types";
import { SchedulingStatusResponseDto } from "./schedulingStatus.types";

export interface SchedulingRequestDto {
    dateTime: string; 
    fkScheduligStatus: number; // idSchedulingStatus
    fkService: number; // idService 
    fkEmployee: number; // idEmployee
    fkClient: number; // idClient
}

export interface SchedulingResponseDto {
    idSchedulig: number; // idSchedulig, 
    client: ClientResponseDto;  
    service: ServiceResponseDto; 
    employee: EmployeeResponseDto; 
    schedulingStatus: SchedulingStatusResponseDto;
    dateTime: string;
}
