// TO REDO
import React from "react";
import * as S from './selectAcc.styled';
import { Colors } from "../../../styles/Colors";
import ColorContainer from "../../../components/Containers/ColorContainer/ColorContainer";

const SelectAcc: React.FC<S.SelectAccProps> = ({ intention }) => {
    console.log(intention)
    return (
        <>
            <ColorContainer bgColor={Colors.gradientDefault}>
                Teste
            </ColorContainer>
        </>
    );
}

export default SelectAcc;