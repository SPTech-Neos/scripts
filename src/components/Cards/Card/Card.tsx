import React from "react";
import * as S from './card.styled';
// import Calendario from '../../assets/Calendar-amico 2.png';
const Card:React.FC<S.Props> = ({children, titulo, texto}) => 
(
    <S.Card>
        <S.CardLogo>
            {children}
        </S.CardLogo>
        <S.CardBody>

            <S.CardBodyTitle>
                {titulo}
            </S.CardBodyTitle>

            <S.CardBodyText>
                {texto}   
            </S.CardBodyText>
                
        </S.CardBody>
    </S.Card>

);


export default Card;
