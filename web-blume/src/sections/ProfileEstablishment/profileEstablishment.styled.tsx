import styled from "styled-components";
import Container from "../../components/Containers/Container/Container"
import Search from "../../components/Searchbar/Searchbar";
import { colors as c } from '../../styles/Colors';
import Profile from '../../components/Profile/Profile';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { Star } from "phosphor-react";

import {DangerButton, WarningButton} from '../../components/Buttons/DefaultButton/DefaultButton';

export const Searchbar = styled(Search)`   
`

export const ProfileB2BSection = styled.section`
    width: 100%;
    height: 100vh;
    font-family: 'Poppins' ;

`;

export const HeaderProfile = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 45%;
`;

export const Perfil = styled(Profile)`

`;


export const ContainerProfile = styled(Container)`
    height: 100%;
    padding-top: 50px;
    padding-left: 20px;
    justify-content: start;

`;

export const PerfilContainer = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;

`;

export const StarImg = styled(Star)`
    color: black;
`;

export const AvaliacaoContainer = styled.div`
    width: 30%;
    height: 100%;    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    
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
    background-color: ${c.gray900};
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

export const NavBody = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: ${c.violet100};
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const NavItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    font-size: 20px;
    
    `;

export const NavLink = styled(RouterNavLink)`
    color: white;
`;
