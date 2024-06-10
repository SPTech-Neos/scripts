import axios from "axios";
import { environment } from "../../../environment.config";
import { PaymentResponseDto } from "../../utils/Payment/payment.types";


export class PaymentAdapter {
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

    async getAllPayments(): Promise<PaymentResponseDto[] | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/payment`, this.getRequestOptions());
            const scheduling: PaymentResponseDto[] | PromiseLike<PaymentResponseDto[] | null> | null = [];
            response.data.forEach((e: PaymentResponseDto) => {
                scheduling.push(e)
            });
        
            return scheduling
        } catch (error) {
            console.error("Error getting service by token:", error);
            return null;
        }
    }

    async delete(paymentId: number): Promise<boolean> {
        try {
            await axios.delete(`${this.apiUrl}/payment/${paymentId}`, this.getRequestOptions());
            return true;
        } catch (error) {
            console.error("Error deleting service:", error);
            return false;
        }
    }

    async getPaymentsByClientId(clientId: number): Promise<PaymentResponseDto[] | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/payment/client/${clientId}`, this.getRequestOptions());
            return response.data;
        } catch (error) {
            console.error("Error getting Payments by client ID:", error);
            return null;
        }
    }

    async getPaymentsByEstablishmentId(establishmentId: number): Promise<PaymentResponseDto[] | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/payment/employee/${establishmentId}`, this.getRequestOptions());
            return response.data;
        } catch (error) {
            console.error("Error getting Payments by establishment ID:", error);
            return null;
        }
    }

}
