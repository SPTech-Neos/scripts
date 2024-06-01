import React from "react";
import * as S from './rating.styled';

const Rating: React.FC<S.props> = () => {
    //montar lista de estrelas
    // const stars = ["star-1", "star-2", "star-3", "star-4", "star-5"];


   return (
        <S.RatingBody>
            <S.StartRating size={12} id="star-1"/>
            <S.StartRating id="star-2"/>
            <S.StartRating size={20} id="star-3"/>
            <S.StartRating id="star-4"/>
            <S.StartRating size={12} id="star-5"/>
        </S.RatingBody>
   );
}

export default Rating;
