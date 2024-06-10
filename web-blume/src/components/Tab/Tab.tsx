import React, {useState} from "react";
import * as S from  './tab.styled';

import TabOption from "../TabOption/TabOption";
import { ServiceCard, ProductCard } from "../Cards/ServiceCard/ServiceCard";
import About from "../About/About";
import Badge from "../Badges/AvaliationBadge/AvaliationBadge";
import { FilterResponseDto } from "../../utils/Filter/filters.types";
import { ProductResponseDto } from "../../utils/Products/Product/product.types";

const Tab: React.FC<S.SectionProps> = ({theme, establishmentInfo}) => {

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
                        {result === 'servico'? (
                            establishmentInfo && establishmentInfo.filters ? (
                                Array.isArray(establishmentInfo.filters) && establishmentInfo.filters.length > 0 ? 
                                    establishmentInfo.filters.map((filter: FilterResponseDto, index: number) => (
                                        <ServiceCard key={index} id={filter.service.id} theme={theme} nome={filter.service.specification} valor={filter.price} img={filter.service.imgUrl}/>
                                    ))
                                : "Sem serviços no momento"
                            ) : null
                    
                        ) : result === 'produto' ? (
                            establishmentInfo && establishmentInfo.products ? (
                                Array.isArray(establishmentInfo.products) && establishmentInfo.products.length > 0 ? 
                                    establishmentInfo.products.map((product: ProductResponseDto, index: number) => (
                                        <ProductCard key={index} id={Number(product.id)} nome={product.name} valor={product.value} img={product.imgUrl} />
                                    ))
                                : "Sem serviços no momento"
                            ) : null
                        ) : (
                            <About establishmentInfo={establishmentInfo == null ? null : establishmentInfo} imgUrl={establishmentInfo?.establishment.imgUrl}>
                                {establishmentInfo && establishmentInfo.filters && (
                                    Array.isArray(establishmentInfo.filters)
                                        ? establishmentInfo.filters.slice(0, 2).map((filter: FilterResponseDto, index: number) => (
                                            <Badge key={index}>{filter.service.specification}</Badge>
                                        ))
                                        : <span>"Sem serviços"</span>
                                )}
                            </About>
                        )}
                    </S.ResultBody>
                }
            </S.TabBody>    
        </S.ContainerTab>
    );  
};

export default Tab;