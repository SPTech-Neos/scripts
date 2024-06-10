import axios from "axios";
import { environment } from "../../../environment.config";
import { LocalRequestDto, LocalResponseDto } from "../../utils/Local/local.types";


export class LocalAdapter {
    private readonly apiUrl: string;
    private readonly SpringSecurityUsername: string;
    private readonly SpringSecurityPassword: string;

    constructor() {
        this.apiUrl = environment.apiUrl ? environment.apiUrl : "http://localhost:8080";
        this.SpringSecurityUsername = environment.springSecurityUsername;
        this.SpringSecurityPassword = environment.springSecurityPassword;
    }

    private getRequestOptions() {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(this.SpringSecurityUsername + ':' + this.SpringSecurityPassword),
                'Accept': '*/*'
            }
        };
    }

    async create(localDto: LocalRequestDto): Promise<LocalResponseDto | null> {
        try {
            const response = await axios.post(`${this.apiUrl}/local`, localDto, this.getRequestOptions());
            return {
                id: response.data.id,
                address: response.data.address,
                number: response.data.number,
                floor: response.data.floor,
                block: response.data.block,
                complement: response.data.complement,
                addressId: response.data.address
            } as LocalResponseDto;
        } catch (error) {
            console.error("Error creating employee:", error);
            return null;
        }
    }
}