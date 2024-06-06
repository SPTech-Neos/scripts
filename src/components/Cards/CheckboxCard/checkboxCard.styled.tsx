import styled from 'styled-components';

// import { device } from '../../../styles/breakpoints.styled';

export interface CheckboxCardProps {
    titulo: string;
    imgSrc: string;
    bgColor: "violet" | "green";
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void | null | JSX.Element | JSX.Element[];  
}

export interface CheckboxCardWrapperProps {
    bgColor: "violet" | "green";
}

export const CheckboxCardWrapper = styled.div<CheckboxCardWrapperProps>`
    width: 100%;
    max-width: 225px;
    height: 225px;

    background: ${(props) => props.bgColor == "violet" ? "var(--color-violet-50)" : "var(--color-green-100)"};
    border-radius: 8px;

    position: relative;
`;

export const CheckboxCardContainer = styled.div`
    width: 90%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const CheckboxCardImg = styled.img`

`;

export const CardCheckbox = styled.div`
    position: absolute;

    border: 1px solid var(--color-gray-900);
    border-radius: 50px;

    padding: 5px;

    right: 10px;
    top: 10px;
`;