import React from "react";

import * as S from './inputContainer.styled';

const InputContainer: React.FC<S.InputContainerProps> = ({ children }) => {
    return (
        <S.InputContainer>
            {children}
        </S.InputContainer>
    );
}
export default InputContainer;