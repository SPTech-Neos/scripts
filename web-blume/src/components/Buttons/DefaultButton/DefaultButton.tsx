import React from "react";
import * as S from './defaultButton.styled';

export const PrimaryButton: React.FC<S.PrimaryButtonProps> = ({ onClick, color, width, size, children }) => {
    return (
        <S.PrimaryButton onClick={onClick} color = {color} width={width} size={size}>{children}</S.PrimaryButton>
    );
}

export const DangerButton: React.FC<S.PrimaryButtonProps> = ({ onClick, color, width, size, children }) => {
    return (
        <S.DangerButton onClick={onClick} color = {color} width={width} size={size}>{children}</S.DangerButton>
    );
}

export const WarningButton: React.FC<S.PrimaryButtonProps> = ({ onClick, color, width, size, children }) => {
    return (
        <S.WarningButton onClick={onClick} color = {color} width={width} size={size}>{children}</S.WarningButton>
    );
}

export const MoveButton: React.FC<S.MoveButtonProps> = ({ moveTo, children }) => {
    return (
        <S.MoveButton href={moveTo}>
            {children}
        </S.MoveButton>
    );
}

