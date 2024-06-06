import styled from 'styled-components';

import ImportedContainer from '../../components/Containers/Container/Container';
import { PrimaryButton as ImportedPrimaryButton } from '../../components/Buttons/DefaultButton/defaultButton.styled';

export interface Props {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  direction: "column" | "row";
}

export interface FeedProps {
    searchQuery?: string;
}

export const Feed = styled.section<FeedProps>`
    min-height: 100vh;
    display: flex;
`;

export const Container = styled(ImportedContainer)`
    width: 80%;
    max-width: 1200px;
    justify-content: start;
    gap: 50px;
`;

export const Header = styled.header`
    width: 100%;
    height: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
`;

export const LogoWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PrimaryButton = styled(ImportedPrimaryButton)`
    position: absolute;
    right: 0;
`;