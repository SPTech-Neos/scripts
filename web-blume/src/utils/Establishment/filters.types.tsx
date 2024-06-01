import { ServiceResponseDto } from "../Products/service.types";

export interface FilterRequestDto {
    price: number;
    fkService: number;
}

export interface FilterResponseDto {
    filterId: number;
    price: number;
    service: ServiceResponseDto;
}