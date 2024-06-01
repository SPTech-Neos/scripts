import React, { useContext, useEffect } from "react";
import Cookies from 'js-cookie';

import * as S from './headerProfile.styled';
import { AuthContextEmployee } from "../../../contexts/User/AuthContextProviderEmployee";

const HeaderProfile: React.FC<S.ProfileProps> = ({ background }) => {
    const { isAuthenticated, handleLogoutEmployee } = useContext(AuthContextEmployee);

    const tokenFromCookie = Cookies.get('employeeInfo');
    const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

    useEffect(() => {
        if (tokenFromCookie) {
            console.log("Token de autenticação:", tokenFromCookie);
            console.log("LOGADO: " + isAuthenticated);
        }
    }, [tokenFromCookie, isAuthenticated]);

    return (
        <S.HeaderBody>

            <S.ContainerSelect>
                <S.ContainerImg background = {background}>
                    
                </S.ContainerImg> 
                <S.SelectEmpresa name="empresas" id="empresas">
                    <option value="nomeEmpresa">{token?.establishment?.name}</option>
                </S.SelectEmpresa>

            </S.ContainerSelect>

        </S.HeaderBody> 
    );
}
export default HeaderProfile;