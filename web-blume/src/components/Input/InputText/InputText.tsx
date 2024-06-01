import React from "react";
import * as S from './inputText.styled';

const InputText: React.FC<S.InputTextProps> = ({ type = "text", placeholder, value, onChange, ...rest }) => (
    <S.InputText type={type} placeholder={placeholder} value={value} onChange={onChange} {...rest} />
);

export default InputText;   