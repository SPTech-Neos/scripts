import React from "react";
import * as S from './cardEmployee.styled';

import { PlusCircle } from "phosphor-react";
import { colors as c} from "../../../styles/Colors";


const CardEmployee: React.FC<S.propsCard> = ({id, tipoCard, imgUrl, nome, onClick}) => {

    if(tipoCard == "adicionar"){
        return (
            <S.CardContainer id={id} tipoCard={tipoCard} onClick={onClick}>
                <S.CardBody>
                    <PlusCircle color={c.green500} size={60} />
                    <h2> Adicionar </h2>
                </S.CardBody>
            </S.CardContainer>
        );
    }else if(tipoCard == "funcionario"){
        return (
            <S.CardContainer id={id} tipoCard={tipoCard} onClick={onClick}>
                <S.ProfileImg imgUrl={imgUrl}/>
                <h2>{nome}</h2>
            </S.CardContainer>
        );
    }

}

export default CardEmployee;