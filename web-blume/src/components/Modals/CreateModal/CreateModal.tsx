import React, { Dispatch, SetStateAction, useContext, useState, useEffect } from "react";
import * as S from './createModal.styled';
import Cookies from "js-cookie";

import InputText from "../../Input/InputText/InputText";
import { PrimaryButton } from "../../Button/button.styled";
import { AuthContextEmployee } from "../../../contexts/User/AuthContextProviderEmployee";
import { ServiceTypeAdapter } from "../../../adapters/Products/Service/ServiceType";
import { ServiceTypeResponseDto } from "../../../utils/Products/Service/serviceType.types";
import { ServiceAdapter } from "../../../adapters/Products/Service/Service";
import { EstablishmentAdapter } from "../../../adapters/Establishment/Establishment";
import { EstablishmentFullResponseDto } from "../../../utils/Establishment/establishment.types";
import { EmployeeServicesAdapter } from "../../../adapters/User/Employee/EmployeeServices";
import { FilterAdapter } from "../../../adapters/Filters/Filters";
import { ProductTypeAdapter } from "../../../adapters/Products/Product/ProducType";
import { ProductTypeResponseDto } from "../../../utils/Products/Product/productTypes.types";
import { ProductAdapter } from "../../../adapters/Products/Product/Product";

type Props = {
    id?: string;
    titulo?: string;
};

