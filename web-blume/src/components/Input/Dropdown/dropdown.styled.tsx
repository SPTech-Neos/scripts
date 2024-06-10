import styled from "styled-components";

import { colors as c, Themes } from "../../../styles/Colors";
import { DropdownMenu, Button as Btn } from "@radix-ui/themes";

export interface DropDownProps {
  type?: "text" | "password" | "email" | string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "full" | "big" | "small" | "half";
  label: string;
  theme: string;
  list: string[];
  // children: string | JSX.Element | JSX.Element[];
}

export interface ColorProps {
  color: string;
}

export interface ThemeProps {
  theme: string;
}

export interface TriggerProps {
  isSelected: boolean;
  theme: string;
}

export interface InputContainerProps {
  size?: "full" | "big" | "small" | "half";
}

function getTheme(theme: string) {
  //   console.log(theme);
  // console.log(theme, theme == "client");

  return theme === "client" ? Themes.client : Themes.establishment;
}

const SizeVariants = {
  full: {
    width: "100%",
  },
  big: {
    width: "80%",
  },
  half: {
    width: "45%",
  },
  small: {
    width: "15%",
  },
};

export const Container = styled(DropdownMenu.Root)`
  background-color: ${c.violet300};
`;

export const Trigger = styled(DropdownMenu.Trigger)<TriggerProps>`
  background-color: ${c.gray100};
  border-radius: 0px;
  border: 3px solid ${c.gray900};
  color: ${(props) => (props.isSelected ? c.gray900 : c.gray500)};
  outline: none;
  font-family: "Poppins", "Arial";
  padding: 5px 25px;
  cursor: pointer;
  font-weight: 400;
  transition: all 0.25s ease-in-out;
  font-size: 16px;

  &:hover,
  &:focus {
    border: 3px solid ${(props) => getTheme(props.theme).mainColor};
    outline: none;
  }

  &::selection {
    background-color: ${(props) => getTheme(props.theme).mainColor};
  }
`;

export const Button = styled(Btn)``;

export const Content = styled(DropdownMenu.Content)`
  background-color: ${c.gray100};
  color: ${c.gray900};
  font-family: "Poppins";
  border-radius: 0px;

  border: 2px solid black;

  position: relative;
  z-index: 2;
`;

export const Item = styled(DropdownMenu.Item)<ThemeProps>`
  font-weight: regular;
  font-size: 13px;
  padding: 10px;

  &:hover {
    background-color: ${(props) => getTheme(props.theme).mainColor};
    outline: none;
    cursor: pointer;
    border-radius: 0px;
  }
`;

export const Separator = styled(DropdownMenu.Separator)``;

export const Sub = styled(DropdownMenu.Sub)``;

export const SubTrigger = styled(DropdownMenu.SubTrigger)``;

export const SubContent = styled(DropdownMenu.SubContent)``;

export const InputContainer = styled.div<InputContainerProps>`
  background-color: ${c.gray100};
  // margin: 25px 0;
  width: ${(props) => SizeVariants[props.size || "full"].width};

  color: ${c.gray900};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// export const DropDown = styled.input.attrs((props) => ({
//   type: props.type || "text",
//   placeholder: props.placeholder || "Digite aqui...",
//   required: props.required || false,
// }))<DropDownProps>`
//   position: relative;
//   z-index: 0;

//   font-size: 14px;
//   font-family: "Josefin Sans", "Arial";

//   margin: 0;
//   background-color: ${c.gray100};
//   border: 3px solid ${c.gray900};
//   padding: 5px 25px;
//   font-size: 16px;
//   font-weight: regular;
//   font-family: "Poppins", "Arial";
//   transition: all 0.2s ease-in;

//   width: 100%;

//   &::placeholder {
//     color: ${c.gray500};
//   }

//   &:hover,
//   &:focus {
//     border: 3px solid ${c.violet300};
//     outline: none;
//   }

//   &::selection {
//     background-color: ${c.violet300};
//   }
// `;
