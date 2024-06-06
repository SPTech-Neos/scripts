import React from "react";
import * as S from './icon.styled';

const Icon: React.FC<S.IconProps> = ({ weight, route, children }) => {
    return (
        <S.IconLink href={route}>
            <S.Icon weight={weight}>
                {children}
            </S.Icon>
        </S.IconLink>

    );
}

export default Icon;