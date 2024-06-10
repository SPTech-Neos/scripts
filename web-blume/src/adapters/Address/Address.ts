import axios from "axios";
import { environment } from "../../../environment.config";
import { AddressRequestDto, AddressResponseDto } from "../../utils/Local/address.types";



export class AddressAdapter {
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

    async create(addressDto: AddressRequestDto): Promise<AddressResponseDto | null> {
        try {
            const response = await axios.post(`${this.apiUrl}/address`, addressDto, this.getRequestOptions());
            return {
                id: response.data.id,
                city: response.data.city,
                publicPlace: response.data.publicPlace,
                state: response.data.state,
                street: response.data.street
            } as AddressResponseDto

        } catch (error) {
            console.error("Error creating employee:", error);
            return null;
        }
    }
}