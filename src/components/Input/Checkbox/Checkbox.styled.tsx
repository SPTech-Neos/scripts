import styled from 'styled-components';

export interface CheckboxProps {
    label: string;
    checked?: boolean | false;
}

export const Checkbox = styled.div<CheckboxProps>`

    display: flex;
    align-items: center;
    font-family: 'Inter';

    & input[type = checkbox] {

        accent-color: var(--color-violet-500);
        border-radius: none;
        width: 21px;
        height: 21px;
        color: var(--color-gray-100);
        cursor: pointer;

    }


`;