import styled, { css } from "styled-components";

import { colors as c } from "../../../styles/Colors";

import { device } from "../../../styles/breakpoints.styled";

import outlineSrc from "../../../assets/title-svg.svg";

export interface TitleProps {
  children: string | string[] | JSX.Element[] | JSX.Element;
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark" | "blue" | undefined;
  outline?: boolean;
  lines?: boolean;
}

const PrimarySizeVariants = {
  sm: {
    fontSize: "2.15rem",
  },
  md: {
    fontSize: "3rem",
  },
  lg: {
    fontSize: "5rem",
  },
};

const themeVariants = {
  light: {
    colorTheme: c.gray100,
  },
  dark: {
    colorTheme: c.gray900,
  },
  // blue: {
  //   colorTheme: "var(--color-blue-100)",
  // },
};

const getColor = (theme: string | undefined): string => {
  if (theme === "light" || theme === "dark") {
    return themeVariants[theme].colorTheme;
  }
  return c.gray900;
};

export const PrimaryTitle = styled.h1<TitleProps>`
  font-family: var(--font-text);
  font-size: ${(props) => PrimarySizeVariants[props.size || "md"].fontSize};
  color: ${(props) => getColor(props.theme)};
  text-transform: uppercase;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2;

  @media ${device.tablet} {
    font-size: ${(props) => props.size === "sm" ? PrimarySizeVariants["sm"].fontSize : PrimarySizeVariants["md"].fontSize};
  }

  @media ${device.mobileL} {
    font-size: ${() => PrimarySizeVariants["sm"].fontSize};
  }

  @media ${device.mobileM} {
    text-wrap: wrap;
  }

  &::before {
    content: "";
    position: absolute;
    width: 110%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    transform: translateX();

    ${(props) =>
      props.outline &&
      css`
        top: 25%;
        background-image: url(${outlineSrc});
    `}
  }
`;

const SecondarySizeVariants = {
  sm: {
    fontSize: "1.30rem",
  },
  md: {
    fontSize: "2rem",
  },
  lg: {
    fontSize: "2.25rem",
  },
};

export const SecondaryTitle = styled.h2<TitleProps>`
  font-family: 'Poppins';
  font-size: ${(props) => SecondarySizeVariants[props.size || "md"].fontSize};
  color: ${(props) => getColor(props.theme)};
  font-weight: bold;
  text-transform: uppercase;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    font-size: ${(props) => props.size === "sm" ? SecondarySizeVariants["sm"].fontSize : SecondarySizeVariants["md"].fontSize};
  }

  @media ${device.mobileL} {
    font-size: ${() => SecondarySizeVariants["sm"].fontSize};
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 15%;
    max-width: 70px;
    height: 2px;
    background-color: ${c.violet300};
  }

  &::before {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &::after {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  ${(props) =>
    !props.lines &&
    css`
      &::before,
      &::after {
        display: none;
      }
    `}

    @media ${device.tablet} {
      &::before {
        display: none;
      }

      &::after {
        width: 100%;
        max-width: none;
        left: 0;
        top: 100%;
      }
    }
`;
