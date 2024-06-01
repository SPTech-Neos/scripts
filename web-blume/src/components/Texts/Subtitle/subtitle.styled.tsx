import styled from 'styled-components';
import { colors as c} from '../../../styles/Colors';
import { device } from '../../../styles/breakpoints.styled';

export interface SubtitleProps {
  children: string | JSX.Element | JSX.Element[];
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
  weight?: number;
  display?: boolean;
}

const sizeVariants = {
  smMobile: {
    fontSize: '0.8rem',
  },
  sm: {
     fontSize: '0.875rem',
  },
  md: {
     fontSize: '1rem',
  },
  lg: {
     fontSize: '1.5rem',
  }
};

const themeVariants = {
  light: {
     color: c.gray100,
  },
  dark: {
     color: c.gray900,
  }
};

export const PrimarySubtitle = styled.h2<SubtitleProps>`
  font-family: 'Poppins';
  font-size: ${(props) => sizeVariants[props.size || 'md'].fontSize};
  color: ${(props)=> props.theme === 'light' ? themeVariants.light.color : themeVariants.dark.color };
  font-weight: ${(props) => props.weight != null ? props.weight : 400 };

  position: relative;

  input[type=checkbox] + & {
    margin: 0 5px;
    // margin-left: 10px;
    font-size: 0.875rem;
    font-family: 'Inter';
  }

  @media ${device.tablet} {
    font-size: ${(props) => props.size === "sm" ? sizeVariants["sm"].fontSize : sizeVariants["md"].fontSize};
  }

  @media ${device.mobileL} {
    font-size: ${() => sizeVariants["smMobile"].fontSize};
  }
`;