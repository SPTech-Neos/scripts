import styled from 'styled-components';
import Container from '../../components/Containers/Container/Container';

export const ChooseAuth = styled.section`
    width: 100%;
    height: 100vh;
    max-height: 750px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background: rgb(150,154,255);
    background: linear-gradient(140deg, rgba(150,154,255,1) 0%, rgba(150,255,160,1) 100%);
`;

export const ChooseAuthContainer = styled(Container)`
    width: 90%;
    max-width: 750px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ChooseAuthBox = styled.div`
    width: 100%;
    height: 90%;
    max-height: 680px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: var(--color-gray-100);
    border-radius: 8px;
`;

export const ChooseAuthBoxContainer = styled.div`
    width: 90%;
    max-width: 600px;
    height: 90%;

    display: flex;
    flex-direction: column;

    justify-content: space-around;
    align-items: center;
`;

export const CardGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;