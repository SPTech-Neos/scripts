import React from "react";
import * as S from './about.styled';

// import {colors as c} from '../../styles/Colors';

const About: React.FC<S.AboutProps> = ({children, imgUrl, establishmentInfo}) => {
    return (
        <S.AboutContainer direction="row">
            <S.AboutDesc>
                <h2>Descrição:</h2>
                <S.Description>
                    <span>
                    {establishmentInfo?.establishment.company.cnpj || 'Sem descrição'}
                    </span>
                </S.Description>
                <h2>Categorias: </h2>
                <S.ContainerCategoria>
                    {children}
                </S.ContainerCategoria>
            </S.AboutDesc>

            <S.AboutImage>
                <S.AboutProfileImg imgUrl={imgUrl} establishmentInfo={establishmentInfo}/>
                <h3>{establishmentInfo?.establishment.name}</h3>   
            </S.AboutImage>
        </S.AboutContainer>
    );

}
    

export default About;