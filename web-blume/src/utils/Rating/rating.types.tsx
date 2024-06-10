import { EstablishmentResponseDto } from "../Establishment/establishment.types";
import { ClientResponseDto } from "../Users/Client/client.types";

export interface RatingRequestDto {
    nota: number;
    fkEstablishment: number;
    fkClient: number;
}

export interface RatingResponseDto {
    ratingId: number;
    nota: number;
    establishment: EstablishmentResponseDto;
    client: ClientResponseDto;
}
