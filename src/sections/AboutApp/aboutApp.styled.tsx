import styled, {keyframes} from 'styled-components';

import importedContainer from '../../components/Containers/Container/Container';
import { device } from '../../styles/breakpoints.styled';

const lightAnimationCombined = keyframes`
    0% {
        top: 5%;
        height: 0;
        background-color: var(--color-violet-100);
    }
    50% {
        height: 40%;
        background-color: var(--color-violet-100);
    }
    100% {
        top: 85%;
        height: 10%;
        background-color: var(--color-violet-100);
    }
`;

export const AboutApp = styled.section`
    width: 100%;
    height: 100vh;
    max-height: 720px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-violet-900);

    @media ${device.tablet} {
        max-height: 600px;
    }
`

export const ContainerWrapper = styled(importedContainer)`
    position: relative;    
    height: 100%;

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 5%;
        width: 2px;
        height: 90%;
        background-color: var(--color-violet-300);
    }

    &::before {
        left: 0;
    }

    &::after {
        right: 0;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 5%;
        width: 2px;
        height: 90%;
        background-color: var(--color-violet-300);
    }

    &::before {
        left: 0;
    }

    &::after {
        right: 0;
    }

    .light-ball-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
    }

    .light-ball {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        animation: ${lightAnimationCombined} 3s 1s linear infinite;
    }

    .light-ball.right {
        right: 0;
    }

    .light-ball.left {
        left: 0;
    }

    @media ${device.tablet} {
        &::before, &::after {
            display: none;
        }

        .light-ball {
            display: none;
        }
    }
`;

export const Container = styled(importedContainer)`
    width: 95%;
    max-width: 800px;
    height: 100%;
    text-align: center;
    justify-content: space-around;
    position: relative;
`;

export const Limiter = styled.span`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const AboutAppImg = styled.img`
    width: 80%;
`;