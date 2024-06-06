import React, { useState } from "react";

import * as S from "./feed.styled";

import FeedSection from "../../sections/Feed/Feed";
import Searchbar from "../../components/Searchbar/Searchbar";
import Search from "../../sections/Search/Search";
import Sidebar from "../../components/Sidebar/Sidebar";
import Logo from "../../components/Images/Logo/Logo";
import Results from "../../sections/Results/Results";
import { Salon } from "../../utils/salon.types";
import { useLocation } from "react-router-dom";

const Feed: React.FC<S.FeedProps> = () => {
  const location = useLocation();
  const searchResultsHome: Salon[] = location.state
    ? location.state.searchResults
    : [];

    const searchQueryHome: string = location.state
    ? location.state.searchQuery
    : "";

  const [searchQuery, setSearchQuery] = useState(searchQueryHome);
  const [searchResults, setSearchResults] =
    useState<Salon[]>(searchResultsHome);
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearchClick = () => {
    setSearchClicked(true);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleResultClick = () => {
    setSearchResults([{ id: 1, title: "Lirasalon" }]); // quero fazer mockado aqui apenas para teste

    // if (searchQuery) {
    //   fetch(/* Your API endpoint */ /*searchQuery */)
    //     .then(response => response.json())
    //     .then(data => {
    //       setSearchResults(data as Salon[]);
    //     })
    //     .catch(error => {
    //       console.error("Error fetching search results:", error);
    //     });
    // } else {
    //   console.warn("Search query is empty. Please enter a search term.");
    // }
  };

  return (
    <S.Feed id="feed">
      <Sidebar color="var(--color-violet-300)" tipoperfil="B2B"  /> {/*tipo perfil chumbado por enquanto */}

      <S.Container direction="column">
        <S.Header>
          <S.LogoWrapper>
            <Logo />
          </S.LogoWrapper>

          {/* <S.PrimaryButton width="180px">Entrar</S.PrimaryButton> */}
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

        {(searchResults.length > 0 || searchResultsHome.length > 0) && searchQuery.length != 0 ? (
          <Results searchResults={searchResults} />
        ) : searchClicked || searchQuery.length == 1 ? (
          <Search searchQuery={searchQuery} />
        ) : (
          <FeedSection />
        )}
      </S.Container>
    </S.Feed>
  );
};

export default Feed;
