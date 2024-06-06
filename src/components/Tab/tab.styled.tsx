import styled from "styled-components";
import Container from "../Containers/Container/Container";

export const ContainerTab = styled(Container)`
    width: 100%;
    height: 55vh;
    justify-content: space-around;
`;

export const TabHeader = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;

`;

export const TabBody = styled.div`
    width: 100%;
    height: 80%;    
    display: flex;
    align-items: center;
    justify-content: center;

    // &>div {
    //     width: 60px;
    //     height: 40px;
    // }
`;  
