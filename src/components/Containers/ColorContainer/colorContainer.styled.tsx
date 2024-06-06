// TO REDO
import styled from 'styled-components';
import { Colors } from '../../../styles/Colors';

export interface ColorContainerProps {
  children: string | JSX.Element | JSX.Element[];
  bgColor: string;
}

export const ColorContainer = styled.main<ColorContainerProps>`

  background: ${props => props.bgColor || Colors.gray100};
  width: 100%;
  height: 100vh;

`;
