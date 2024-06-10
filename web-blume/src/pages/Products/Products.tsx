import React from "react";
import * as S from './products.styled';

import Sidebar from "../../components/Sidebar/Sidebar";
import HeaderProfile from "../../components/Headers/HeaderProfile/HeaderProfile";
import EstablishmentProducts from "../../sections/EstablishmentProducts/EstablishmentProducts";

import { AuthContextProvider as AuthContextProviderEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import { AuthContextProvider as AuthContextProviderClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextProvider as AuthContextProviderEstablishment } from "../../contexts/Establishment/AuthContextProviderEstablishment";


const Products: React.FC = () => {
    return(
        <AuthContextProviderEmployee>

            <AuthContextProviderClient>      
                <AuthContextProviderEstablishment>
                    <S.ProductsPage>

                        <Sidebar />
                        <HeaderProfile />
                        <EstablishmentProducts/>
                        
                    </S.ProductsPage>
                    </AuthContextProviderEstablishment>
            </AuthContextProviderClient>

        </AuthContextProviderEmployee>
    );
}

export default Products;


