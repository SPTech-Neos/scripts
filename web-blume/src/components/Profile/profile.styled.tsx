import styled from 'styled-components';
import { colors as c } from '../../styles/Colors';
import Container from '../Containers/Container/Container';

import svg01 from '../.././assets/icon-profile.png';

export interface ProfileProps {
    profile?: string; 
    tipoperfil?: "B2B" | "B2C";
    username: string | null | undefined;
}

export interface ContainerProfileProps {
    profile?: string; 
    tipoperfil?: "B2B" | "B2C";
}

export const ContainerProfile = styled(Container)`
    width: 100%;
    height: 24vh;
    justify-content: start;
`

export const ContainerProfileImg = styled.div<ContainerProfileProps>`
    width: 125px;
    max-width: 110px;
    height: 75%;
    max-height: 110px;
    display: flex;
    border-radius: 100%;
    background-image: url(${(props) => props.profile || svg01});
    background-size: cover;
`

export const ContainerProfileInfo = styled.div`
    width:60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    padding-left: 50px;
    gap: 20px;
    font-family: "Poppins", sans-serif;

`;

export const ContainerTags = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 20px;

`;

export const TagsProfile = styled.div`
    width: 90px;
    height: 40px;
    border-radius: 20px;
    background-color: ${c.gray200};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: bold;
`;