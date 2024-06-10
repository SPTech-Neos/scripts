import styled from 'styled-components';
import { colors as c } from '../../../styles/Colors';

export type Props = {
    id?: string;
    tipo?: string | null | undefined;
}


export const EditModalContainer = styled.div<Props>`
    width: 120%;
    height: 100vh;
    background-color: #30303065;
    position: fixed;
    z-index: 3;
    display: none;
    justify-content: center;

    &.active {
        display: flex;
    }
`;

export const EditModalBody = styled.div`
    width: 70%;
    height: 75vh;
    background-color: #FAFAFA;
    position: fixed;
    top: 15%;
    border-radius: 20px;
    z-index: 4;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

`;

export const ContainerAtencao = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    
`;

export const TracoAtencao = styled.div`
    width: 30%;
    height: 2px;
    background-color: ${c.gray900};
    border-radius: 5px;
`;

export const TitleAtencao = styled.h4``;

export const InputWrapper = styled.div`
    width: 80%;
    height: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

`;