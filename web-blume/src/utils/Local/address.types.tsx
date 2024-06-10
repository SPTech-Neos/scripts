export interface AddressRequestDto {
    publicPlace: string
    street: string;
    city: string;
    state: string;
}

export interface AddressResponseDto {
    id: number;
    publicPlace: string
    street: string;
    city: string;
    state: string;    
}
