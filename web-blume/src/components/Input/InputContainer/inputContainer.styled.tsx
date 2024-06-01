import styled from 'styled-components';
import { colors as c } from '../../../styles/Colors';

export interface InputContainerProps {
    children: string | JSX.Element | JSX.Element[];
    label: string;
    type: string;
    placeholder: string;
    value?: string;
}

export const InputContainer = styled.div`
    background-color: ${c.gray100};
    // margin: 25px 0;
    width: 100%;
    font-size: 14px;
    font-family: 'Josefin Sans', 'Arial';
    color: ${c.gray900};

`;