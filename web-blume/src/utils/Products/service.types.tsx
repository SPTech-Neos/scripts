import { ServiceTypeResponseDto } from "./serviceType.types";

// AS DTOS estão iguais no backend (request e response)
export interface ServiceRequestDto {
    specification: string;
    fkServiceType: number;
}

export interface ServiceResponseDto {
    serviceId: number;
    specification: string;
    serviceType: ServiceTypeResponseDto;
}