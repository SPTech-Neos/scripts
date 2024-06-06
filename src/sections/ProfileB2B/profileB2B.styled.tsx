import styled from "styled-components";
import Container from "../../components/Containers/Container/Container"

import {DangerButton, WarningButton} from '../../components/Buttons/DefaultButton/DefaultButton';


export const ProfileB2BSection = styled.section`
    width: 100%;
    height: 100vh;
    font-family: 'Poppins' ;

`;

export const ContainerProfile = styled(Container)`
    height: 100%;
    padding-top: 55px;
    padding-left: 45px;
    justify-content: start;

`;

export const ContainerAtencao = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const ContainerTitle = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;

`;

export const TracoAtencao = styled.div`
    width: 30%;
    height: 2px;
    background-color: var(--color-gray-900);
    border-radius: 5px;
`;

export const TitleAtencao = styled.h4``;

export const ContainerAtencaoButtons = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-around;
`;

export const ButtonUpdate = styled(WarningButton)` 

`;

export const ButtonDelete = styled(DangerButton)`
`;
