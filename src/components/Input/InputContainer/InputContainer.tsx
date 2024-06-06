import React from "react";

import Label from '../Label/Label';

import * as S from './InputContainer.styled';

const InputContainer: React.FC<S.InputContainerProps> = ({ label, children }) => {
    return (
        <S.InputContainer>
            <Label label={label}></Label>
            {children}
        </S.InputContainer>
    );
}

export default InputContainer;