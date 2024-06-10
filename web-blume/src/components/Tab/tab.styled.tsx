import styled from "styled-components";
import Container from "../Containers/Container/Container";
import { EstablishmentFullResponseDto } from "../../utils/Establishment/establishment.types";

export interface SectionProps {
    result?: string;
    theme?: 'client' | 'establishment' | string;
    establishmentInfo?: EstablishmentFullResponseDto;
}


export const ContainerTab = styled(Container)`
    width: 100%;
    height: 55vh;
    justify-content: space-around;
`;

export const TabHeader = styled.div<SectionProps>`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;

`;

export const TabBody = styled.div`
    width: 100%;
    height: 80%;    
    display: flex;
    align-items: center;
    justify-content: center;

    // &>div {
    //     width: 60px;
    //     height: 40px;
    // }
`;  

export const ResultBody = styled.div`
    width: 100%;
    height: 95%;
    display: flex;
`;
