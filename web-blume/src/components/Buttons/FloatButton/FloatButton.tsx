import React from "react";
import * as S from './floatButton.styled';

export const FloatButton: React.FC<S.FloatButtonProps> = ({ children }) => {
    return (
        <S.FloatButton>{children}</S.FloatButton>
    );
}
