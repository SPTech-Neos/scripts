import styled from 'styled-components';
import { colors as c } from '../../../styles/Colors';

import { X } from 'phosphor-react';

export const ModalSection = styled.section`
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 2;
    background-color: #0000006f;
    display: none;  
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.div`
    width: 50%;
    height: 85%;
    background-color: ${c.gray100};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ModalHeader = styled.div`
    width: 100%;
    height: 23%;
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: column;
`;

export const ModalImage = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 100%;
    background-color: black;
    position: absolute;
    top: 10px;
`;

export const ModalBody = styled.div`
    width: 70%;
    height: 75%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

export const Label = styled.span`
    font-size: 20px;
`;

export const InputContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
`;

export const CloseModal = styled(X)`
    top: 10px;
    left: 48%;
    position: relative;

    &:hover{
        cursor: pointer;
    }
`;

export const ButtonsContainer = styled.div`
    width: 80%;
    height: 15%;
    display: flex;
    justify-content: space-around;
    align-items: end;

    & button{
        background-color: ${c.green300};
        box-shadow: 0px 0px 20px ${c.green300};

        &:hover{
            background-color: ${c.green500};
        }
    }
`;

export const ReturnButton = styled.div`
    width: 90px;
    height: 35px;
    color: ${c.green300};
    text-transform: uppercase;
    font-size: 20px;
    display: flex;
    justify-content: center;
    font-weight: 600;
    border-bottom: 3px solid ${c.green300};

    &:hover{
        cursor: pointer;
        color: ${c.green500};
        border-bottom: 3px solid ${c.green500};
    }
`

export const SelectType = styled.select`
    font-family: "Poppins";
    width: 100%;
    border: 3px solid black;
    height: 40px;
    padding-left: 20px;
    color: ${c.gray500};
    font-size: 17px;

    & option {
        color: black;
    }



`;