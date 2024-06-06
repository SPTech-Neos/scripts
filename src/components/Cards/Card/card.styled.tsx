import styled from 'styled-components';
import { PrimaryTitle } from '../../Texts/Title/title.styled';
import { device } from '../../../styles/breakpoints.styled';

export interface Props {
    children: string | JSX.Element | JSX.Element[];
    titulo: string;
    texto: string; 
}
export const Card = styled.div`
    width: 75%;
    height: 80%;
    background-color: var(--color-gray-100);
    border: none;
    border-radius: 32px;
    box-shadow: 2px 2px 50px -15px var(--color-gray-700);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.tablet} {
        height: 10%;
        width: 50%
    }

    @media ${device.mobileL} {
        height: 10%;
        width: 80%
    }

`;

export const CardLogo = styled.div`
    width: 100%;
    height: 30%;
    position: relative;
    top: -58px;
    display: flex;
    justify-content: center;

`;

export const CardBody = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
`;

export const CardBodyTitle = styled(PrimaryTitle)`
    font-size: 35px;
`;

export const CardBodyText = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 15px;
    padding: 20px;
`;