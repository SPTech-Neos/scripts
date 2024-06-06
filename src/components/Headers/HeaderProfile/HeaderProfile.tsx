import React, { useEffect } from "react";
import Cookies from 'js-cookie';

import * as S from './headerProfile.styled';

const HeaderProfile: React.FC<S.ProfileProps> = ({ background }) => {
    const tokenFromCookie = Cookies.get('employeeToken');
    console.log(tokenFromCookie)
    const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

    useEffect(() => {
        // Exemplo de uso do token após o login
        if (token) {
            console.log("Token de autenticação:", token);
        }
    }, [token]);

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