import styled from 'styled-components';
import { Themes, colors as c } from '../../styles/Colors';

export interface Props {
    id?: string;
    titulo: string;
    className: string;
    theme?: 'client' | 'establishment' | string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void | null | JSX.Element | JSX.Element[];  
}

function getTheme(theme: string) {
    return theme === "client"? Themes.client : Themes.establishment;
}


export const TabOption = styled.div<Props>`
    width: 33.3%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid ${c.gray300};

    &:hover{
        cursor:pointer;
        color: ${(props) => getTheme(props.theme).mainColor};;
        border-bottom: 4px solid ${(props) => getTheme(props.theme).mainColor};;
    }

    &.active {
        color: ${(props) => getTheme(props.theme).mainColor};;
        border-bottom: 4px solid ${(props) => getTheme(props.theme).mainColor};;
    }

`;