import styled from 'styled-components';


export interface Props {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  direction: "column" | "row";
}

export const Results = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

export const BestResults = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const Col = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`;

export const MoreResults = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 12px;
`;

export const MoreResultsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
`;
