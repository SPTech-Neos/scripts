import styled from "styled-components";
import { colors as c } from "../../styles/Colors";
import { Themes } from "../../styles/Colors";

export interface StepperProps {
  steps: number;
  currentStep: number;
  children?: string | JSX.Element | JSX.Element[];
  theme: string;
}

export interface StepProps {
  state: string;
  children: number | string | JSX.Element | JSX.Element[];
  theme: string;
}

export interface LineProps {
  theme: string;
}

function getTheme(theme: string) {
  //   console.log(theme);
  // console.log(theme, theme == "client");

  return theme === "client" ? Themes.client : Themes.establishment;
}

export const Step = styled.div<StepProps>`
  width: 35px;
  height: 35px;
  background-color: ${(props) =>
    props.state == "onGoing" ? getTheme(props.theme).mainColor : c.gray100};
  box-sizing: border-box;
  border: 0.2rem solid ${(props) => getTheme(props.theme).mainColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: "Poppins";
  font-weight: bold;
  color: ${(props) =>
    props.state == "onGoing" ? c.gray100 : getTheme(props.theme).mainColor};

  @media (min-width: 1700px) {
    // width: 1.5rem;
    // height: 1.5rem;
  }
`;

export const Stepper = styled.div<StepperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  // gap: 0.5rem;
`;
export const Line = styled.div<LineProps>`
  width: 2rem;
  background: ${(props) => getTheme(props.theme).mainColor};
  height: 3px;
`;

// export const Circle = styled.div<StateProps>`
//    width: 0.4rem;
//    height: 0.4rem;
//    border-radius: 50%;
//    background-color: ${props => props.state == 'pending' ? c.violet100 : c.green500};
// `
