import React from "react";
import * as S from "./serviceCard.styled";
import Rating from "../../Rating/Rating";

export const ServiceCard: React.FC<S.serviceProps> = ({id, nome, valor, img, theme, onclick}) => {
    return (
        <S.CardBody id={id} onclick={onclick} theme={theme}>
            <S.CardImg>
                <S.ImgService img={img}></S.ImgService>
            </S.CardImg>
            <S.CardInfo>
                <Rating></Rating>
                <span>
                    {nome}
                </span>
                <span>
                    R$ {valor}
                </span>
            </S.CardInfo>
        </S.CardBody>
    );
}

export const ProductCard: React.FC<S.serviceProps> = ({id, nome, valor, img, onclick}) => {
    return (
        <S.CardBody id={id} onclick={onclick}>
            <S.CardImg>
                <S.ImgService img={img}></S.ImgService>
            </S.CardImg>
            <S.CardInfo>
                <span>
                    {nome}
                </span>
                <span>
                    R$ {valor}
                </span>
            </S.CardInfo>
        </S.CardBody>
    );
}
