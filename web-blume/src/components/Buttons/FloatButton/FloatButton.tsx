import React from "react";
import * as S from './floatButton.styled';

export const FloatButton: React.FC<S.FloatButtonProps> = ({ children, href }) => {
    return (
        <S.FloatButton href={href}>{children}</S.FloatButton>
    );
}
