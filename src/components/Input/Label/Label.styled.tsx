import styled from 'styled-components';

export interface LabelProps {
    label: string;
}

export const Label = styled.span`
    position: relative;
    z-index: 1;
    top: 10px;
    width: auto;

    background-color: var(--color-gray-100);
    margin: 0 25px;
    padding: 0 3px;
    font-size: 14px;
    font-family: 'Josefin Sans', 'Arial';
    color: var(--color-gray-900);
    
    // font-weight: regular;

`;
