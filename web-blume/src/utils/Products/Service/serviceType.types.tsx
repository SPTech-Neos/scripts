import { ServiceCategoryResponseDto } from "./serviceCategory.types";

export interface ServiceTypeRequestDto {
    name: string;
    fkServiceCategory: number; // ServiceCategory
}

export interface ServiceTypeResponseDto {
    id: number;
    name: string;
    serviceCategory: ServiceCategoryResponseDto;
}

