// TO REDO
import styled from 'styled-components';
import { colors as c } from '../../../styles/Colors';

export interface ColorContainerProps {
  children: string | JSX.Element | JSX.Element[];
  bgColor: string;
}

export const ColorContainer = styled.main<ColorContainerProps>`

  background: ${props => props.bgColor || c.gray100};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

`;
