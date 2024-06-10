import styled from "styled-components";
import { Star } from "phosphor-react";

export interface propsRating {
    onclick?: () => void
    theme?: 'client' | 'establishment',
    weight?: 'fill' | 'light' | null
}

export const StartRating = styled(Star)<propsRating>`
    position: relative;
`;   



export const RatingBody = styled.div<propsRating>`
    width: 80%;
    height: 10%;
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