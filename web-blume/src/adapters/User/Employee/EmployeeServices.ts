import axios from "axios";
import { environment } from "../../../../environment.config";
import { EmployeeServicesRequestDto, EmployeeServicesResponseDto } from "../../../utils/Users/Employee/employeeServices.types";

export class EmployeeServicesAdapter {
    private readonly apiUrl: string;
    private readonly SpringSecurityUsername: string;
    private readonly SpringSecurityPassword: string;

    constructor() {
        this.apiUrl = environment.apiUrl ? environment.apiUrl : "http://localhost:8080";
        this.SpringSecurityUsername = environment.springSecurityUsername;
        this.SpringSecurityPassword = environment.springSecurityPassword;
    }

    private getRequestOptions() {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(this.SpringSecurityUsername + ':' + this.SpringSecurityPassword),
                'Accept': '*/*'
            }
        };
    }

    async create(employeeDto: EmployeeServicesRequestDto): Promise<EmployeeServicesResponseDto | null> {
        try {
            const response = await axios.post(`${this.apiUrl}/employeeServices`, employeeDto, this.getRequestOptions());
            return {
                employeeTypeId: response.data.id,
                hoursSpent: response.data.hoursSpent,
                expertise: response.data.expertise,
                employee: response.data.employee,
                service: response.data.service
            } as EmployeeServicesResponseDto;
        } catch (error) {
            console.error("Error creating employee:", error);
            return null;
        }
    }

    async getAllEmployeeServices(): Promise<EmployeeServicesResponseDto[] | null> {
        try {
    
            const response = await axios.get(`${this.apiUrl}/employeeServices`, this.getRequestOptions());
    
            const employeeServices = response.data.map((employeeService: EmployeeServicesResponseDto) => ({
                id: employeeService.id,
                employeeTypeId: employeeService.employeeTypeId,
                hoursSpent: employeeService.hoursSpent,
                expertise: employeeService.expertise,
                employee: employeeService.employee,
                service: employeeService.service
            })) as EmployeeServicesResponseDto[];
    
            return employeeServices;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    }    

    async getEmployeeServiceById(id: number): Promise<EmployeeServicesResponseDto | null> {
        try {

            const response = await axios.get(`${this.apiUrl}/employeeServices/${id}`, this.getRequestOptions());
            return {
                employeeTypeId: response.data.id,
                hoursSpent: response.data.hoursSpent,
                expertise: response.data.expertise,
                employee: response.data.employee,
                service: response.data.service
            } as EmployeeServicesResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}