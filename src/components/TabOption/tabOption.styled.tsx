import styled from 'styled-components';

export const TabOption = styled.div`
    width: 33.3%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid var(--color-gray-300);

    &:hover{
        cursor:pointer;
        color: var(--color-green-300);
        border-bottom: 4px solid var(--color-green-300);
    }

    &.active {
        color: var(--color-green-300);
        border-bottom: 4px solid var(--color-green-300);
    }

`;