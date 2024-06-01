// TO REDO
import React from "react";
import * as S from './selectAcc.styled';
import { colors as c} from '../../../styles/Colors';
import ColorContainer from "../../../components/Containers/ColorContainer/ColorContainer";

const SelectAcc: React.FC<S.SelectAccProps> = ({ intention }) => {
    console.log(intention)
    return (
        <>
            <ColorContainer bgColor={c.gradientDefault}>
                Teste
            </ColorContainer>
        </>
    );
}

export default SelectAcc;