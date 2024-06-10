import axios from "axios";
import { environment } from "../../../environment.config";
import { SchedulingResponseDto } from "../../utils/Scheduling/scheduling.types";


export class SchedulingAdapter {
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

    async getAllSchedulings(): Promise<SchedulingResponseDto[] | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/scheduling`, this.getRequestOptions());
            const scheduling: SchedulingResponseDto[] | PromiseLike<SchedulingResponseDto[] | null> | null = [];
            response.data.forEach((e: SchedulingResponseDto) => {
                scheduling.push(e)
            });
        
            return scheduling
        } catch (error) {
            console.error("Error getting service by token:", error);
            return null;
        }
    }

    async getSchedulingsByClientId(clientId: number): Promise<SchedulingResponseDto[] | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/scheduling/client/${clientId}`, this.getRequestOptions());
            return response.data;
        } catch (error) {
            console.error("Error getting schedulings by client ID:", error);
            return null;
        }
    }

    async getSchedulingsByEmployeeId(employeeId: number): Promise<SchedulingResponseDto[] | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/scheduling/employee/${employeeId}`, this.getRequestOptions());
            return response.data;
        } catch (error) {
            console.error("Error getting schedulings by employee ID:", error);
            return null;
        }
    }

    async delete(schedulingId: number): Promise<boolean> {
        try {
            await axios.delete(`${this.apiUrl}/scheduling/${schedulingId}`, this.getRequestOptions());
            return true;
        } catch (error) {
            console.error("Error deleting service:", error);
            return false;
        }
    }

}
