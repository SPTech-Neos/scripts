import styled, { keyframes } from "styled-components";

import { device } from "../../styles/breakpoints.styled";

export interface Props {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  direction: "column" | "row";
}

export const Home = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 725px;
  background-color: #fafafa;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${device.tablet} {
    max-height: 370px;

    & > #navbar {
      display: none;
    }
  }
`;

export const Cabecalho = styled.div`
  width: 100%;
  height: 100%;
  max-height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > .container {
    height: 100%;
    justify-content: center;
    position: relative;
  }
`;

export const TextCabecalho = styled.div`
  max-width: 800px;
  text-align: center;
  margin-bottom: 40px;
`;

const infiniteFloat = keyframes`
  0% {
    bottom: 0%;
  }

  50% {
    bottom: 5%;
  }

  100% {
    bottom: 0%;
  }
`;

export const HomeSvg = styled.img`
  position: absolute;

  &.home-svg-01 {
    top: 0%;
    right: 10%;
  }

  &.home-svg-02 {
    top: 25%;
    left: 0;
  }

  &.home-svg-03 {
    bottom: 0%;
    left: 10%;
    animation: ${infiniteFloat} 2s ease-in-out infinite;
  }

  @media ${device.tablet} {
    &.home-svg-01 {
      top: 10%;
      right: 10%;
      width: 120px;
    }

    &.home-svg-02 {
      top: 30%;
      left: 0;
      width: 100px;
    }

    &.home-svg-03 {
      width: 32px;
      left: 50%;
      transform: translateX(50%);
      right: 50%;
      transform: translateX(-50%);
      animation: ${infiniteFloat} 2s ease-in-out infinite;
    }
  }

  @media ${device.mobileL} {
    &.home-svg-01 {
      top: 17%;
      right: 10%;
      width: 50px;
    }

    &.home-svg-02 {
      top: 38%;
      left: 5%;
      width: 40px;
    }
  }
`;
