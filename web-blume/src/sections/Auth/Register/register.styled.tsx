// TO REDO
import styled from "styled-components";
import { ThemeProps, colors as c, getTheme } from "../../../styles/Colors";

export interface RegisterProps {
  children?: string | JSX.Element | JSX.Element[];
}

export interface RegisterFormProps {
  step: number;
  // children: string | JSX.Element | JSX.Element[];
}

export interface CategoryProps {
  isChecked: boolean;
}

export const Register = styled.main<RegisterProps>`
  // width: 100%;
  height: 90vh;
  background-color: ${c.gray100};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 30px 50px;
  box-shadow: 0 0 48px 2px rgba(0, 0, 0, 0.25);
  max-width: 45%;
  overflow-y: scroll;
`;

export const Text = styled.span`
  font-family: "Poppins";
  font-size: 0.8rem;
  color: ${c.gray900};
  font-weight: 400;
`;

export const RegisterForm = styled.form<RegisterFormProps>`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // gap: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormPart = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
`;
export const FormPartSmall = styled(FormPart)`
  gap: 5px;
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CBText = styled(Text)<ThemeProps>`
  color: ${(props) => getTheme(props.theme).mainColor};
  font-weight: bold;
`;

export interface RegisterFormProps {
  step: number;
}

export const FormFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Categories = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  overflow-y: scroll;
  padding: 20px;
`;

export const Category = styled.div<CategoryProps>`
  // width: 125px;
  height: 45px;
  display: flex;
  align-items: center;
  font-family: "Poppins";
  gap: 10px;
  padding: 5px;
  border-radius: 8px;
  cursor: pointer;

  ${(props) =>
    props.isChecked
      ? `box-shadow: 0px 0px 20px ${c.green300};
    border: 2px solid ${c.green300};`
      : `box-shadow: 0px 0px 10px rgba(0, 0, 0, .25);`}
`;
