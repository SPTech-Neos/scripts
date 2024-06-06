import React from "react";

import * as S from  './tabOption.styled';

interface Props {
    id?: string;
    titulo: string;
    className: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void | null | JSX.Element | JSX.Element[];  
}

const TabOption: React.FC<Props> = ({ id, titulo, className, onClick}) => (
    <S.TabOption className={className} id={id} onClick={onClick}>
        {titulo}
    </S.TabOption>
);

export default TabOption;