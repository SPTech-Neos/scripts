import styled from 'styled-components';

export interface LinkProps {
    children: string | JSX.Element | JSX.Element[];
    href: string;
    size?: 'sm' | 'md' | 'lg';
    font?: 'Poppins' | 'Inter';
}

const sizeVariants = {
    sm: {
       fontSize: '14px',
    },
    md: {
       fontSize: '1rem',
    },
    lg: {
       fontSize: '1.5rem',
    }
  };

export const Link = styled.a
    .attrs((props => ({
        href: props.href
    })
))<LinkProps>`

    font-size: ${(props) => sizeVariants[props.size || 'md'].fontSize};
    color: var(--color-violet-300);
    font-weight: bold;
    transition: all .25s ease-in-out;
    font-family: ${(props) => props.font || 'Inter'};
    
    &:hover {
        text-decoration: underline;
        color: var(--color-violet-500);
    }
`;