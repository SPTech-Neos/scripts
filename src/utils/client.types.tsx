import { Local } from "./local.types";

export interface ClientResponseDto {
    idClient: number;
    email: string;
    name: string;
    local: Local;
    token: string;
}

export interface ClientLoginDto {
    email: string;
    password: string;
}