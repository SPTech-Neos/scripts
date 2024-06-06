import React from "react";

import * as S from "./cardPromocional.styled";

import Subtitle from "../../Texts/Subtitle/Subtitle";
import { SecondaryTitle } from "../../Texts/Title/title.styled";

import cardImg from "../../../assets/card-promocional-img.png";

const CardPromocional: React.FC<S.CardProps> = () => {
  return (
    <S.CardWrapper>
      <S.CardContainer direction="row">
        <S.Row>
          <S.Column>
            <span>
              <SecondaryTitle size="sm">Desconto de</SecondaryTitle>

              <SecondaryTitle size="sm" theme={"blue"}>
                Outono/Inverno
              </SecondaryTitle>
            </span>
            <Subtitle weight={600} size={"sm"}>
              EVENTO PROMOCIONAL
            </Subtitle>
          </S.Column>

          <S.Column>
            <Subtitle weight={700} size={"md"}>
              Ofertas de outono/inverno com descontos de até 60% nas lojas a
              seguir
            </Subtitle>
          </S.Column>

          <S.Column>
            <S.CardImg src={cardImg} alt={"Ilustração do card promocional"} />
          </S.Column>
        </S.Row>
      </S.CardContainer>
    </S.CardWrapper>
  );
};

export default CardPromocional;