const CreateModal: React.FC<Props> = ({ id, titulo }) => {
    const { handleCreateEmployee } = useContext(AuthContextEmployee);
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [description, setDescription] = useState("");
    const [preco, setPreco] = useState("");
    const [funcionario, setFuncionario] = useState("");
    const [status, setStatus] = useState("");
    const [serviceType, setServiceType] = useState("");
    const [productType, setProductType] = useState("");

    
    const [productTypeInfo, setProductTypeInfo] = useState<ProductTypeResponseDto[] | null>(null);
    const [serviceTypeInfo, setServiceTypeInfo] = useState<ServiceTypeResponseDto[] | null>(null);

    const adapterServiceType = new ServiceTypeAdapter;
    const estabAdapter = new EstablishmentAdapter;
    const employeeServiceAdapter = new EmployeeServicesAdapter;
    const filterAdapter = new FilterAdapter;
    const productTypeAdapter = new ProductTypeAdapter;
    const adapterProduct = new ProductAdapter;

       
    const { isAuthenticated: isAuthenticatedEmployee } = useContext(AuthContextEmployee);
    const tokenFromCookie = Cookies.get('employeeInfo');
    const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

    const [establishmentFull, setEstablishmentFull] = useState<EstablishmentFullResponseDto | null>(null);

    const handleGetProductsType = async () => {
        try{
            const result = await productTypeAdapter.getAllProductsType();
            if(result){
                setProductTypeInfo(result);
            }
        }catch(error){
            console.log(error);
        }
    }
    
    const handleGetEstablishment = async () => {
        try{
            const result = await estabAdapter.getAllOfEstab(token.establishment.id);
            console.log("Resultado: " + result);
            if(result){
                setEstablishmentFull(result);
            }
        }catch (error) {
            console.log(error);
        }
    }

    const handleGetServiceTypes = async () => {
        try{
            const result = await adapterServiceType.getAllServicesType();
            console.log("Resultado: " + result);
            if(result){
                setServiceTypeInfo(result);
            }
        }catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetServiceTypes();
        handleGetEstablishment();
        handleGetProductsType();
    }, [isAuthenticatedEmployee]);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, setStateFunction: Dispatch<SetStateAction<string>>) => {
        setStateFunction(event.target.value);
    };

    const handleClose = () => {
        const modal = document.getElementById("modal-adicionar");
        modal?.classList.remove("active");
        console.log(serviceType);
        setName("")
        setDescription("")
        setEmail("")
        setPassword("")
        setFuncionario("")
        setPreco("")
        setServiceType("")
        setStatus("")
    };

    const handleReload = () => {
        window.location.reload();
    }

    const adapterService = new ServiceAdapter;

    const handleSave = async () => {

        if(titulo == "Produto"){


            const productNew = {
                name: name,
                brand: brand, 
                type: productType,
                value: Number(preco),
                establishment: token.establishment.id
            }

            console.log(productNew)
            const productCreated = await adapterProduct.create(productNew);
            console.log(productCreated);
        }


        if(titulo == "Serviço"){

            const serviceNew = {
                specification: name,
                serviceType: Number(serviceType)
            }

            if(serviceNew){
                console.log("entrei no if serviço")
                const serviceCreated = await adapterService.register(serviceNew);  
                console.log("serviço criando" + JSON.stringify(serviceCreated));
            
                if(serviceCreated){
                    const employeeServicesNew = {
                        hoursSpent: new Date().getDate(),
                        expertise: 1,
                        fkEmployee: Number(funcionario),
                        fkService: serviceCreated.serviceId
                    }

                    if(employeeServicesNew){
                        const employeeServiceCreated = await employeeServiceAdapter.create(employeeServicesNew)
                        console.log("serviço employee criado" + JSON.stringify(employeeServiceCreated));
    
                        const filterNew = {
                            price: Number(preco),
                            fkService: serviceCreated.serviceId,
                            fkEstablishment: Number(token.establishment.id)
                        }
    
                        const filterCreated = await filterAdapter.create(filterNew);
                        console.log("filtro criado" + filterCreated);
                }


                }
            }


        }


        if(titulo == "Funcionário"){
            console.log("handle save")
            
            const employeeNew = {
                name: name, 
                email: email, 
                password: password, 
                fkEstablishment: token.establishment.id, 
                employeeType: 1 
            }

            if(employeeNew){
                console.log("entrei no if")
                const employeeEstab = handleCreateEmployee(employeeNew);  
                console.log("emplyoyee criando" + JSON.stringify(employeeEstab));
            }

        }     

        handleClose();
        handleReload();
    };

    return (
        <S.ModalSection id={id}>
            <S.ModalContainer>
                <S.ModalHeader>
                    <S.ModalImage />
                    <h1>Adicionar {titulo}</h1>
                </S.ModalHeader>
                <S.ModalBody>
                    <S.InputContainer>
                        <InputText
                            type="text"
                            onChange={(e => handleChange(e, setName))}
                            label={titulo=="Serviço" ? `Especificação do ${titulo}`: `Nome do ${titulo}`}
                            theme="establishment"
                            value={name}
                            placeholder={`Nome do ${titulo}....`}
                        />
                    </S.InputContainer>

                    {titulo === "Produto"? (
                    <S.InputContainer>
                        <InputText
                            type="text"
                            onChange={(e => handleChange(e, setBrand))}
                            label={titulo =="Produto"? `Marca do ${titulo}` : `Nome do ${titulo}` }
                            theme="establishment"
                            value={brand}
                            placeholder={`Marca do ${titulo}....`}
                        />
                    </S.InputContainer>
                    ) : null}
                    {titulo === "Produto"? (
                        <S.SelectType name="Selecione o tipo do produto" onChange={(e => handleChange(e, setProductType))}>
                                <option value="" disabled selected>Selecione a marca do produto....</option>
                                {productTypeInfo && productTypeInfo.map((data) => (
                                    <option  value={data.id}> {data.name} </option>
                                ))}
                        </S.SelectType>
                    ) : null}   
                    {titulo === "Serviço" && (
                        <S.InputContainer>
                            <S.SelectType name="Selecione o funcionário do serviço" onChange={(e => handleChange(e, setFuncionario))}>
                            <option value="" disabled selected>Selecione o funcionário do serviço....</option>
                            {establishmentFull?.employees && establishmentFull.employees.map((data: { id: string | number, name: string }) => (
                                <option  value={data.id}> {data.name} </option>
                            ))}
                        </S.SelectType>
                        </S.InputContainer>
                    )}
                    {titulo === "Funcionário" && (
                        <S.InputContainer>
                            <InputText
                                type="text"
                                onChange={(e => handleChange(e, setEmail))}
                                label={`Email do ${titulo}`}
                                theme="establishment"
                                value={email}
                                placeholder={`Email do ${titulo}....`}
                            />
                        </S.InputContainer>
                    )}
                    {titulo === "Serviço" && (
                        <S.SelectType name="Selecione o tipo do serviço" onChange={(e => handleChange(e, setServiceType))}>
                            <option value="" disabled selected>Selecione o tipo do serviço....</option>
                            {serviceTypeInfo && serviceTypeInfo.map((data) => (
                                <option  value={data.id}> {data.name} </option>
                            ))}
                        </S.SelectType>
                    )}
                    {titulo === "Funcionário" && (
                    <S.InputContainer>
                        <InputText
                            type="password"
                            onChange={(e => handleChange(e, setPassword))}
                            label={`Senha do ${titulo}`}
                            theme="establishment"
                            value={password}
                            placeholder={`Senha do ${titulo}....`}
                        />
                    </S.InputContainer>
                    )}
                    {titulo != "Funcionário" && (
                    <S.InputContainer>
                        <InputText
                            type="number"
                            onChange={(e => handleChange(e, setPreco))}
                            label={`Preço do ${titulo}`}
                            theme="establishment"
                            value={preco}
                            placeholder={`Preço do ${titulo}....`}
                        />
                    </S.InputContainer>
                    )}
                    {titulo != "Funcionário" && (
                        <S.InputContainer>
                            <InputText
                                type="text"
                                onChange={(e => handleChange(e, setStatus))}
                                label={`Status do ${titulo}`}
                                theme="establishment"
                                value={status}
                                placeholder={`Status do ${titulo}....`}
                            />
                        </S.InputContainer>
                    )}
                    <S.InputContainer>
                        <InputText
                            type="text"
                            onChange={(e => handleChange(e, setDescription))}
                            label={`Descrição do ${titulo}`}
                            theme="establishment"
                            value={description}
                            placeholder={`Descrição do ${titulo}....`}
                        />
                    </S.InputContainer>
                    <S.ButtonsContainer>
                        <S.ReturnButton onClick={handleClose}>
                            Voltar
                        </S.ReturnButton>
                        <PrimaryButton width="200px" onClick={handleSave}>
                            Finalizar
                        </PrimaryButton>
                    </S.ButtonsContainer>
                </S.ModalBody>
            </S.ModalContainer>
        </S.ModalSection>
    );
};

export default CreateModal;
