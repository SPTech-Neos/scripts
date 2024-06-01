import React from "react";
import * as S from './login.styled';

import LoginForm from '../../../components/LoginForm/LoginForm';
import AsideImg from '../../../components/AsideImg/AsideImg';

import { AuthContextProvider as AuthContextProviderClient } from "../../../contexts/User/AuthContextProviderClient";
import { AuthContextProvider as AuthContextProviderEmployee } from "../../../contexts/User/AuthContextProviderEmployee";

const Login: React.FC<S.LoginProps> = ({ imgUrl, bgColor, imgAlt }) => {
    return (
        <>
            <S.Login imgUrl={imgUrl} bgColor={bgColor} imgAlt={imgAlt}>
                <AsideImg imgUrl={imgUrl} bgColor={bgColor} imgAlt={imgAlt}></AsideImg>
                
                <AuthContextProviderClient>
                    <AuthContextProviderEmployee>
                        <LoginForm />
                    </AuthContextProviderEmployee>
                </AuthContextProviderClient>
            </S.Login>
        </>
    );
}

export default Login;