import styled from 'styled-components';
import { colors as c } from '../../styles/Colors';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const NavContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    backdrop-filter: blur( 8px );
    -webkit-backdrop-filter: blur( 8px );
    background: rgba( 255, 255, 255, 0.15 );
    /* background-color: red; */
`;

export const NavLogo = styled.div`
    width: 10%;
    height: 50px;
    background-color: yellow;
`;

export const Row = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
`;

export const NavList = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin: 0 10%;
`;

export const NavItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Josefin Sans";
    font-weight: 300;
    font-size: 20px;
`;

export const NavLink = styled(RouterNavLink)`
    color: ${c.gray900};
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: relative;

    &::before {
        content: '';
        position: absolute;
        padding: 0 5px;
        width: 100%;
        height: 4px;
        border-radius: 4px;
        color: ${c.gray900};
        background-color: ${c.violet100};
        bottom: -10px;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }

    &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }
`;

export const NavLogin = styled.div`
    width: 17%;
    height: 50px;
    display: flex;
    justify-content: center;
`;

