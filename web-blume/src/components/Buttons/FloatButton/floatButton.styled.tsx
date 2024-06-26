import styled from 'styled-components';
import { colors as c} from '../../../styles/Colors';

export interface FloatButtonProps {
    children: string | JSX.Element | JSX.Element[] | Element | Element[];
    href: string;
    //   props
}

export const FloatButton = styled.a<FloatButtonProps>`

    background: none;
    border: none;
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 600;
    color: ${c.violet900};
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 50px;
    left: 50px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        // transform: translateX(-10px);
    }

`;