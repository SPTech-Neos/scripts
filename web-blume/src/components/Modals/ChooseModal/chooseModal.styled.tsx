import styled from 'styled-components';
import { colors as c } from '../../../styles/Colors';
import { X } from 'phosphor-react';
export interface SelectEmployee {
    id: number | string,
    onclick?: () => void
}

export const ModalSection = styled.div<SelectEmployee>`
    width: 120%;
    height: 100vh;
    background-color: #30303065;
    position: fixed;
    z-index: 3;
    display: none;
    justify-content: center;
    align-items: center;

`;

export const ModalContainer = styled.div`
    width: 70%;
    height: 80%;
    display: flex;
    background-color: ${c.gray100};
    border-radius: 10px;
`;

export const ModalBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    & h2{
        width: 45%;
    }
`;

export const EmployeeContainer = styled.div`
    width: 80%;
    height: 85%;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const EmployeeChoiceContainer = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & .active{
        background-color: ${c.violet50}; 
    }

`;

export const ProfileEmployee = styled.div<SelectEmployee>`
    width: 180px;
    height: 200px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    &:hover{
        cursor: pointer;
        background-color: ${c.violet50};
    }
`;

export const ProfileImg = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: ${c.gray500};
`;

export const CloseModal = styled(X)`
    top: 10px;
    left: 48%;
    position: relative;

    &:hover{
        cursor: pointer;
    }
`;