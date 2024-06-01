import { ServiceCategoryResponseDto } from "./serviceCategory.types";

export interface ServiceTypeRequestDto {
    name: String;
    fkServiceCategory: number;
}

export interface ServiceTypeResponseDto {
    serviceTypeId: number;
    name: String;
    serviceCategory: ServiceCategoryResponseDto;
}

