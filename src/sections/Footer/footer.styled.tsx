import styled from 'styled-components';

import importedContainer from '../../components/Containers/Container/Container';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { device } from '../../styles/breakpoints.styled';

export interface FooterProps {
      
}


export const Footer = styled.section<FooterProps>`
      width: 100%;
      height: 100vh;
      max-height: 420px;

      @media ${device.tablet} {
            max-height: 650px;
      }
`;

export const Container = styled(importedContainer)`
      height: 100%;
      justify-content: space-around;
`;

export const Row = styled.div`
      
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      &.h-75 {
            width: 100%;
            height: 75%;
            position: relative;
      }

      &.h-25 {
            width: 100%;
            border-top: 3px solid var(--color-gray-500);
            justify-content: space-between;
            height: 25%;
      }

      @media ${device.tablet} {
            flex-direction: column;

            &.h-75 {
                  width: 100%;
                  height: 50%;
                  position: relative;
            }

            &.h-25 {
                  height: 20%;
                  padding: 20px 0;
                  gap: 30px;
            }
      }
`

export const ColGroup = styled.div`
      width: 100%;
      height: 200px;
      display: flex;
      align-items: start;
      justify-content: start;
      gap: 50px;

      position: relative;

      @media ${device.tablet} {
            flex-direction: column;
            align-items: center;
            justify-content: center;

            height: 100%;
      }
`;

export const Col = styled.div`
      width: 100%;
      max-width: 180px;

      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;

      gap: 20px;

      &.align-center {
            height: 100%;
            align-items: center;
      }

      &.mr-100 {
            margin-right: 100px;
      }

      @media ${device.tablet} {
            justify-content: center;
            max-width: 130px;
            
            &.align-center {
                  height: 10%;
                  align-items: center;
                  justify-content: center;
            }

            &.mr-100 {
                  margin-right: 0;
            }
      }
`

export const SvgGroup = styled.div`
      display: flex;
      gap: 10px;
`;

// COMPONENTIZAR DEPOIS

export const NavList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const NavItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    font-family: "Josefin Sans";
    font-weight: 300;
    font-size: 20px;
`;

export const NavLink = styled(RouterNavLink)`
    color: var(--color-gray-900);
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
        color: var(--color-gray-900);
        background-color: var(--color-violet-100);
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
