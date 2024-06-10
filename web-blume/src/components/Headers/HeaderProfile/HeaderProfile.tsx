import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';

import * as S from './headerProfile.styled';
import { AuthContextEmployee } from "../../../contexts/User/AuthContextProviderEmployee";
import { AuthContextEstablishment } from "../../../contexts/Establishment/AuthContextProviderEstablishment";

import { EstablishmentResponseDto } from "../../../utils/Establishment/establishment.types";
// import { EmployeeResponseDto } from "../../../utils/Employee/employee.types";

const HeaderProfile: React.FC<S.ProfileProps> = ({ background }) => {
    const { isAuthenticated } = useContext(AuthContextEmployee);

    const tokenFromCookie = Cookies.get('employeeInfo');
    const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;
    const [establishmentInfo, setEstablishmentInfo] = useState<EstablishmentResponseDto | null>(null);
    // const [employeeInfo, setEmployeeInfo] = useState<EmployeeResponseDto | null>(null);

    // const { establishmentId } = useParams<{establishmentId: string}>();
    const { getEstablishmentById } = useContext(AuthContextEstablishment);
    const { getEmployeeById } = useContext(AuthContextEmployee);

    useEffect(() => {
            const fetchEstablishmentData = async () => {
                const employeeEstab = await getEmployeeById(Number(token.employeeId)); 
                console.log("emplyoyee Stab " + JSON.stringify(employeeEstab));

                const data = await getEstablishmentById(Number(employeeEstab?.establishment.id));
                console.log("ESTABLISHMENTINFO: " + JSON.stringify(data));
                setEstablishmentInfo(data);

            }
            fetchEstablishmentData();

        if (tokenFromCookie) {
            console.log("Token de autenticação:", tokenFromCookie);
            console.log("LOGADO: " + isAuthenticated);
            console.log("estabelecimento: " + token.establishment.name)
        }
    }, [tokenFromCookie, isAuthenticated]);


    return (
        <S.HeaderBody>

            <S.ContainerSelect>
                <S.ContainerImg background = {background}>
                    
                </S.ContainerImg> 
                <S.SelectEmpresa name="empresas" id="empresas">
                    <option value="nomeEmpresa">{establishmentInfo?.name}</option>
                </S.SelectEmpresa>

            </S.ContainerSelect>

        </S.HeaderBody> 
    );
}
export default HeaderProfile;