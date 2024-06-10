import axios from "axios";
import { environment } from "../../../../environment.config";
import { EmployeeResponseDto, EmployeeLoginDto, EmployeeRequestDto } from "../../../utils/Users/Employee/employee.types";

export class EmployeeAdapter {
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

    // GET EMPLOYEE BY TOKEN
    async getEmployeeById(employeeId: number): Promise<EmployeeResponseDto | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/employee/${employeeId}`, this.getRequestOptions());
            return {
                employeeId: response.data.id,
                name: response.data.name,
                email: response.data.email,
                imgUrl: response.data.imgUrl,
                employeeType: response.data.employeeType,
                establishment: response.data.establishment,
            } as EmployeeResponseDto;
        } catch (error) {
            console.error("Error getting employee by token:", error);
            return null;
        }
    }

    // LOGIN EMPLOYEE
    async login(employeeLoginDto: EmployeeLoginDto): Promise<EmployeeResponseDto | null> {
        try {
            const { email, password } = employeeLoginDto;
            const response = await axios.post(`${this.apiUrl}/employee/login`, { email, password }, this.getRequestOptions());

            if (response.status === 200 && response.data.id) {
                return {
                    employeeId: response.data.id,
                    name: response.data.name,
                    email: response.data.email,
                    imgUrl: response.data.imgUrl,
                    employeeType: response.data.employeeType,
                    establishment: response.data.establishment
                } as EmployeeResponseDto;
            } else {
                console.error("Error during service execution", response.status, response.data);
                return null;
            }
        } catch (error) {
            console.error("Error logging in employee:", error);
            return null;
        }
    }

    // CREATE EMPLOYEE
    async create(employeeDto: EmployeeRequestDto): Promise<EmployeeResponseDto | null> {
        try {
            const response = await axios.post(`${this.apiUrl}/employee`, employeeDto, this.getRequestOptions());
            return {
                employeeId: response.data.id,
                name: response.data.name,
                email: response.data.email,
                imgUrl: response.data.imgUrl,
                employeeType: response.data.employeeType,
                establishment: response.data.establishment
            } as EmployeeResponseDto;
        } catch (error) {
            console.error("Error creating employee:", error);
            return null;
        }
    }

    // UPDATE EMPLOYEE
    async update(employeeId: number, updatedFields: Partial<EmployeeResponseDto>): Promise<EmployeeResponseDto | null> {
        try {
            const response = await axios.patch(`${this.apiUrl}/employee/${employeeId}`, updatedFields, this.getRequestOptions());
            return {
                employeeId: response.data.id,
                name: response.data.name,
                email: response.data.email,
                imgUrl: response.data.imgUrl,
                employeeType: response.data.employeeType,
                establishment: response.data.establishment
            } as EmployeeResponseDto;
        } catch (error) {
            console.error("Error updating employee:", error);
            return null;
        }
    }    

    // DELETE EMPLOYEE
    async delete(employeeId: string): Promise<boolean> {
        try {
            await axios.delete(`${this.apiUrl}/employee/${employeeId}`, this.getRequestOptions());
            return true;
        } catch (error) {
            console.error("Error deleting employee:", error);
            return false;
        }
    }
}
