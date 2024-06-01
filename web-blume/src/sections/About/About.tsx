import React from "react";

import { useMediaQuery } from "react-responsive";
import { device } from "../../styles/breakpoints.styled";

import * as S from "./about.styled";
import Subtitle from "../../components/Texts/Subtitle/Subtitle";

import item01 from "../../assets/item01.svg";
import item02 from "../../assets/item02.svg";
import item03 from "../../assets/item03.svg";
import item04 from "../../assets/item04.svg";
import item05 from "../../assets/item05.svg";

import svg02 from "../../assets/pentagono-blume.png";

import {
  PrimaryTitle,
  SecondaryTitle,
} from "../../components/Texts/Title/title.styled";

const About: React.FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: device.tablet });

  return (
    <S.About id="about">
      <S.AboutWrapper direction="column">
        <>
          <PrimaryTitle size="md" outline={!isTabletOrMobile} lines={false}>
            Tudo em um só lugar
          </PrimaryTitle>
          <S.AboutContainer direction="row">
            <S.AsideRounded>
              <S.Limiter>
                <SecondaryTitle
                  size="sm"
                  theme="light"
                  outline={false}
                  lines={true}
                >
                  De agenda a produtos
                </SecondaryTitle>

                <Subtitle size="sm" theme="light">
                  Na Blume, você encontra o lugar que você precisa, o serviço
                  que quer, o produto que gostou e agenda tudo isso.
                </Subtitle>
                <Subtitle size="sm" theme="light">
                  Feche tudo em um único pacote e pronto!
                </Subtitle>
              </S.Limiter>
            </S.AsideRounded>

            <S.SvgGroup>
              <S.AboutSvg
                className="about-svg-item01"
                src={item01}
                alt={`Imagem svg com detalhes de circulos no fundo`}
              />
              <S.AboutSvg
                className="about-svg-item02"
                src={item02}
                alt={`Imagem svg com detalhes de circulos no fundo`}
              />
              <S.AboutSvg
                className="about-svg-item03"
                src={item03}
                alt={`Imagem svg com detalhes de circulos no fundo`}
              />
              <S.AboutSvg
                className="about-svg-item04"
                src={item04}
                alt={`Imagem svg com detalhes de circulos no fundo`}
              />
              <S.AboutSvg
                className="about-svg-item05"
                src={item05}
                alt={`Imagem svg com detalhes de circulos no fundo`}
              />
              <S.AboutSvg
                className="about-svg-02"
                src={svg02}
                alt={`Pentagono roxo`}
              />
            </S.SvgGroup>
          </S.AboutContainer>
        </>
      </S.AboutWrapper>
    </S.About>
  );
};

export default About;
