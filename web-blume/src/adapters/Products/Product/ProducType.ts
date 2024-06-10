import axios from "axios";
import { environment } from "../../../../environment.config";

import { ProductTypeResponseDto } from "../../../utils/Products/Product/productTypes.types";

export class ProductTypeAdapter {
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

    async getAllProductsType(): Promise<ProductTypeResponseDto[] | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/ProductType`, this.getRequestOptions());
            const productsType: ProductTypeResponseDto[] | PromiseLike<ProductTypeResponseDto[] | null> | null = [];
            response.data.forEach((e: ProductTypeResponseDto) => {
                productsType.push(e)
            });
            return productsType;
        } catch (error) {
            console.error("Error getting service by token:", error);
            return null;
        }
    }

}