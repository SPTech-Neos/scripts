/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductResponseDto } from "../../utils/Products/Product/product.types"
import { CompanyResponseDto } from "../Company/company.types";
import { FilterResponseDto } from "../Filter/filters.types";
import { LocalResponseDto } from "../Local/local.types";
import {EmployeeResponseFullDto } from "../Users/Employee/employee.types";

export interface EstablishmentRequestDto {
    name: string;
    imgUrl?: string;
    companyId: number;
    localId: number;
}

export interface EstablishmentResponseDto {
    id: number;
    name: string;
    imgUrl?: string;
    company: CompanyResponseDto;
    local: LocalResponseDto;
}

export interface EstablishmentFullResponseDto {
    [x: string]: any;
    establishment: EstablishmentResponseDto,
    employees: EmployeeResponseFullDto,
    filters: FilterResponseDto,
    products: ProductResponseDto,
}