import { Local } from "./Establishment/local.types";

export interface ClientResponseDto {
    clientId: number;
    name: string;
    email: string;
    token: string;
}

export interface ClientLoginDto {
    email: string;
    password: string;
}

export interface ClientRequestDto {
    name: string;
    email: string;
    password: string;
    profilePic?: string;
    local?: Local;
}