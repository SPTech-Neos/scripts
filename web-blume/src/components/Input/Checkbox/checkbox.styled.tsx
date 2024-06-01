import styled from 'styled-components';
import { colors as c } from '../../../styles/Colors';

export interface CheckboxProps {
    label: string;
    checked?: boolean | false;
}

export const Checkbox = styled.div<CheckboxProps>`

    display: flex;
    align-items: center;
    font-family: 'Inter';

    & input[type = checkbox] {

        accent-color: ${c.violet500};
        border-radius: none;
        width: 21px;
        height: 21px;
        color: ${c.gray100};
        cursor: pointer;

    }


`;