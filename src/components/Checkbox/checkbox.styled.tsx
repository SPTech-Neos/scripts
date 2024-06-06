import styled from 'styled-components';
import * as Checkbox from '@radix-ui/react-checkbox';

export interface CheckboxProps {
    color: "violet" | "green";
}

export const CheckboxRoot = styled(Checkbox.Root)`
    background: none;
    width: 12px;
    height: 12px;

    border: 1px solid var(--color-gray-900);
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0 2px 10px var(--black-a7);
    transition: 0.2s;

    &:hover {
        background-color: ${(props) => props.color == "violet" ? "var(--color-violet-800)" : "var(--color-green-800)"};
        border: none;
        cursor: pointer;
    }
        
    &:focus {
        background-color: ${(props) => props.color == "violet" ? "var(--color-violet-800)" : "var(--color-green-800)"};
        border: none;
    }
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)`
    color: ${(props) => props.color == "violet" ? "var(--color-violet-50)" : "var(--color-green-100)"};
`;