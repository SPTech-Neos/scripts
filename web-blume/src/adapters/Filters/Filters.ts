import axios from "axios";
import { environment } from "../../../environment.config";

import { FilterRequestDto, FilterResponseDto } from "../../utils/Filter/filters.types";

export class FilterAdapter {
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

    async create(employeeDto: FilterRequestDto): Promise<FilterResponseDto | null> {
        try {
            const response = await axios.post(`${this.apiUrl}/filter`, employeeDto, this.getRequestOptions());
            return {
                id: response.data.id,
                price: response.data.price,
                establishment: response.data.establishment,
                service: response.data.service
            } as FilterResponseDto;
        } catch (error) {
            console.error("Error creating employee:", error);
            return null;
        }
    }

    async delete(filterId: number): Promise<boolean> {
        try {
            await axios.delete(`${this.apiUrl}/filter/${filterId}`, this.getRequestOptions());
            return true;
        } catch (error) {
            console.error("Error deleting service:", error);
            return false;
        }
    }

    async getFilterById(id: number): Promise<FilterResponseDto | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/filter/${id}`, this.getRequestOptions());
            return {
                id: response.data.od,
                price: response.data.price,
                establishment: response.data.establishment,
                service: response.data.service,
            } as FilterResponseDto;
        } catch (error) {
            console.error("Error getting service by token:", error);
            return null;
        }
    }
}