import styled from 'styled-components';

import { MagnifyingGlass as ImportedMagnifyingGlass } from "@phosphor-icons/react";
import { device } from '../../styles/breakpoints.styled';

export const InputContainer = styled.div`
    width: 100%;
    max-width: 1102px;
    height: 60px;
    background-color: var(--color-gray-200);
    border-radius: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media ${device.tablet} {
        justify-content: space-between;
        padding: 0 10px;
    }
`;

export const InputSearch = styled.input`
    width: 70%;
    background: none;
    outline: none;
    border: none;
    font-size: 18px;
    font-family: 'Inter', sans-serif;

    @media ${device.tablet} {
        width: 100%;
        font-size: 16px;
    }
`;

export const IconSearchBar = styled.i`
    color: var(--color-gray-700);
`;

export const ButtonSearchBar = styled.button`
    color: var(--color-gray-700);
    background: none;
    border: none;
    
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    text-transform: uppercase;

    position: relative;
    cursor: pointer;
    transition: .25s;
    padding-left: 12px;

    &:hover {
        opacity: 0.8;
    }

    &::before {
        content: "";
        background-color: var(--color-gray-500);
        width: 2px;
        height: 40px;
        display: flex;
        position: absolute;
        left: 0;
        top: -10px;
    }
`;

export const MagnifyingGlass = styled(ImportedMagnifyingGlass)`
    width: 25%;
    color: var(--color-gray-700);
    background: none;
    border-left: 2px solid var(--color-gray-500);
    
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    text-transform: uppercase;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    cursor: pointer;
    transition: .25s;

    &:hover {
        opacity: 0.8;
    }

`;
