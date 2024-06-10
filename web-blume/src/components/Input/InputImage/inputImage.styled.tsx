import styled from "styled-components";
import {
  colors as c,
  Themes,
  getTheme,
  ThemeProps,
} from "../../../styles/Colors";

export interface InputImageProps {
  onChange?: (e: any) => void;
  theme: string;
  // children: string | JSX.Element | JSX.Element[];
  // href: string;
  // size?: 'sm' | 'md' | 'lg';
  // font?: 'Poppins' | 'Inter';
}

export interface ImagePreviewProps {
  src: string;
}

// const sizeVariants = {
//     sm: {
//        fontSize: '14px',
//     },
//     md: {
//        fontSize: '1rem',
//     },
//     lg: {
//        fontSize: '1.5rem',
//     }
//   };

export const InputImage = styled.input.attrs((props) => ({
  type: "file",
  accept: "image/*",
}))<InputImageProps>`
  font-family: "Poppins";
  display: none;
`;

export const InputLabel = styled.label<ThemeProps>`
  background: ${c.gray100};
  border: 2px solid ${(props) => getTheme(props.theme).mainColor};
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 132.5px;
`;

export const ImagePreview = styled.img.attrs(() => ({}))`
  display: ${(props) => (props.src == "" ? "none" : "block")};
  max-width: 250px;
  max-height: 250px;
  background: ${c.gray300};
`;

export const Icon = styled.img<ThemeProps>`
  background: ${(props) => getTheme(props.theme).mainColor};
  padding: 8px;
  border-radius: 4px 0 0 4px;
`;

export const Round = styled.div.attrs(() => ({}))`
  background: ${c.gray300};
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;

export const Row = styled.div.attrs(() => ({}))`
  display: flex;
  gap: 30px;
  align-items: center;
  width: 100%;
`;

export const Column = styled.div.attrs(() => ({}))`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ColumnCenter = styled(Column).attrs(() => ({}))`
  align-items: center;
`;

export const IconText = styled.p<ThemeProps>`
  padding: 7.3px;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 12px;
  transition: all 0.25s ease-in-out;
  border-radius: 0 4px 4px 0;

  ${InputLabel}:hover & {
    background: ${(props) => getTheme(props.theme).mainColor};
    color: ${c.gray100};
  }
`;
