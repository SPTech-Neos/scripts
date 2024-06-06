import styled from 'styled-components';
import Container from '../../components/Containers/Container/Container';
import BgBranco from '../../assets/circulo-branco.png';
import BgAzul from '../../assets/circulo-roxo.png';
import { device } from '../../styles/breakpoints.styled';

export const Products = styled.section`
    width: 100%;
    height: 150vh;
    max-height: 750px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: var(--color-violet-100);
    font-family: 'Poppins';
    text-align: center;

    @media ${device.tablet} {
        height: 100%;
        max-height: none;
        min-height: 100vh;

        padding: 20px 0;
    }

`;

export const ProductsContainer = styled(Container)`
    width: 90%;
    height: 100%;
    padding-top: 40px;

    &>div>div:nth-child(1), div>div:nth-child(3)  { 
        background: no-repeat url(${BgBranco});
     }
    
    &>div>div:nth-child(3){
        background-position: bottom right;
    }

    &>div>div:nth-child(2){
        background: no-repeat url(${BgAzul}), no-repeat bottom right url(${BgAzul});
    }

`;

export const ContainerCards = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content: center;  

    @media ${device.tablet} {
        padding-top: 100px;
        flex-direction: column;

        gap: 100px;
    }

`;

export const ContainerCard = styled.div`
    width: 100%;
    height: 80%;

    display:flex;
    align-items:center;
    justify-content: center;    
`;

export const CardImg = styled.img`
    

`;
