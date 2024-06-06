import styled from 'styled-components';

import ImportedContainer from '../../Containers/Container/Container';

export interface CardProps {

}

export const CardWrapper = styled.h1<CardProps>`
    width: 100%;
    height: 220px;

    display: flex;
    justify-content: center;
    background-color: var(--color-orange-100);

    border-radius: 16px;

    -webkit-box-shadow: 0 0 32px 0px rgba(243, 191, 142, 0.80);
    -moz-box-shadow: 0 0 32px 0px rgba(243, 191, 142, 0.80);
    box-shadow: 0 0 32px 0px rgba(243, 191, 142, 0.80);
`;

export const CardContainer = styled(ImportedContainer)`
    width: 90%;
    height: 100%;

    display: flex;
    justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Column = styled.div`
  width: 33%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  flex-wrap: wrap;

  position: relative;

  & > span {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

`; 

export const CardImg = styled.img`
  position: absolute;
  top: -20%;
  right: 50%;
  transform: translateX(50%);
`;