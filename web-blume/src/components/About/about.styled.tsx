import styled from 'styled-components';
import Container from '../Containers/Container/Container';
import svg01 from '../../assets/icon-profile.png';
import { EstablishmentFullResponseDto } from "../../utils/Establishment/establishment.types";

export interface AboutProps {
    imgUrl?: string,
    children?: JSX.Element[] | JSX.Element,
    establishmentInfo: EstablishmentFullResponseDto | null
}


export const AboutContainer = styled(Container)`

`;

export const AboutDesc = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const AboutImage = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;;
    justify-content: center;
    text-align: center;
    gap: 10px;
`;

export const Description = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    text-align: justify;
`;

export const ContainerCategoria = styled.div`
    width: 100%;
    height: 50%;
    gap: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const AboutProfileImg = styled.div<AboutProps>`
    width: 130px;
    height: 130px;
    display: flex;
    border-radius: 100%;
    background-image: url(${(props) => props.imgUrl || svg01});
    background-size: cover;
`