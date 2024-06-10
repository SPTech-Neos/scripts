import axios from "axios";
import { environment } from "../../../environment.config";

import { EstablishmentResponseDto, EstablishmentRequestDto, EstablishmentFullResponseDto } from "../../utils/Establishment/establishment.types";

export class EstablishmentAdapter {
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

    async getAllEstablishments(): Promise<EstablishmentResponseDto[] | null> {
        try {
    
            const response = await axios.get(`${this.apiUrl}/establishments`, this.getRequestOptions());
    
            const establishments = response.data.map((establishment: any) => ({
                establishmentId: establishment.id,
                name: establishment.name,
                imgUrl: establishment.imgUrl,
                company: establishment.company,
                local: establishment.local
            })) as EstablishmentResponseDto[];
    
            return establishments;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    }    

    async getEstablishmentById(id: number): Promise<EstablishmentResponseDto | null> {
        try {

            const response = await axios.get(`${this.apiUrl}/establishments/${id}`, this.getRequestOptions());
            return {
                id: response.data.id,
                name: response.data.name,
                imgUrl: response.data.imgUrl,
                company: response.data.company,
                local: response.data.local
            } as EstablishmentResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getAllOfEstab(id: number): Promise<EstablishmentFullResponseDto | null> {
        try {

            const response = await axios.get(`${this.apiUrl}/establishments/api/full/${id}`, this.getRequestOptions());
            return {
                establishment: response.data[0].establishmentRespose,
                employees: response.data[0].employees,
                filters: response.data[0].filters,
                products: response.data[0].products,
            } as EstablishmentFullResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getAllEstab(): Promise<EstablishmentFullResponseDto[] | null> {
        try {
    
            const response = await axios.get(`${this.apiUrl}/establishments/api/full`, this.getRequestOptions());
    
            const establishments = response.data.map((establishment: any) => ({
                establishment: establishment.establishmentResponses,
                employees: establishment.employees,
                filters: establishment.filters,
                products: establishment.products
            })) as EstablishmentFullResponseDto[];
    
            return establishments;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    
    

    async register(establishmentRequestDto: EstablishmentRequestDto): Promise<EstablishmentResponseDto | null> {
        try {
            const { 
                name,
                imgUrl,
                companyId,
                localId,
            } = establishmentRequestDto;
    
            const response = await axios.post(`${this.apiUrl}/establishments`, {name, imgUrl, companyId, localId}, this.getRequestOptions());
    
            if (response.status === 200) {
                return {
                    id: response.data.id,
                    name: response.data.name,
                    imgUrl: response.data.imgUrl,
                    company: response.data.company,
                    local: response.data.local
                } as EstablishmentResponseDto;
            } else {
                console.error("Erro durante execução do serviço", response.status, response.data);
                return null;
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    
    async delete(establishmentId: number): Promise<boolean> {
        try {        
            const response = await axios.delete(`${this.apiUrl}/establishments/${establishmentId}`, this.getRequestOptions());
        
            return response.status === 200;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    
    async update(establishmentId: number, updatedFields: Partial<EstablishmentRequestDto>): Promise<EstablishmentResponseDto | null> {
        try {
    
            const response = await axios.patch(`${this.apiUrl}/establishments/${establishmentId}`, updatedFields, this.getRequestOptions());
    
            return {
                id: response.data.id,
                name: response.data.name,
                imgUrl: response.data.imgUrl,
                company: response.data.company,
                local: response.data.local
            } as EstablishmentResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}    