import React from "react";

import { useMediaQuery } from 'react-responsive';
import { device } from "../../styles/breakpoints.styled";

import * as S from './searchbar.styled';

// import { MagnifyingGlass } from "@phosphor-icons/react";

type Props = {
    placeholderText: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | null;
    onClickSearchbar?: (event: React.MouseEvent<HTMLInputElement>) => void | null;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | null;
}

const Searchbar: React.FC<Props> = ({placeholderText, value, onChange, onClickSearchbar, onClick}) => {
    const isTabletOrMobile = useMediaQuery({ query: device.tablet });

    return (
        <S.InputContainer onChange={onChange}>

            {isTabletOrMobile ? null : <S.SearchMagnifyingGlass size={32} className="icon-search-bar"/> }
            <S.InputSearch type="text" placeholder={placeholderText} onClick={onClickSearchbar} value={value}/>
            {isTabletOrMobile ? 
                <S.MagnifyingGlass size={24} className="icon-search-bar"/> : 
                <S.ButtonSearchBar onClick={onClick}>Encontrar</S.ButtonSearchBar>
            }
        </S.InputContainer>
    )
};

export default Searchbar;