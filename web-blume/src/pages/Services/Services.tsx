import React from "react";
import * as S from './services.styled';

import Sidebar from "../../components/Sidebar/Sidebar";
import HeaderProfile from "../../components/Headers/HeaderProfile/HeaderProfile";
import EstablishmentServices from "../../sections/EstablishmentServices/EstablishmentServices";

import { AuthContextProvider as AuthContextProviderEmployee } from "../../contexts/User/AuthContextProviderEmployee";
// import { AuthContextProvider as AuthContextProviderClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextProvider as AuthContextProviderEstablishment } from "../../contexts/Establishment/AuthContextProviderEstablishment";

const Services: React.FC = () => {
    return(
        <AuthContextProviderEmployee>
            <AuthContextProviderEstablishment>

                <S.ServicesPage>
                    <Sidebar />
                    <HeaderProfile />
                    <EstablishmentServices/>
                </S.ServicesPage>
                
            </AuthContextProviderEstablishment>
        </AuthContextProviderEmployee>
    );
}

export default Services;
