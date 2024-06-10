import React from "react";
import * as S from './employees.styled'

import Sidebar from "../../components/Sidebar/Sidebar";
import EmployeesSection from "../../sections/Employees/Employees";
import HeaderProfile from "../../components/Headers/HeaderProfile/HeaderProfile";

import { AuthContextProvider as AuthContextProviderEmployee } from "../../contexts/User/AuthContextProviderEmployee";
// import { AuthContextProvider as AuthContextProviderClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextProvider as AuthContextProviderEstablishment } from "../../contexts/Establishment/AuthContextProviderEstablishment";

const Employees: React.FC = () => {
    return(
        <AuthContextProviderEmployee>
            <AuthContextProviderEstablishment>

                <S.EmployeesPage>
                    <Sidebar />
                    <HeaderProfile />
                    <EmployeesSection />
                </S.EmployeesPage>
            
            </AuthContextProviderEstablishment>
        </AuthContextProviderEmployee>
    );
}

export default Employees;