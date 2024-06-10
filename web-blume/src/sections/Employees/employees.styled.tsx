import styled from 'styled-components';
import { colors as c} from '../../styles/Colors';

export interface propsCard {
    id?: number,
    tipoCard?: string,
    imgUrl?: string,
    onclick?: () => void
}

export const EmployeeSection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

    & .active{
        display: flex;
    }

    & h1{
        font-size: 30px;
    }

`;

export const EmployeeContainer = styled.div`
    width:100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-left: 5.2%;

    & h1 {
        font-size: 30px;
        text-transform: uppercase;
    }

    & .active {
        background-color: ${c.gray200};
    }
`;

export const CardsContainer = styled.div`
    width: 75%;
    height: 70%;
    display: grid;
    padding-top: 20px;
    grid-template-columns: 33% 33% 25%;
    grid-auto-rows: 55%;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
`;