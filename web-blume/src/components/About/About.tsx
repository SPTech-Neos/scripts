import React from "react";
import * as S from './about.styled';

// import {colors as c} from '../../styles/Colors';

const About: React.FC<S.AboutProps> = ({children, imgUrl, descricao}) => {
    return (
        <S.AboutContainer direction="row">
            <S.AboutDesc>
                <h2>Descrição:</h2>
                <S.Description>
                    <span>
                    {descricao}
                    </span>
                </S.Description>
                <h2>Categorias: </h2>
                <S.ContainerCategoria>
                    {children}
                </S.ContainerCategoria>
            </S.AboutDesc>

            <S.AboutImage>
                <S.AboutProfileImg imgUrl={imgUrl}/>
                <h3>Nome (deixar dinâmico)</h3>
                <span>Cargo (deixar dinamico ou tirar)</span>
            </S.AboutImage>
        </S.AboutContainer>
    );

}
    

export default About;