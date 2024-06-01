import styled from 'styled-components';

export interface AsideImgProps {
    imgUrl: string;
    bgColor?: string | '#FFF';
    imgAlt: string | 'Imagem';
    children?: string | JSX.Element | JSX.Element[];
}

export const AsideImg = styled.aside<AsideImgProps>`
    height: 100vh;
    width: 50%;
    background: ${props => props.bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
`;
