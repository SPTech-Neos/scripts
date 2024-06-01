import React from "react";
import * as S from './products.styled';

import {PrimaryTitle} from '../../components/Texts/Title/Title';
import Card from '../../components/Cards/Card/Card';
import Subtitle from "../../components/Texts/Subtitle/Subtitle";


import Calendario from '../../assets/calendario-2.svg';
import Produtos from '../../assets/produtos.svg';
import Servicos from '../../assets/servicos.svg'

const Products: React.FC = () => (

    <S.Products>
        <S.ProductsContainer direction="column">

            <>
                <PrimaryTitle>
                    Possibilidades
                </PrimaryTitle>

                <Subtitle>
                    Com todas as possibilidades pensadas para você. veja aqui o que o Blume pode fazer:
                </Subtitle>
            </>
            

            <S.ContainerCards>

                <S.ContainerCard className="container-card">    
                    <Card titulo="Agenda" texto="Agende o seu atendimento ou sua retirada de produtos, podendo escolher o profissional que vai te atender.">
                        <S.CardImg
                            className="calendario-img"
                            src={Calendario}
                            alt={`Computador e celular demonstrando aplicação Blume`}
                        />
                    </Card>
                </S.ContainerCard>

                <S.ContainerCard>    
                    <Card titulo="Serviço" texto="Corte seu cabelo, faça sua barba, pinte e até faça sua maquiagem, com profissionais de todos os tipos.">
                    <S.CardImg
                            className="servicos-img"
                            src={Servicos}
                            alt={`Computador e celular demonstrando aplicação Blume`}
                        />

                    </Card>
                </S.ContainerCard>

                <S.ContainerCard>    

                    <Card titulo="Produto" texto="Pesquise por produtos novos ou use os mesmos produtos que o profissional usou quando você fez um serviço com ele, até com os recomendados pelo profissional.">
                        <S.CardImg
                                className="produtos-img"
                                src={Produtos}
                                alt={`Computador e celular demonstrando aplicação Blume`}
                        />
                    </Card>

                </S.ContainerCard>

            </S.ContainerCards>

        </S.ProductsContainer>
    </S.Products>

);

export default Products;