import styled from 'styled-components';
import { colors as c, Themes } from '../../../styles/Colors';

export interface serviceProps {
    id?: number,
    nome?: string,
    valor?: number,
    img?: string,
    theme?: string,
    onclick?: () => void;
}


function getTheme(theme: string) {
    return theme === "client"? Themes.client : Themes.establishment;
}

export const CardBody = styled.div<serviceProps>`
    width: 280px;
    height: 100px;
    display: flex;
    flex-direction: row;
    border-radius: 15px;
    box-shadow: 0px 0px 8px ${c.gray500};
    color: ${(props) => getTheme(props.theme).mainColor};

    &:hover{
        cursor: pointer;
    }
`;

export const CardImg = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardInfo = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
    align-items: center;
    font-weight: bold;

    &>span{
        color: black;
        font-size: 15px;
    }
`;  

export const ImgService = styled.div<serviceProps>`
    width: 80%;
    height: 70px; 
    background: ${c.gray200} url(${(props) => props.img});
    border-radius: 5px;

`;