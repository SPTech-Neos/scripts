import styled from 'styled-components';

import svg01 from '../../../assets/icon-profile.png';

export interface ProfileProps {
    background?: string;
}

export const HeaderBody = styled.div`
    width: 100%;
    height: 8vh;
    position: fixed;
    background-color: #FAFAFA;
    padding-left: 80px;

    -webkit-box-shadow: 5px 0px 20px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 5px 0px 20px 0px rgba(0,0,0,0.25);
    box-shadow: 5px 0px 20px 0px rgba(0,0,0,0.25);
    
`;

export const ContainerImg = styled.div<ProfileProps>`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-image: url(${(props) => props.background || svg01});
    background-size: cover;
    display: flex;
    
    
    
`;

export const ContainerSelect = styled.div`
    width: 23%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 20px;

`;

export const SelectEmpresa = styled.select`
    width: 150px;
    height: 30px;
    font-size: 15px;
    text-align: center;
    background: none;
`;