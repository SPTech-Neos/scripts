import styled from "styled-components";
import { colors as c, getTheme } from "../../../styles/Colors";
import { TextField } from "@radix-ui/themes";

export interface InputTextProps {
  type?: "text" | "password" | "email" | string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "full" | "big" | "small" | "half";
  label: string;
  theme: 'client' | 'establishment' | string;
  value?: string
}

export interface InputContainerProps {
  size?: "full" | "big" | "small" | "half";
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

{
  /* <TextField.Root placeholder="Search the docs…">
  <TextField.Slot>
    <MagnifyingGlassIcon height="16" width="16" />
  </TextField.Slot>
</TextField.Root> */
}

export const InputContainer = styled.div<InputContainerProps>`
  background-color: ${c.gray100};
  // margin: 25px 0;
  width: ${(props) => SizeVariants[props.size || "full"].width};

  color: ${c.gray900};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputText = styled.input.attrs((props) => ({
  type: props.type || "text",
  placeholder: props.placeholder || "Digite aqui...",
  required: props.required || false,
}))<InputTextProps>`
  position: relative;
  z-index: 0;

  font-size: 14px;
  font-family: "Josefin Sans", "Arial";

  height: 40px;
  margin: 0;
  padding-left: 25px;
  background-color: ${c.gray100};
  border: 3px solid ${c.gray900};
  font-size: 16px;
  font-weight: regular;
  font-family: "Poppins", "Arial";
  transition: all 0.2s ease-in;
  border-radius: 0px;

  width: 100%;

  &::placeholder {
    color: ${c.gray500};
  }

  // &:hover,
  // &:focus {
  //   border: 3px solid ${(props) => getTheme(props.theme).mainColor};
  //   outline: none;
  // }

  &::selection {
    background-color: ${(props) => getTheme(props.theme).mainColor};
  }
`;

export const Slot = styled(TextField.Slot)`
  padding: 10px;
`;

// import styled from 'styled-components';
// import { colors as c} from '../../../styles/Colors';

// import SlInput from '../../../../node_modules/@shoelace-style/shoelace/dist/react/input';

// export interface InputTextProps {
//     type?: "text" | "password" | "email" | string;
//     placeholder?: string;
//     value: string;
//     onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

// export const InputText = styled.input
//     .attrs((props => ({
//         type: props.type || 'text',
//         placeholder: props.placeholder || 'Digite aqui...',
//         required: props.required || false,
//         passwordToggle: props.type == 'password' ? true : false,

//     })
// ))<InputTextProps>`

//     &::part(clear-button){
//         color: ${c.violet300};
//     }

//     &::part(password-toggle-button){ // TO DO: ENCONTRAR FORMA DE DEIXAR O OUTLINE DO BOTÃO MAIOR
//         color: ${c.gray900};
//         // border: 3px solid black
//         // font-weight: bold;
//         // --size: 6rem;
//     }

//     position: relative;
//     z-index: 0;

//     margin: 0;
//     background-color: ${c.gray100};
//     border: 3px solid ${c.gray900};
//     padding: 5px 25px;
//     font-size: 16px;
//     font-weight: regular;
//     font-family: 'Poppins', 'Arial';
//     transition: all .2s ease-in;
//     width: 100%;

//     &::placeholder {
//         color: ${c.violet500};
//     }

//    &:hover, &:focus {
//       border: 3px solid ${c.violet300};
//    }

//    &::selection {
//         background-color: ${c.violet300};
//    }

// `;
