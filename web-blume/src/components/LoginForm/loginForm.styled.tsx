import { FormEvent } from 'react';
import styled from 'styled-components';
import { colors as c } from '../../styles/Colors';
import Subtitle from '../Texts/Subtitle/Subtitle';
import Link from '../Texts/Link/Link';

export interface LoginFormProps {
    // type: string;
    // placeholder: string;
    // clearable: boolean;
    // required: boolean;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export const SubtitleStyled = styled(Subtitle)`
    display: flex;
    flex-direction: column;
`;

export const LinkContainer = styled.div`
    width:100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;

    & #client{
        color: ${c.violet100};
    }

    & #establish{
        color: ${c.green300};
    }

`;

export const LoginForm = styled.form<LoginFormProps>`

   width: 50%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 35px;
   padding: 50px 150px;
`;

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
`;

export const ErrorMessage = styled.span`
    position: absolute;
    padding: 3px 0;
    bottom: calc(0 - height);

    color: ${c.error};
`;

export const LinkEmblashiment = styled(Link)`
    color: ${c.green300};
`;

export const LinkClient = styled(Link)`
    color: ${c.green300};
`;