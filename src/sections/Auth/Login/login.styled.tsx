import styled from 'styled-components';

export interface LoginProps {
    imgUrl: string;
    bgColor?: string | '#FFF';
    imgAlt: string | 'Imagem';
    children?: string | JSX.Element | JSX.Element[];
}

export const Login = styled.main<LoginProps>`
    height: 100vh;
    width: 100%;
    background-color: var(--color-gray-100);
    display: flex;
    // align-items: center;
    // justify-content: center;
`;
