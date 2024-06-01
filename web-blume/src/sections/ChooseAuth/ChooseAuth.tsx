import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from './chooseAuth.styled';

import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import { AuthContextClient } from "../../contexts/User/AuthContextProviderClient";
import { PrimaryTitle } from "../../components/Texts/Title/Title";
import Subtitle from "../../components/Texts/Subtitle/Subtitle";
import CheckboxCard from "../../components/Cards/CheckboxCard/CheckboxCard";
import clientCardImg from "../../assets/ChooseCardImgs/client-card-img.svg";
import employeeCardImg from "../../assets/ChooseCardImgs/employee-card-img.svg";
import { PrimaryButton } from "../../components/Button/button.styled";

const ChooseAuth: React.FC = () => {
    const navigate = useNavigate();
    const { handleLogoutEmployee } = useContext(AuthContextEmployee);
    const { handleLogoutClient } = useContext(AuthContextClient);

    
    const [selected, setSelected] = useState<"client" | "employee" | null>(null);

    const handleClientLogin = () => {
        handleLogoutEmployee();
        navigate("/feed");
    };

    const handleEmployeeLogin = () => {
        handleLogoutClient();
        navigate("/employee");
    };

    const handleEntrarClick = () => {

        if (selected === "client") {
            handleClientLogin();
        } else {
            handleEmployeeLogin();
        }
    };

    return (
        <S.ChooseAuth id="choose-auth">
            <S.ChooseAuthContainer direction="row">
                <S.ChooseAuthBox>
                    <S.ChooseAuthBoxContainer>
                        <PrimaryTitle size="sm" outline={true}>Como você quer ser visto?</PrimaryTitle>
                        <Subtitle >Você quer fazer uma conta como um cliente ou como um estabelecimento?</Subtitle>
                        <S.CardGroup>
                            <CheckboxCard titulo={"Cliente"} imgSrc={clientCardImg} bgColor={"violet"} onClick={() => setSelected("client")} />
                            <CheckboxCard titulo={"Funcionário"} imgSrc={employeeCardImg} bgColor={"green"} onClick={() => setSelected("employee")} />
                        </S.CardGroup>
                        <PrimaryButton width={"240px"} onClick={handleEntrarClick}> Entrar</PrimaryButton>
                    </S.ChooseAuthBoxContainer>
                </S.ChooseAuthBox>
            </S.ChooseAuthContainer> 
        </S.ChooseAuth>   
    );
};

export default ChooseAuth;
