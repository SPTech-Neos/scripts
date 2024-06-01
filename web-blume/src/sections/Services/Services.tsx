import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { device } from "../../styles/breakpoints.styled";

import * as S from './services.styled';
import { PrimaryTitle, SecondaryTitle } from '../../components/Texts/Title/title.styled';

import BarbaSrc from "../../assets/servico-barba.png";
import CabeloSrc from "../../assets/servico-cabelo.png";
import MaquiagemSrc from "../../assets/servico-maquiagem.png";
import SobrancelhaSrc from "../../assets/servico-sobrancelha.png";

const Services: React.FC = () => {
    const isTabletOrMobile = useMediaQuery({ query: device.tablet });

    const [selectedService, setSelectedService] = useState<string>("cabelo");

    const handleMouseEnter = (service: string) => {
        setSelectedService(service);
    };

    return isTabletOrMobile ? null : (
        <S.Services id="services">
            <PrimaryTitle size='md' outline={true} lines={false}> O QUE OFERECEMOS? </PrimaryTitle>
            <S.ServiceContainer direction="row"> 
                <S.ServicesOptions>

                    <SecondaryTitle>SERVIÇOS</SecondaryTitle>
                    
                    <S.ServiceOption className="cabelo-option" onMouseEnter={() => handleMouseEnter("cabelo")}>
                        <span>Cabelo</span>
                        <span className="local-option">Cabeleleiros e salões</span>
                    </S.ServiceOption>
                    
                    <S.ServiceOption className="barba-option" onMouseEnter={() => handleMouseEnter("barba")}>
                        <span>Barba</span>
                        <span className="local-option">Barbearias</span>
                    </S.ServiceOption>

                    <S.ServiceOption className="sobrancelha-option" onMouseEnter={() => handleMouseEnter("sobrancelha")}>
                        <span>Sobrancelha</span>
                        <span className="local-option">Esteticistas</span>
                    </S.ServiceOption>
                    
                    <S.ServiceOption className="maquiagem-option" onMouseEnter={() => handleMouseEnter("maquiagem")}>
                        <span>Maquiagem</span>
                        <span className="local-option">Maquiadores</span>
                    </S.ServiceOption>
                    
                </S.ServicesOptions>
                <div className="services-img">
                    {selectedService === "barba" && <img src={BarbaSrc} alt="imagem de um barbeiro" />}
                    {selectedService === "cabelo" && <img src={CabeloSrc} alt="imagem de um cabeleireiro" />}
                    {selectedService === "sobrancelha" && <img src={MaquiagemSrc} alt="imagem de um cabeleireiro" />}
                    {selectedService === "maquiagem" && <img src={SobrancelhaSrc} alt="imagem de um cabeleireiro" />}
                </div>
            </S.ServiceContainer>
        </S.Services>
    );

};

export default Services;