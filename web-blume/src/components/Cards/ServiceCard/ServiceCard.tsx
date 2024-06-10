import React from "react";
import * as S from "./serviceCard.styled";
import Rating from "../../Rating/Rating";

export const ServiceCard: React.FC<S.serviceProps> = ({id, nome, valor, img, theme, onclick}) => {
    const handleCardClick = () => {
        window.location.href = `/details/service/${id}`;
    };

    return (
        <S.CardBody id={id} onclick={onclick} theme={theme} onClick={handleCardClick}>
            <S.CardImg>
                <S.ImgService img={img}></S.ImgService>
            </S.CardImg>
            <S.CardInfo>
                <Rating></Rating>
                <span>
                    {nome}
                </span>
                <span>
                    R$ {(valor)?.toFixed(2)}
                </span>
            </S.CardInfo>
        </S.CardBody>
    );
}

export const ProductCard: React.FC<S.serviceProps> = ({id, nome, valor, img, onclick}) => {
    const handleCardClick = () => {
        window.location.href = `/details/product/${id}`;
    };

    return (
        <S.CardBody id={id} onclick={onclick} onClick={handleCardClick}>
            <S.CardImg>
                <S.ImgService img={img}></S.ImgService>
            </S.CardImg>
            <S.CardInfo>
                <span>
                    {nome}
                </span>
                <span>
                    R$ {(valor)?.toFixed(2)}
                </span>
            </S.CardInfo>
        </S.CardBody>
    );
}
