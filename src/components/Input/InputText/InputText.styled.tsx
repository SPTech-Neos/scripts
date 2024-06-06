import styled from 'styled-components';

// import SlInput from '../../../../node_modules/@shoelace-style/shoelace/dist/react/input';

export interface InputTextProps {
    type?: "text" | "password" | "email" | string;
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = styled.input
    .attrs((props => ({
        type: props.type || 'text',
        placeholder: props.placeholder || 'Digite aqui...',
        required: props.required || false,
        passwordToggle: props.type == 'password' ? true : false,

    })
))<InputTextProps>`

    &::part(clear-button){
        color: var(--color-violet-300);
    }
    
    &::part(password-toggle-button){ // TO DO: ENCONTRAR FORMA DE DEIXAR O OUTLINE DO BOTÃO MAIOR
        color: var(--color-gray-900);
        // border: 3px solid black
        // font-weight: bold;
        // --size: 6rem;
    }

    position: relative;
    z-index: 0;

    margin: 0;
    background-color: var(--color-gray-100);
    border: 3px solid var(--color-gray-900);
    padding: 5px 25px;
    font-size: 16px;
    font-weight: regular;
    font-family: 'Poppins', 'Arial';
    transition: all .2s ease-in;
    width: 100%;

    &::placeholder {
        color: var(--color-violet-500);
    }

   &:hover, &:focus {
      border: 3px solid var(--color-violet-300);
   }

   &::selection {
        background-color: var(--color-violet-300);
   }

`;

// export const InputText = styled(SlInput)
//     .attrs((props => ({
//         type: props.type || 'text',
//         placeholder: props.placeholder || 'Digite aqui...',
//         clearable: props.clearable || false,
//         required: props.required || false,
//         passwordToggle: props.type == 'password' ? true : false,

//     })
// ))<InputTextProps>`

//     &::part(clear-button){
//         color: var(--color-violet-300);
//     }
    
//     &::part(password-toggle-button){ // TO DO: ENCONTRAR FORMA DE DEIXAR O OUTLINE DO BOTÃO MAIOR
//         color: var(--color-gray-900);
//         // border: 3px solid black
//         // font-weight: bold;
//         // --size: 6rem;
//     }

//     position: relative;
//     z-index: 0;

//     margin: 0;
//     background-color: var(--color-gray-100);
//     border: 3px solid var(--color-gray-900);
//     padding: 5px 25px;
//     font-size: 16px;
//     font-weight: regular;
//     font-family: 'Poppins', 'Arial';
//     transition: all .2s ease-in;
//     width: 100%;

//     &::placeholder {
//         color: var(--color-violet-500);
//     }

//    &:hover, &:focus {
//       border: 3px solid var(--color-violet-300);
//    }

//    &::selection {
//         background-color: var(--color-violet-300);
//    }

// `;