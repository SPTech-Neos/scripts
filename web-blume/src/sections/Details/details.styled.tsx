import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { colors as c, Themes } from '../../styles/Colors';
import Container from '../../components/Containers/Container/Container';
import Rating from '../../components/Rating/Rating';
import { propsRating } from '../../components/Rating/rating.styled';
import Badge from "../../components/Badges/AvaliationBadge/AvaliationBadge";
import Card from '../../components/Cards/Card/Card';

export interface detailsProps {
    theme?: 'client' | 'establishmente' | 'employee'
}

function getTheme(theme: string) {
    return theme === "client"? Themes.client : Themes.establishment;
}

export const DetailsSection = styled.section`
    width: 100%;
    height: 100vh;
    font-family: 'Poppins' ;
    display: flex;
    padding-left: 20px;
    align-items: center;
    flex-direction: column;

    & .active-modal {
        display: flex;
    }

    & .active-schedule {
        display: flex;
    }
`;

export const DetaisHeader = styled.div`
    width: 80%;
    height: 10%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 43%;
`;

export const NavBody = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: ${c.violet100};
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const NavItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    font-size: 20px;
    
    `;

export const NavLink = styled(RouterNavLink)`
    color: white;
`;

export const DetailsContainer = styled(Container)`
    max-width: 85%;;
    height: 90%;
    display: flex;
    padding-top: 10px;
`;

export const DetailsProfile = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 5%;
`;

export const RatingStar = styled(Rating)`
`;

export const DetailsImgContainer = styled.div<propsRating>`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${(props) => getTheme(props.theme).mainColor};

    & span{
        color: black;
        font-weight: bold;
    }
`;

export const DetailsInfoContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 40px;
`;

export const BadgeContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const NameInfoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    & h1{
        font-size: 40px;
    }
`;

export const PrecificacaoContainer = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 20%;
`;

export const ProfileInfoContainer = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding-left: 5px;
`;

export const ProfileImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: black;
`;


export const DetailsImg = styled.img`
    width: 280px;
    height: 260px;
    border-radius: 20px;
    background-color: ${c.gray200};
`

export const DetailsDesc = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: row;
`;

export const DescContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap:20px;
    padding-left: 5%;
    & h1 {
        font-size: 30px;
    }
`;

export const ContainerDescText = styled.div`
    width: 85%;
    height: 100%;   
    display: flex;
    flex-direction: column;
    font-size: 20px;    
`;

export const CardDesc = styled(Card)`
`;

export const CardContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    
    &>div {
        width: 60%;
        height: 90%;
        border-radius: 15px;
        box-shadow: 2px 2px 50px -10px ${c.gray700};
    }

    &>div>div{
        top: -20px;
    }
`;
export const BadgeService = styled(Badge)`
`;
