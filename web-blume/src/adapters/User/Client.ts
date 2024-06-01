import axios from "axios";
import { environment } from "../../../environment.config";

import { ClientResponseDto, ClientLoginDto, ClientRequestDto } from "../../utils/client.types";

export class ClientAdapter {
    private readonly apiUrl: string;
    private readonly SpringSecurityUsername: string;
    private readonly SpringSecurityPassword: string;

    constructor() {
        this.apiUrl = environment.apiUrl ? environment.apiUrl : "http://localhost:8080";
        this.SpringSecurityUsername = environment.springSecurityUsername;
        this.SpringSecurityPassword = environment.springSecurityPassword;
    }

    // GET CLIENTE BY TOKEN
    async getClientById(id: number, jwtToken: string): Promise<ClientResponseDto | null> {
        try {
            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`,
                    'Accept': '*/*'
                }
            };

            const response = await axios.get(`${this.apiUrl}/client/${id}`, requestOptions);
            return {
                clientId: response.data.clientId,
                name: response.data.name,
                email: response.data.email,
                token: response.data.token
            } as ClientResponseDto;
        } catch (error) {
            console.error("Error getting Client by token:", error);
            return null;
        }
    }

    // LOGIN CLIENTE
    async login(clientLoginDto: ClientLoginDto): Promise<ClientResponseDto | null> {
        try {
            const { email, password } = clientLoginDto;

            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa(this.SpringSecurityUsername + ':' + this.SpringSecurityPassword),
                    'Accept': '*/*'
                }
            };

            const response = await axios.post(`${this.apiUrl}/client/login`, { email, password }, requestOptions);

            if (response.status === 200 && response.data.clientId) {
                console.log(`TOKEN: ` + response.data.token)

                return {
                    clientId: response.data.clientId,
                    name: response.data.name,
                    email: response.data.email,
                    token: response.data.token
                } as ClientResponseDto;
            } else {
                console.error("Erro durante execução do serviço", response.status, response.data);
                return null;
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }


    // REGISTER CLIENTE
    async register(clientRequestDto: ClientRequestDto): Promise<ClientResponseDto | null> {
        try {
            const { email, password, name, profilePic, local } = clientRequestDto;

            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa(this.SpringSecurityUsername + ':' + this.SpringSecurityPassword),
                    'Accept': '*/*'
                }
            };

            const response = await axios.post(`${this.apiUrl}/client`, {
                email,
                password,
                name,
                profilePic,
                local
            }, requestOptions);

            if (response.status === 201) {
                return {
                    clientId: response.data.clientId,
                    name: response.data.name,
                    email: response.data.email,
                    token: response.data.token
                } as ClientResponseDto;
            } else {
                console.error("Erro durante execução do serviço", response.status, response.data);
                return null;
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // DELETE CLIENTE
    async deleteClient(clientId: number, jwtToken: string): Promise<boolean> {
        try {
            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`,
                    'Accept': '*/*'
                }
            };
        
            const response = await axios.delete(`${this.apiUrl}/client/${clientId}`, requestOptions);
        
            return response.status === 200;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    // UPDATE CLIENT
    async update(clientId: number, updatedFields: Partial<ClientResponseDto>, jwtToken: string): Promise<ClientResponseDto | null> {
        try {
            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`,
                    'Accept': '*/*'
                }
            };

            const response = await axios.patch(`${this.apiUrl}/client/${clientId}`, updatedFields, requestOptions);

            return response.data as ClientResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    
}
