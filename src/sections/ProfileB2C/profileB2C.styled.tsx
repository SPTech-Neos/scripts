import styled from 'styled-components';

import Container from '../../components/Containers/Container/Container';
import { WarningButton } from '../../components/Buttons/DefaultButton/DefaultButton';
import { DangerButton } from '../../components/Buttons/DefaultButton/DefaultButton';

export const ContainerProfile = styled(Container)`
    max-width: 100%;
    height: 100%;
    margin-right: 0px;
    margin-left: 5%;
    justify-content: start;
    font-family: 'Poppins';
    gap: 15px;

`;  

export const HeaderProfile = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    gap: 33.5%;
    align-items: center;
    padding-right: 25px;
`;

export const ProfileContainer = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: column;

    &>div{
        justify-content: end;
        padding-left: 30px;
    }

    &>h1{
        padding-right: 25px;
        font-size: 28px;
    }

    &>div>div>h1{
        padding-left: 25px;
        font-size: 28px;
    }
`;

export const InfoContainer = styled.div`
    width: 100%;
    height:40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const Infos = styled.div`
    width: 60%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-weight: bold;
`;

export const LabelInfo = styled.span`
    font-size: 12px;
    color: var(--color-violet-800);
`;

export const TextInfo = styled.span`
    font-size: 18px;
`;

export const ContainerTitle = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;

`;

export const ContainerAtencao = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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