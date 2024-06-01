import React from "react";

import * as S from  './tabOption.styled';


const TabOption: React.FC<S.Props> = ({ id, titulo, className, onClick, theme}) => (
    <S.TabOption titulo={titulo} className={className} id={id} onClick={onClick} theme={theme}>
        {titulo}
    </S.TabOption>
);

export default TabOption;