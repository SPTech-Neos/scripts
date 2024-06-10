import React from 'react';
import * as S from './results.styled';
import { EstablishmentFullResponseDto, EstablishmentResponseDto } from '../../utils/Establishment/establishment.types';
import { SecondaryTitle } from '../../components/Texts/Title/Title';
import { PrimaryCardResult, SecondaryCardResult, ServiceCardResult } from '../../components/Cards/CardFeedResult/CardFeedResult';
import { FilterResponseDto } from '../../utils/Filter/filters.types';

interface SearchProps {
  searchResultsEstablishment?: EstablishmentFullResponseDto[];
}

const Results: React.FC<SearchProps> = ({ searchResultsEstablishment }) => {
  if (!searchResultsEstablishment) {
    return <div>Nenhum resultado encontrado.</div>;
  }
  
  return (
    

    <S.Results>

      <S.BestResults>

      <S.Col>
        <SecondaryTitle>Melhor Lugar</SecondaryTitle>
        {searchResultsEstablishment.slice(0, 1).map((result) => {
          const establishments = result.establishment;

          if (!establishments) return null;
          const establishmentsArray: EstablishmentResponseDto[] = Array.isArray(establishments) ? establishments : [establishments];
              
          const filters = result.filters;
          const tags: string[] = Array.isArray(filters)
              ? filters.slice(0, 2).map((filter: FilterResponseDto) => filter.service.specification)
              : [];

          return (
            <PrimaryCardResult
                key={establishmentsArray[0].id}
                id={establishmentsArray[0].id}
                imgUrl={establishmentsArray[0].imgUrl}
                name={establishmentsArray[0].name}
                servicesName={tags}
            />
          );
      })}
    </S.Col>



    <S.Col>
      <SecondaryTitle>Melhor Serviço</SecondaryTitle>
      {(() => {
        let validFilters: FilterResponseDto[] = [];

        // Reduz os resultados para coletar os filtros válidos
        searchResultsEstablishment.forEach((result) => {
          const establishment = result.establishment;
          if (!establishment) return;

          const filters = result.filters;

          // Verifica se filters é um array e filtra os que têm um serviço válido
          const currentValidFilters: FilterResponseDto[] = Array.isArray(filters)
            ? filters.filter((filter: FilterResponseDto) => filter.service)
            : [];

          // Adiciona os filtros válidos ao array acumulador
          validFilters = validFilters.concat(currentValidFilters);
        });

        // Verifica se há filtros válidos e renderiza o componente ServiceCardResult
        if (validFilters.length > 0) {
          return (
            <ServiceCardResult
              filters={validFilters}
            />
          );
        } else {
          return null;
        }
      })()}
    </S.Col>




    </S.BestResults>

      <S.MoreResults>
        <SecondaryTitle> Outros resultados </SecondaryTitle>
        <S.MoreResultsContainer>
          {searchResultsEstablishment.map((result) => {
            const establishments = result.establishment;

            if (!establishments) return null;
            const establishmentsArray: EstablishmentResponseDto[] = Array.isArray(establishments) ? establishments : [establishments];

            return establishmentsArray.map((establishment) => {
                
                const filters = result.filters;
                const tags: string[] = Array.isArray(filters)
                    ? filters.slice(0, 2).map((filter: FilterResponseDto) => filter.service.specification)
                    : [];

                return (
                    <SecondaryCardResult
                        key={establishment.id}
                        id={establishment.id}
                        imgUrl={establishment.imgUrl}
                        name={establishment.name}
                        servicesName={tags}
                    />
                );
            });
          })}
        </S.MoreResultsContainer>
      </S.MoreResults>
    </S.Results>
  );
};

export default Results;