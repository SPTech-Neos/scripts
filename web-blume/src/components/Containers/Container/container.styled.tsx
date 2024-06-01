import styled from 'styled-components';

export interface Props {
  children: string | JSX.Element | JSX.Element[];
  className?: string | '';
  direction: "column" | "row";
}

export const Container = styled.div<Props>`
  width: 95%;
  max-width: 1200px;  /* Adjust as needed */
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => props.direction};
`;
