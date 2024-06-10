
export interface ProductTypeRequestDto {
    name: string; 
    brand: string; 
    imgUrl?: string;
    type: number;
    value: number;
    establishment: number;
}

export interface ProductTypeResponseDto {
    id: number;
    name: string;
    specification: string;
}