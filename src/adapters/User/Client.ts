import axios from "axios";
import { environment } from "../../../environment.config";

import { ClientResponseDto, ClientLoginDto } from "../../utils/client.types";

export class ClientAdapter {
    private readonly apiUrl: string;
    private readonly SpringSecurityUsername: string;
    private readonly SpringSecurityPassword: string;

    constructor() {
        this.apiUrl = environment.apiUrl ? environment.apiUrl : "http://localhost:8080";
        this.SpringSecurityUsername = environment.springSecurityUsername;
        this.SpringSecurityPassword = environment.springSecurityPassword;
    }

    async getClientByToken(token: string): Promise<ClientResponseDto | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/client/${token}`);
            return response.data as ClientResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async login(clientLoginDto: ClientLoginDto): Promise<object | ClientResponseDto | null> {
        try {
            const { email, password } = clientLoginDto;

            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa(this.SpringSecurityUsername + ':' + this.SpringSecurityPassword),
                    'Accept': '*/*'
                }
            };

            const response = await axios.post(`${this.apiUrl}/client/login`, {
                email,
                password
            }, requestOptions);

            if (response.status === 200) {
                return response.data as ClientResponseDto;
            } else {
                return [{type: "error", message: "Erro durante execução do serviço"}];
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
