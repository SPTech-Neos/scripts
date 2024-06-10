import axios from "axios";
import { environment } from "../../../../environment.config";

import { /*ServiceTypeRequestDto,*/ ServiceTypeResponseDto } from "../../../utils/Products/Service/serviceType.types";

export class ServiceTypeAdapter {
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

    async getServiceTypeById(id: number): Promise<ServiceTypeResponseDto | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/serviceType/${id}`, this.getRequestOptions());
            return {

                id: response.data.id,
                name: response.data.name,
                serviceCategory: response.data.serviceCategory

            } as ServiceTypeResponseDto;
        } catch (error) {
            console.error("Error getting service by token:", error);
            return null;
        }
    }

    async getAllServicesType(): Promise<ServiceTypeResponseDto[] | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/serviceType`, this.getRequestOptions());
            const servicesType: ServiceTypeResponseDto[] | PromiseLike<ServiceTypeResponseDto[] | null> | null = [];
            response.data.forEach((e: ServiceTypeResponseDto) => {
                
                servicesType.push(e)
            });
            console.log(response);

            return servicesType;
        } catch (error) {
            console.error("Error getting service by token:", error);
            return null;
        }
    }

}