import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { device } from "../../styles/breakpoints.styled";

import * as S from './aboutApp.styled';

import { PrimaryTitle } from '../../components/Texts/Title/title.styled';
import Subtitle from '../../components/Texts/Subtitle/Subtitle';

import imgAboutApp from '../../assets/imagem-about-app.png';
import { PrimaryButton } from '../../components/Buttons/DefaultButton/DefaultButton';

import googlePlayBadge from "../../assets/google-play-badge.svg"

const AboutApp: React.FC = () => {
    const isTabletOrMobile = useMediaQuery({ query: device.tablet });

    return (
        <S.AboutApp id="about-app">
            <S.ContainerWrapper direction='row'>
                <div className="light-ball left"></div>
                <div className="light-ball right"></div>

                <S.Container direction='column'>
                    <S.Limiter>
                        <PrimaryTitle size='md' theme="light" lines={false} outline={false}> Para Todo Mundo </PrimaryTitle>
                        <Subtitle size='lg' theme='light'>Você escolhe por onde quer acessar o Blume, pelo site no computador ou pelo nosso aplicativo!</Subtitle>
                    </S.Limiter>

                    <S.AboutAppImg
                        className="about-app-img"
                        src={imgAboutApp}
                        alt={`Computador e celular demonstrando aplicação Blume`}
                    />

                    {isTabletOrMobile ?
                        <img
                            className="google play badge"
                            src={googlePlayBadge}
                            alt={`Imagem svg com detalhes de circulos no fundo`}
                        /> :

                        <PrimaryButton width='180px'>Entrar</PrimaryButton>
                    }
                </S.Container>
            </S.ContainerWrapper>
        </S.AboutApp>
    )
};

export default AboutApp;

