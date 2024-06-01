import { FormEvent } from 'react';
import styled from 'styled-components';
import { colors as c } from '../../styles/Colors';

export interface LoginFormProps {
    // type: string;
    // placeholder: string;
    // clearable: boolean;
    // required: boolean;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

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
`;

export const ErrorMessage = styled.span`
    position: absolute;
    padding: 3px 0;
    bottom: calc(0 - height);

    color: ${c.error};
`;