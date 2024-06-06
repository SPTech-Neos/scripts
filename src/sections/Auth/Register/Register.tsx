// TO REDO
import React from "react";
import * as S from './register.styled';

import LoginForm from '../../../components/LoginForm/LoginForm';
import AsideImg from '../../../components/AsideImg/AsideImg';

const Login: React.FC<S.LoginProps> = ({ imgUrl, bgColor, imgAlt }) => {
    return (
        <>
            <S.Login imgUrl={imgUrl} bgColor={bgColor} imgAlt={imgAlt}>
                <AsideImg imgUrl={imgUrl} bgColor={bgColor} imgAlt={imgAlt}></AsideImg>
                <LoginForm></LoginForm>
            </S.Login>
        </>
    );
}

export default Login;