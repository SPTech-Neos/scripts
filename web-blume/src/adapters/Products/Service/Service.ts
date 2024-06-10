import axios from "axios";
import { environment } from "../../../../environment.config";

import { ServiceRequestDto, ServiceResponseDto } from "../../../utils/Products/Service/service.types";

export class ServiceAdapter {
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

    async getServiceById(id: number): Promise<ServiceResponseDto | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/service/${id}`, this.getRequestOptions());
            return {
                serviceId: response.data.id,
                specification: response.data.specification,
                imgUrl: response.data.imgUrl,
                serviceType: response.data.serviceType,
            } as unknown as ServiceResponseDto;
        } catch (error) {
            console.error("Error getting service by token:", error);
            return null;
        }
    }

    async getAllServices(): Promise<ServiceResponseDto[] | null> {
        try {
            const url = new URL(`${this.apiUrl}/service`);
    
            const response = await axios.get(url.toString(), this.getRequestOptions());
    
            const services = response.data.map((service: ServiceResponseDto) => ({
                serviceId: service.id,
                specification: service.specification,
                imgUrl: service.imgUrl,
                serviceType: service.serviceType
            })) as ServiceResponseDto[];
    
            return services;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 

    async register(serviceRequestDto: ServiceRequestDto): Promise<ServiceResponseDto | null> {
        try {
            const response = await axios.post(`${this.apiUrl}/service`, serviceRequestDto, this.getRequestOptions());
            return {
                serviceId: response.data.id,
                specification: response.data.specification,
                imgUrl: response.data.imgUrl,
                serviceType: response.data.serviceType,
            } as unknown as ServiceResponseDto;
        } catch (error) {
            console.error("Error creating service:", error);
            return null;
        }
    }
    
    async delete(serviceId: number): Promise<boolean> {
        try {
            await axios.delete(`${this.apiUrl}/service/${serviceId}`, this.getRequestOptions());
            return true;
        } catch (error) {
            console.error("Error deleting service:", error);
            return false;
        }
    }
    
    async update(serviceId: number, updatedFields: Partial<ServiceRequestDto>): Promise<ServiceResponseDto | null> {
        try {
            const response = await axios.patch(`${this.apiUrl}/service/${serviceId}`, updatedFields, this.getRequestOptions());
            return {
                serviceId: response.data.id,
                specification: response.data.specification,
                imgUrl: response.data.imgUrl,
                serviceType: response.data.serviceType,
            } as unknown as ServiceResponseDto;
        } catch (error) {
            console.error("Error updating Service:", error);
            return null;
        }
    }

    // async getByIdEstablishment(establishmentId: number): Promise<ServiceRequestDto | null> {
    //     try {
    //         const response = await axios.get(`${this.apiUrl}/service/${establishmentId}`, this.getRequestOptions());
    //         return {
    //             serviceId: response.data.id,
    //             specification: response.data.specification,
    //             serviceType: response.data.serviceType,
    //         } as ServiceResponseDto;
    //     }
    // }

}    