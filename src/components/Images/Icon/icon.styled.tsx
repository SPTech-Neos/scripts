import styled from 'styled-components';

export interface IconProps {
    children: string | JSX.Element | JSX.Element[];
    weight?: number | null;
    route?: string;
}

export const Icon = styled.div<IconProps>`
    padding: 5px;
    border: 2px solid var(--color-gray-900);
    border-radius: 30px;
`;

export const IconLink = styled.a`
    color: var(--color-gray-900);
`;