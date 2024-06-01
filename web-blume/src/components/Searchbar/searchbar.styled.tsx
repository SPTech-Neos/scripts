import styled from "styled-components";

import { colors as c } from '../../styles/Colors';;

import { MagnifyingGlass as ImportedMagnifyingGlass } from "@phosphor-icons/react";
import { device } from "../../styles/breakpoints.styled";

export const InputContainer = styled.div`
  width: 100%;
  max-width: 1102px;
  height: 60px;
  background-color: ${c.gray200};
  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ${device.tablet} {
    justify-content: space-between;
    padding: 0 10px;
  }
`;

export const InputSearch = styled.input`
  width: 80%;
  height: 100%;
  background: none;
  outline: none;
  border: none;
  font-size: 18px;
  font-family: "Inter", sans-serif;

  @media ${device.tablet} {
    width: 100%;
    font-size: 16px;
  }
`;

export const IconSearchBar = styled.i`
  color: ${c.gray700};
`;

export const ButtonSearchBar = styled.button`
  color: ${c.gray700};
  background: none;
  border: none;
  border-left: 2px solid ${c.gray500};
  height: 100%;
  width: 12%;
  border-radius: 0 40px 40px 0;

  font-size: 14px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  text-transform: uppercase;

//   position: relative;
  cursor: pointer;
  transition: 0.25s;
//   padding: 12px;
  margin-right: 0;

  &:hover {
    // opacity: 0.8;
    background: ${c.gray500};
    color: ${c.gray100};
  }


//   &::before {
//     content: "";
//     background-color: ${c.gray500};
//     width: 2px;
//     height: 40px;
//     display: flex;
//     position: absolute;
//     left: 0;
//     top: -10px;
//   }
`;

export const MagnifyingGlass = styled(ImportedMagnifyingGlass)`
  width: 25%;
//   margin: 20px;

  color: ${c.gray700};
  background: none;
  border-left: 2px solid ${c.gray500};

  font-family: "Inter", sans-serif;
  font-weight: bold;
  text-transform: uppercase;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  cursor: pointer;
  transition: 0.25s;

  &:hover {
    opacity: 0.8;
  }
`;

export const SearchMagnifyingGlass = styled(ImportedMagnifyingGlass)`
  margin-left: 10px;
`;