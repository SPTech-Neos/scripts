import React from "react";

import * as S from './avaliationBadge.styled';

type props = {
    children?: string | JSX.Element[],
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void | null | JSX.Element | JSX.Element[]
}

const AvaliationBadge: React.FC<props> = ({children, onClick}) => (
    <S.BadgeBody onClick={onClick}>
        {children}
    </S.BadgeBody>
);

export default AvaliationBadge;