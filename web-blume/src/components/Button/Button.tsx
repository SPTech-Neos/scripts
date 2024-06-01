import React from "react";
import * as S from './button.styled';

export const PrimaryButton: React.FC<S.PrimaryButtonProps> = ({ width, size, children, type, disabled, onClick }) => {
    return (
        <S.PrimaryButton width={width} size={size} type={type} disabled={disabled} onClick={onClick}>{children}</S.PrimaryButton>
    );
}

export const MoveButton: React.FC<S.MoveButtonProps> = ({ moveTo, children }) => {
    return (
        <S.MoveButton href={moveTo}>
            {children}
        </S.MoveButton>
    );
}

