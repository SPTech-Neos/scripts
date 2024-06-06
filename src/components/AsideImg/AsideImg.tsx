import React from "react";
import * as S from './asideImg.styled';
import { FloatButton } from "../Buttons/FloatButton/FloatButton";
import { ArrowLeft } from "phosphor-react";

const AsideImg: React.FC<S.AsideImgProps> = ({ imgUrl, bgColor, imgAlt }) => {
    return (
        <S.AsideImg imgAlt={imgAlt} bgColor={bgColor} imgUrl={imgUrl}>
            <FloatButton>
                <ArrowLeft weight='bold' />
                <p>Voltar</p> 
            </FloatButton>
            <img src={imgUrl} alt={imgAlt} />
        </S.AsideImg>

    );
}

export default AsideImg;