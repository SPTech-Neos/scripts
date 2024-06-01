import { ServiceResponseDto } from "../Products/service.types";
import { FilterResponseDto } from "./filters.types";
import { LocalResponseDto } from "./local.types";

export interface EstablishmentRequestDto {
    name: string;
    cnpj: string;
    startShift: string;
    endShift: string;
    fkLocal: Number;
    profilePic: string;
    description: string;
    fkServices: number[];
    fkFilters: number[];
}

export interface EstablishmentResponseDto {
    establishmentId: number;
    name: string;
    description: string;
    cnpj: string;
    startShift: string;
    endShift: string;
    assessment: number;
    qtdAssessment: number;
    local: LocalResponseDto;
    profilePic: string;
    services: ServiceResponseDto[];
    filters: FilterResponseDto[];
}