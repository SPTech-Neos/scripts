import React from 'react';

import * as S from "./checkbox.styled";


const Checkbox:React.FC<S.CheckboxProps> = ({ color }) => {
    return (
        <S.CheckboxRoot color={color}>
            <S.CheckboxIndicator color={color}/>
        </S.CheckboxRoot>
    );
}

export default Checkbox;