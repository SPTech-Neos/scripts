import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import * as S from './profileEstablishment.styled';

// import { NavLink } from 'react-router-dom';
import { CaretLeft } from "phosphor-react";

import { EmployeeResponseDto } from "../../utils/Employee/employee.types";

import HeaderProfile from "../../components/Headers/HeaderProfile/HeaderProfile";
import Tab from "../../components/Tab/Tab";
import EditModal from "../Modals/EditModal/EditModal";
import Badge from '../../components/Badges/AvaliationBadge/AvaliationBadge';
import Logo from "../../components/Images/Logo/Logo";
import Modal from "../../components/Modals/FormModal/Modal";
import { ModalProps } from "../../components/Modals/FormModal/modal.styled";

import { AuthContextClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";

import { colors as c, Themes } from '../../styles/Colors';


const ProfileB2B: React.FC = () => {

    const navigate = useNavigate();
    const { isAuthenticated, handleDeleteEmployee } = useContext(AuthContextEmployee);
    
    function getTheme(theme: string) {
        return theme === "B2C"? Themes.client : Themes.establishment;
    }

    const { isAuthenticated: isAuthenticatedEmployee } = useContext(AuthContextEmployee);
    const { isAuthenticated: isAuthenticatedClient } = useContext(AuthContextClient);
  

    const tokenFromCookie = Cookies.get('employeeInfo');
    const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

    useEffect(() => {
        if (tokenFromCookie) {
            console.log("Token de autenticação:", tokenFromCookie);
            console.log("LOGADO: " + isAuthenticatedEmployee);
        }
    }, [tokenFromCookie, isAuthenticatedEmployee]);

    const [modalProps, setModalProps] = useState<ModalProps | null>(null);

    useEffect(() => {
        if (tokenFromCookie) {
            console.log("Token de autenticação:", tokenFromCookie);
            console.log("LOGADO: " + isAuthenticated);
        }
    }, [tokenFromCookie, isAuthenticated]);

    const showModal = () => {
        const editModal = document.getElementById("editModal");
        editModal?.classList.add("active");
        console.log(editModal);
    };

    const openDeleteModal = () => {
        setModalProps({
            type: "error",
            message: "Tem certeza que deseja excluir a conta?",
            isOpen: true,
            linkTo: "/",
            onConfirm: handleDeleteConfirmation
        });
    };

    const handleDeleteConfirmation = () => {
        if (token) {
            handleDeleteEmployee(token.employeeId);
            setModalProps(null);
            navigate("/");
        }
    };

    
    
    if(isAuthenticatedClient){
        

        return (
            <S.ProfileB2BSection>
                <S.ContainerProfile direction="column">
                    <S.HeaderProfile>
                        <S.NavBody>
                            <S.NavItem>
                                <S.NavLink  to= '/feed' className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                    <CaretLeft size={22} />
                                </S.NavLink>
                            </S.NavItem>
                        </S.NavBody>
                        <Logo />
                    </S.HeaderProfile>
                    <S.PerfilContainer>
                        <S.Perfil tipoperfil="B2C" username="deixar dinamico da silva" /*terá que substituir pelo user da requisição */ />
                        <S.AvaliacaoContainer>
                            <Badge>
                                <S.StarImg weight="fill" color={getTheme("B2C").mainColor}></S.StarImg>
                                <span>5</span>
                            </Badge>
                            <Badge>Deixar</Badge>
                            <Badge>Dinamico</Badge>
                        </S.AvaliacaoContainer>
                    </S.PerfilContainer>
                    <S.Searchbar placeholderText="Salão para cabelos cacheados..."></S.Searchbar>
                    <Tab theme='client'/>
                </S.ContainerProfile>
            </S.ProfileB2BSection>
        );
        
    }else if(isAuthenticatedEmployee){
        return (
            token ? (
                <S.ProfileB2BSection>
                    <HeaderProfile />
                    <S.ContainerProfile direction="column">
    
    
                        <EditModal id="editModal"/>
    
                        <S.Perfil tipoperfil="B2B" username={(token as EmployeeResponseDto).name} />
                        <Tab theme='establishment'/>
                        <S.ContainerAtencao>
                            <S.ContainerTitle>
                                <S.TracoAtencao />
                                <S.TitleAtencao>
                                    Área de atenção
                                </S.TitleAtencao>
                                <S.TracoAtencao />
                            </S.ContainerTitle>
                            <S.ContainerAtencaoButtons>
                                    <S.ButtonDelete width="180px" color={c.error} onClick={openDeleteModal}>
                                          Excluir
                                    </S.ButtonDelete>
                                    <S.ButtonUpdate width="180px" color={c.warning} onClick={showModal}>
                                        Editar
                                    </S.ButtonUpdate>
                            </S.ContainerAtencaoButtons>
                        </S.ContainerAtencao>
                    </S.ContainerProfile>
                    {modalProps && (
                        <Modal
                            type={modalProps.type}
                            message={modalProps.message}
                            isOpen={modalProps.isOpen}
                            linkTo={modalProps.linkTo}
                            onConfirm={modalProps.onConfirm}
                            onClose={() => setModalProps(null)}
                        />
                    )}
                </ S.ProfileB2BSection>
            ) : null
        );
    }else{
        return null;
    }

    
};

export default ProfileB2B;
