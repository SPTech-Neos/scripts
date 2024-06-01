import styled from 'styled-components';
import { colors as c} from '../../styles/Colors';
import * as Checkbox from '@radix-ui/react-checkbox';

export interface CheckboxProps {
    color: "violet" | "green";
}

export const CheckboxRoot = styled(Checkbox.Root)`
    background: none;
    width: 12px;
    height: 12px;

    border: 1px solid ${c.gray900};
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0 2px 10px ${c.gray900};
    transition: 0.2s;

    &:hover {
        background-color: ${(props) => props.color == "violet" ? c.violet800 : c.green800};
        border: none;
        cursor: pointer;
    }
        
    &:focus {
        background-color: ${(props) => props.color == "violet" ? c.violet800 : c.green800};
        border: none;
    }
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)`
    color: ${(props) => props.color == "violet" ? c.violet50 : c.green100};
`;