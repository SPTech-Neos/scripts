import React from "react";
import * as S from './label.styled';

const Label: React.FC<S.LabelProps> = ({ label }) => {
    return (
        <S.Label>{label}</S.Label>
    );
}

export default Label;