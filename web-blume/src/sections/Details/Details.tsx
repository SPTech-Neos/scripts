import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as S from './details.styled';

import Logo from "../../components/Images/Logo/Logo";

import { PrimaryButton as Button } from "../../components/Buttons/DefaultButton/DefaultButton";
import { CaretLeft } from "phosphor-react";

import Modal from "../../components/Modals/ChooseModal/ChooseModal";
import Schedule from "../../components/Modals/ScheduleModal/ScheduleModal";

import { ProductAdapter } from "../../adapters/Products/Product/Product";
import { ProductResponseDto } from "../../utils/Products/Product/product.types";

import { FilterAdapter } from "../../adapters/Filters/Filters";
import { FilterResponseDto } from "../../utils/Filter/filters.types";
 
const Details: React.FC<S.detailsProps> = () => {

    const { type, id } = useParams();

    const openModal = () => {
        const editModal = document.getElementById("editModal");
        console.log(editModal);
        editModal?.classList.add("active-modal");
    }

    const [productInfo, setProductInfo] = useState<ProductResponseDto | null>(null);
    const [filterInfo, setFilterInfo] = useState<FilterResponseDto | null>(null);

    const productAdapter = new ProductAdapter;
    const filterAdapter = new FilterAdapter;

    // LOAD PRODUTO/SERVIÇO =========================
    useEffect(() => {
        if (type === "product" && id) {

            const fetchProductData = async () => {
              const data = await productAdapter.getProductById(Number(id));
              setProductInfo(data);
            };
            fetchProductData();

        } else if (type === "service" && id) {

            const fetchFilterData = async () => {
                const data = await filterAdapter.getFilterById(Number(id));
                setFilterInfo(data);
              };
              fetchFilterData();

        }

    }, []);

    return (
        productInfo || filterInfo ? (
            <S.DetailsSection>
                <Schedule id="schedule" />
                <Modal id="editModal" />   

                <S.DetaisHeader>
                <S.NavBody>

                    <S.NavItem>
                        <S.NavLink  to= '/feed' className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                            <CaretLeft size={22} />
                        </S.NavLink>
                    </S.NavItem>

                </S.NavBody>
                <Logo />

                </S.DetaisHeader>

                <S.DetailsContainer direction="column">

                    <S.DetailsProfile>

                        <S.DetailsImgContainer theme="client">
                            {/*" MUDAR PARA IMAGEM DO PRODUTO "*/}
                            <S.DetailsImg 
                                src={filterInfo?.service.imgUrl || productInfo?.imgUrl} 
                                alt={`Imagem de ${filterInfo?.service.imgUrl || productInfo?.imgUrl}`}/>

                            <S.RatingStar weight="fill"/>
                            <span>{(Math.random() + 100).toFixed(0)} Avaliações</span>

                        </S.DetailsImgContainer>

                        <S.DetailsInfoContainer>
                            <S.NameInfoContainer>
                                <h1>{filterInfo?.service.specification || productInfo?.name}</h1>

                                <S.BadgeContainer>
                                    <S.BadgeService>{productInfo?.type.specification || filterInfo?.service.specification}</S.BadgeService>
                                </S.BadgeContainer>

                                <S.ProfileInfoContainer>
                                    <S.ProfileImg 
                                        src={filterInfo?.establishment.imgUrl || productInfo?.establishment.imgUrl} 
                                        alt={`Imagem de ${filterInfo?.establishment.imgUrl || productInfo?.establishment.imgUrl}`}/>

                                    <h3>{filterInfo?.establishment.name || productInfo?.establishment.name}</h3>
                                </S.ProfileInfoContainer>

                                <S.PrecificacaoContainer>
                                    <h1>R$ {(filterInfo?.price)?.toFixed(2) || (productInfo?.value)?.toFixed(2)}</h1>
                                    <Button width="180px" size="md" onClick={openModal}>{filterInfo ? "Agendar" : "Comprar"}</Button>
                                </S.PrecificacaoContainer>
                            </S.NameInfoContainer>
                        </S.DetailsInfoContainer>
                    </S.DetailsProfile>

                    <S.DetailsDesc>
                        <S.DescContainer>
                            {/*<h1>
                                {productInfo?.brand}
                            </h1>*/}
                            <S.ContainerDescText>
                                {/*<span>
                                    Descrição do item. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud.
                                 </span>*/}
                            </S.ContainerDescText>
                        </S.DescContainer>
                        <S.CardContainer>
                            <S.CardDesc titulo={filterInfo?.establishment.name ?? productInfo?.establishment.name ?? ""} texto={productInfo?.brand ?? ""}>
                                <S.ProfileImg 
                                    src={filterInfo?.establishment.imgUrl || productInfo?.establishment.imgUrl} 
                                    alt={`Imagem de ${filterInfo?.establishment.imgUrl || productInfo?.establishment.imgUrl}`}/>
                            </S.CardDesc>
                        </S.CardContainer>
                    </S.DetailsDesc>
                    
                </S.DetailsContainer>
            </S.DetailsSection>) : null
    );
} 

export default Details;