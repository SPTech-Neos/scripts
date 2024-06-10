import React from "react";
import * as S from './rating.styled';

const Rating: React.FC<S.propsRating> = ({theme, weight}) => {
    //montar lista de estrelas
    // const stars = ["star-1", "star-2", "star-3", "star-4", "star-5"];


   return (
        <S.RatingBody theme={theme}>
            <S.StartRating weight={weight} size={12} id="star-1"/>
            <S.StartRating weight={weight} id="star-2"/>
            <S.StartRating weight={weight} size={20} id="star-3"/>
            <S.StartRating weight={weight} id="star-4"/>
            <S.StartRating weight={weight} size={12} id="star-5"/>
        </S.RatingBody>
   );
}

export default Rating;
