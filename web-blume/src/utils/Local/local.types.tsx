import { AddressResponseDto } from "./address.types";

export interface LocalRequestDto {
    number: number;
    floor?: number;
    block?: string;
    complement?: string;
    address: number; // address
}

export interface LocalResponseDto {
    id: number;
    number: number;
    floor: number;
    block: string;
    complement: string;
    addressId: AddressResponseDto;
}