export interface Address {
    idAddress: number;
    street: string;
    city: string;
    state: string;
}

export interface Local {
    idLocal: number;
    number: number;
    floor: number;
    bloc: string;
    complement: string;
    address: Address;
}

export interface Establishment {
    idEstablishment: number;
    name: string;
    local: Local;
}

export interface EmployeeType {
    id: number;
    name: string;
}

export interface EmployeeResponseDto {
    idEmployee: number;
    name: string;
    email: string;
    establishment: Establishment;
    employeeType: EmployeeType;
}

export interface EmployeeLoginDto {
    email: string;
    password: string;
}
