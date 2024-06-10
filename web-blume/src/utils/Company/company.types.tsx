export interface CompanyRequestDto {
    name: string;
    cnpj: string;
}

export interface CompanyResponseDto {
    companyId: number;
    name: string;
    cnpj: string;
}
