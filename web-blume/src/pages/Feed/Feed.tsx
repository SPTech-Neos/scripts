import React, { useEffect, useState } from "react";

import * as S from "./feed.styled";

import { AuthContextProvider as AuthContextProviderClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextProvider as AuthContextProviderEmployee } from "../../contexts/User/AuthContextProviderEmployee";

import FeedSection from "../../sections/Feed/Feed";
import Searchbar from "../../components/Searchbar/Searchbar";
import Search from "../../sections/Search/Search";
import Sidebar from "../../components/Sidebar/Sidebar";
import Logo from "../../components/Images/Logo/Logo";
import Results from "../../sections/Results/Results";
import { useLocation } from "react-router-dom";
import { EstablishmentAdapter } from "../../adapters/Establishment/Establishment";
import { EstablishmentFullResponseDto } from "../../utils/Establishment/establishment.types";

const Feed: React.FC<S.FeedProps> = () => {
  const establishmentAdapter = new EstablishmentAdapter;

  const location = useLocation();
  const searchResultsHome: EstablishmentFullResponseDto[] = location.state
    ? location.state.searchResults
    : [];

  const searchQueryHome: string = location.state
    ? location.state.searchQuery
    : "";

  const [searchQuery, setSearchQuery] = useState(searchQueryHome);
  const [searchResultsEstablishment, setSearchResultsEstablishment] = useState<EstablishmentFullResponseDto[]>(searchResultsHome);
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearchClick = () => {
    setSearchClicked(true);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const fetchEstablishments = async () => {
    try {
        const results = await establishmentAdapter.getAllEstab();
        if (results) {
            console.log(`RESULTADOS PESQUISA: ${JSON.stringify(results)}`)
            setSearchResultsEstablishment(results);
        }
    } catch (error) {
        console.error("Failed to fetch establishments:", error);
    }
  };

  const handleResultClick = () => {
    setSearchResultsEstablishment([]);
    
    if (searchQuery) {
        fetchEstablishments();
    }
  };

  useEffect(() => {
    if (searchQueryHome) {
        fetchEstablishments();
    }
  }, [searchQueryHome]);

  return (
    <S.Feed id="feed">
      <AuthContextProviderClient>
        <AuthContextProviderEmployee>
          <Sidebar /> 
        </AuthContextProviderEmployee>
      </AuthContextProviderClient>
        
      <S.Container direction="column">
        <S.Header>
          <S.LogoWrapper>
            <Logo />
          </S.LogoWrapper>

          {/* <Link href="/auth?mode=login">
                        <S.PrimaryButton width="180px" size="md">Entrar</S.PrimaryButton>
          </Link> */}
        </S.Header>

        <>
          <Searchbar
            placeholderText="Salão para cabelos cacheados..."
            value={searchQuery}
            onChange={handleSearchChange}
            onClickSearchbar={handleSearchClick}
            onClick={handleResultClick}
          />
        </>

        {(searchResultsEstablishment.length > 0 || searchResultsHome.length > 0) && searchQuery.length !== 0 ? (
          <Results searchResultsEstablishment={searchResultsEstablishment} />
        ) : searchClicked || searchQuery.length === 1 ? (
          <Search searchQuery={searchQuery} />
        ) : (
          <FeedSection />
        )}
      </S.Container>
    </S.Feed>
  );
};

export default Feed;
