import { Address } from "./address.types";

export interface LocalRequestDto {
    cep: string;
    address: Address;
    number: number;
    floor: number;
    bloc: string;
    complement: string;
}

export interface LocalResponseDto {
    localId: number;
    cep: string;
    address: Address;
    number: number;
    floor: number;
    bloc: string;
    complement: string;
}