import styled from 'styled-components';
import Container from '../../components/Containers/Container/Container';

export const Services = styled.section`
    width: 100%;
    height: 100vh;
    max-height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-gray-100);
`;

export const ServiceContainer = styled(Container)`
    height: 100%;
    padding-left: 20px;

`;

export const ServicesOptions = styled.div`
    width: 45%;
    height: 60%;    
`

export const ServiceOption = styled.div`
    padding-top:40px;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
    color: var(--color-gray-500);
    border-bottom: 2px solid var(--color-gray-500);
    font-family: "Josefin sans";
    font-size: 18px;

    & .local-option{
        color: var(--color-gray-200);
    }
    
    &:hover span{
        font-weight: bold;
        color: var(--color-gray-900);
    }


`;

