import React, {useState} from "react";
import * as S from  './tab.styled';

import TabOption from "../TabOption/TabOption";

type SectionProps = {
    result?: string;
}
const Tab: React.FC<SectionProps> = () => {

    const [result, setResult] = useState("");

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
                <TabOption id="servico" className="optionsTab" titulo="Serviços" onClick={handleClick} />

                <TabOption id="produto" className="optionsTab" titulo="Produtos" onClick={handleClick} />

                <TabOption id="sobre" className="optionsTab" titulo="Sobre" onClick={handleClick} />
            </S.TabHeader>
            <S.TabBody>
                <div id="section-escolhida">
                    {result == 'servico'? (
                        "Serviços" // trocar pela section certa
                    ) : result == 'produto'? (
                        "Produtos" // trocar para section certa
                    ) : result == 'sobre'? (
                        "Sobre" // trocar para section certa
                    ) : "Selecione uma opção"}
                </div>

            </S.TabBody>
        </S.ContainerTab>
    );
};

export default Tab;