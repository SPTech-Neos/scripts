import React from "react";
import * as S from './mainCard.styled';
// import Calendario from '../../assets/Calendar-amico 2.png';
const MainCard:React.FC<S.MainCardProps> = ({ children }) => 
(
    <S.MainCard>
       { children }
    </S.MainCard>

);

export default MainCard;
