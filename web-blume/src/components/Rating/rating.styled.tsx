import styled from "styled-components";
import { Star } from "phosphor-react";
// import { Themes } from "../../styles/Colors";

export interface props {
    onclick?: () => void
}



export const StartRating = styled(Star)`
    position: relative;
`;   



export const RatingBody = styled.div<props>`
    width: 80%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;

    & #star-1, #star-5{

        top: 3px;
    }

    & #star-3 {

        bottom: 3px;
    }
`;