import styled from 'styled-components'
import { colors as c } from '../../styles/Colors';


export const ProductsSection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;

    & .active {
        display: flex;
    }

    & h1{
        font-size: 30px;
    }
`;

export const ProductsContainer = styled.div`
    width: 100%;
    height: 90%;
    padding-left: 5.2%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const ProductsButtons = styled.div`
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: end;

    & h2{
        color: ${c.green300};

        &:hover{
            cursor: pointer;
        }
    }
`;

export const ProductsBody = styled.div`
    width: 95%;
    height: 65%;
    display: grid;
    grid-template-columns: 90%;
    grid-auto-rows: 22%;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    
`;