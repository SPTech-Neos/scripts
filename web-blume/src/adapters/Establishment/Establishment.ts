import axios from "axios";
import { environment } from "../../../environment.config";

import { EstablishmentResponseDto, EstablishmentRequestDto } from "../../utils/Establishment/establishment.types";

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

    async getEstablishmentById(id: number): Promise<EstablishmentResponseDto | null> {
        try {

            const response = await axios.get(`${this.apiUrl}/establishments/${id}`, this.getRequestOptions());
            return {
                establishmentId: response.data.id,
                name: response.data.name,
                description: response.data.description,
                local: response.data.local,
                startShift: response.data.startShift,
                endShift: response.data.endShift,
                assessment: response.data.assessment,
                qtdAssessment: response.data.qtdAssessment,
                services: response.data.services,
                filters: response.data.filters
            } as EstablishmentResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async register(establishmentRequestDto: EstablishmentRequestDto): Promise<EstablishmentResponseDto | null> {
        try {
            const { 
                name,
                cnpj,
                startShift,
                endShift,
                fkLocal,
                profilePic,
                description,
                fkServices,
                fkFilters
            } = establishmentRequestDto;
    
            const response = await axios.post(`${this.apiUrl}/establishments`, {
                name,
                cnpj,
                startShift,
                endShift,
                fkLocal,
                profilePic,
                description,
                fkServices,
                fkFilters
            }, this.getRequestOptions());
    
            if (response.status === 200) {
                return {
                    establishmentId: response.data.id,
                    name: response.data.name,
                    description: response.data.description,
                    local: response.data.local,
                    startShift: response.data.startShift,
                    endShift: response.data.endShift,
                    assessment: response.data.assessment,
                    qtdAssessment: response.data.qtdAssessment,
                    services: response.data.services,
                    filters: response.data.filters
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
    
    async update(establishmentId: number, updatedFields: Partial<EstablishmentResponseDto>): Promise<EstablishmentResponseDto | null> {
        try {
    
            const response = await axios.patch(`${this.apiUrl}/establishments/${establishmentId}`, updatedFields, this.getRequestOptions());
    
            return {
                establishmentId: response.data.id,
                name: response.data.name,
                description: response.data.description,
                local: response.data.local,
                startShift: response.data.startShift,
                endShift: response.data.endShift,
                assessment: response.data.assessment,
                qtdAssessment: response.data.qtdAssessment,
                services: response.data.services,
                filters: response.data.filters
            } as EstablishmentResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}    