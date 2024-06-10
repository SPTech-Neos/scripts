import styled from "styled-components";
import { colors as c } from "../../../styles/Colors";

export interface propsCard {
    id?: number,
    tipoCard?: 'adicionar' | 'funcionario',
    imgUrl?: string,
    nome?: string,
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void | null | JSX.Element | JSX.Element[]
    
}

export const CardContainer = styled.div<propsCard>`
    width: 280px;
    height: 200px;
    background-color: ${c.gray100};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:20px;
    box-shadow: 0px 0px 10px 5px ${c.gray300};

    &:hover{
        cursor: pointer;
        background-color: ${c.gray200};
    }

    & h2{
        font-size:20px;
    }
`;

export const CardBody = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProfileImg = styled.div<propsCard>`
    width: 90px;
    height: 90px;   
    border-radius: 100%;
    background: ${c.gray900} center 100% / 100% 100% no-repeat url(${(props) => props.imgUrl});;
`;
