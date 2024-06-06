import styled from 'styled-components';


export interface Props {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  direction: "column" | "row";
}

export interface FeedProps {
    searchQuery?: string;
}

export const Feed = styled.section<FeedProps>`
    width: 100%;
`;
