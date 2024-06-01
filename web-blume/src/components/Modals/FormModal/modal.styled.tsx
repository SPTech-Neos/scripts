import styled, { keyframes } from "styled-components";
import { colors as c} from '../../../styles/Colors';

import * as Dialog from '@radix-ui/react-dialog';
import { Link } from "react-router-dom";
import { DangerButton } from "../../Buttons/DefaultButton/DefaultButton";

export interface ModalProps {
  type: "error" | "success" | string;
  message: string;
  isOpen?: boolean;
  linkTo: string;
  onClose?: () => void; 
  onConfirm?: () => void;
}

export interface ModalButtonProps {
  type: "error" | "success" | string;
}

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`

export const ModalOverlay = styled(Dialog.Overlay)`
  width: 100%;
  height: 100vh;

  z-index: 5;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${c.gray900};
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0.5;
`;

export const ModalContent = styled(Dialog.Content)`
  width: 90vw;
  max-width: 325px;
  height: 100%;
  max-height: 390px;
  background-color: white;
  border-radius: 16px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  z-index: 6;

  position: fixed;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 5px;

  transform: translate(-50%, -50%);
  padding: 25px;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ModalImg = styled.img`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

export const DialogTitle = styled(Dialog.Title)` 
  text-transform: capitalize;
  font-family: var(--font-text);
  font-size: 24px;
  font-weight: bold;
`;

export const DialogDescription = styled(Dialog.Description)`
  text-transform: capitalize;
  font-family: var(--font-text);
  font-size: 16px;
  font-weight: 400;
`;

export const DialogButton = styled(DangerButton)`
  
`;

export const DialogLink = styled(Link)<ModalButtonProps>`
  text-transform: capitalize;
  text-decoration: underline;

  font-family: var(--font-text);
  font-size: 32px;
  font-weight: bolder;
  
  color: ${(props) => props.type == "success" ? c.success : c.error}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;