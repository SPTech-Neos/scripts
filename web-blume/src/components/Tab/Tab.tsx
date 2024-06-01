import React, {useState} from "react";
import * as S from  './tab.styled';

import TabOption from "../TabOption/TabOption";
import { ServiceCard, ProductCard } from "../Cards/ServiceCard/ServiceCard";
import About from "../About/About";
import Badge from "../Badges/AvaliationBadge/AvaliationBadge";

const Tab: React.FC<S.SectionProps> = ({theme}) => {

    const [result, setResult] = useState("");
    
    // const teste = {
    //     nome: "oi",
    //     id: 1
    // }
    
    // const { data } = teste;
    // const [cardsData, setCardsData] = useState(data);
    // setCardsData(data) ;
    
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const elementsActive = document.getElementsByClassName("optionsTab");
        const myElement = document.getElementById(`${(event.target as HTMLDivElement).id}`);
        
    
        if (!elementsActive) {
            console.log("todo nao encontrada");
        } else {
            console.log();
            if (!myElement) {
                console.log("div nao encontrada");
            } else {
                console.log(elementsActive);
                for (let i = 0; i < elementsActive.length; i++) {
                    (elementsActive[i] as HTMLDivElement).classList.remove('active');
                }
    
                myElement.classList.add('active');
            }
        }
    
        setResult((event.target as HTMLDivElement).id);
    }

    return (
        <S.ContainerTab direction='column'>
            <S.TabHeader id="TabHeader">
                <TabOption id="servico" className="optionsTab" titulo="Serviços" theme={theme} onClick={handleClick} />

                <TabOption id="produto" className="optionsTab" titulo="Produtos" theme={theme} onClick={handleClick} />

                <TabOption id="sobre" className="optionsTab" titulo="Sobre" theme={theme} onClick={handleClick} />
            </S.TabHeader>
            <S.TabBody>
                {result == ''? (
                    <div>
                        <span>Selecione uma Opção</span>
                    </div>
                ):
                    <S.ResultBody id="section-escolhida">
                        {result == 'servico'? (
                            // cardsData.map((data, index) => (
                            //     <div key={index}>
                            //     </div>
                            // ))
                            <ServiceCard theme={theme} nome="Perfume" valor={10.25} />

                        ) : result == 'produto'? (

                            <ProductCard nome="Perfume" valor={10.90}>

                            </ProductCard>
                             // trocar para section certa

                        ) : <About descricao="Passado por props no componente TAB">
                                <Badge>
                                    deixar
                                </Badge>
                                <Badge>
                                    dinamico
                                </Badge>
                            </About>}
                    </S.ResultBody>
                }
            </S.TabBody>    
        </S.ContainerTab>
    );  
};

export default Tab;