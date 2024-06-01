import styled from 'styled-components';
import { colors as c} from '../../../styles/Colors';
export interface PrimaryButtonProps {
      children: string | JSX.Element | JSX.Element[];
      size?: 'sm' | 'md' | 'lg';
      width?: string;
      color?: string;
      onClick?: (email: string, password: string) => void;
}

const sizeVariants = {
   sm: {
      fontSize: '0.7rem',
      borderRadius: '0.4rem',
      border: `2px solid ${c.violet300}`
   },
   md: {
      fontSize: '1.1rem',
      padding: '0.2rem 3.3rem',
      borderRadius: '0.5rem',
      border: `3px solid ${c.violet300}`
   },
   lg: {
      fontSize: '1.5rem',
      borderRadius: '0.8rem',
      border: `4px solid ${c.violet300}`
   }
};

export const PrimaryButton = styled.button<PrimaryButtonProps>`

   width: ${(props) => props.width || 'auto'};
   font-size: ${(props) => sizeVariants[props.size || 'md'].fontSize};
   border-radius: ${(props) => sizeVariants[props.size || 'md'].borderRadius};
   background-color: ${(props) => props.color || c.violet100};
   box-shadow: 0px 0px 20px ${(props) => props.color || c.violet100};
   height: 45px;
   color: ${c.gray100};
   border: none;
   cursor: pointer;

   text-transform: uppercase;
   font-weight: 500;
   font-family: 'Poppins', sans-serif;

   transition: background-color .2s ease-in;

   &:hover{
      cursor: pointer;
      background-color: ${(props) => props.color || c.violet500};

   }

   &:active {
      transition: none;
      background-color: ${c.violet500};
   }
`;

export interface MoveButtonProps {
   children: string | JSX.Element | JSX.Element[];
   moveTo?: string;
}

export const MoveButton = styled.a`
   width: 50px;
   height: 50px;
`;

export const DangerButton = styled.button<PrimaryButtonProps>`
   width: ${(props) => props.width || 'auto'};
   font-size: ${(props) => sizeVariants[props.size || 'md'].fontSize};
   border-radius: ${(props) => sizeVariants[props.size || 'md'].borderRadius};
   background-color: ${(props) => props.color || c.violet300};
   box-shadow: 0px 0px 20px ${(props) => props.color || c.violet100};
   height: 45px;
   color: ${c.gray100};
   border: none;
   cursor: pointer;

   text-transform: uppercase;
   font-weight: 500;
   font-family: 'Poppins', sans-serif;

   transition: background-color .2s ease-in;

   &:hover{
      cursor: pointer;
      background-color: #DC2432;

   }

   &:active {
      transition: none;
      background-color: ${(props) => props.color || c.violet500};
   }


`;

export const WarningButton = styled.button<PrimaryButtonProps>`
   width: ${(props) => props.width || 'auto'};
   font-size: ${(props) => sizeVariants[props.size || 'md'].fontSize};
   border-radius: ${(props) => sizeVariants[props.size || 'md'].borderRadius};
   background-color: ${(props) => props.color || c.violet300};
   box-shadow: 0px 0px 20px ${(props) => props.color || c.violet100};
   height: 45px;
   color: ${c.gray100};
   border: none;
   cursor: pointer;

   text-transform: uppercase;
   font-weight: 500;
   font-family: 'Poppins', sans-serif;

   transition: background-color .2s ease-in;

   &:hover{
      cursor: pointer;
      background-color: #F2D17B;

   }

   &:active {
      transition: none;
      background-color: ${(props) => props.color || c.violet300};
   }
`;
