import styled from 'styled-components';
import { colors as c } from "../../../styles/Colors";

export interface InputContainerProps {
    children: string | JSX.Element | JSX.Element[];
}

export const InputContainer = styled.div`
    // margin: 25px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;