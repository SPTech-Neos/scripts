import React from "react";
import * as S from './timePick.styled';
type props = {
    children?: string | number;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const TimePick: React.FC<props> = ({children, onClick}) => {
    return(
        <S.TimePickBody onClick={onClick}>
            {children}
        </S.TimePickBody>
    )
}

export default TimePick;