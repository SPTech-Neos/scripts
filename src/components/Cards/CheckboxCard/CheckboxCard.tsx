import React from "react";
import * as S from './checkboxCard.styled';
import Subtitle from "../../Texts/Subtitle/Subtitle";

import Checkbox from "../../Checkbox/Checkbox";

const CheckboxCard:React.FC<S.CheckboxCardProps> = ({titulo, imgSrc, bgColor, onClick}) => {
   
    return (
        <S.CheckboxCardWrapper bgColor={bgColor}>
            <S.CardCheckbox onClick={onClick}>
                <Checkbox color={bgColor}/>
            </S.CardCheckbox>

            <S.CheckboxCardContainer>
                <S.CheckboxCardImg 
                    src={imgSrc}
                    alt={`Imagem de escolha ${titulo}`}
                />
                <Subtitle weight={600}>{titulo}</Subtitle>
            </S.CheckboxCardContainer>
        </S.CheckboxCardWrapper>

    );
};


export default CheckboxCard;
