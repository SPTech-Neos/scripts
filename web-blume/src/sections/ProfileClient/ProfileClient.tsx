import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

import { colors as c } from '../../styles/Colors';

import * as S from './profileClient.styled';

import Logo from '../../components/Images/Logo/Logo';
import Profile from "../../components/Profile/Profile";
import EditModal from "../Modals/EditModal/EditModal";
import { AuthContextClient } from "../../contexts/User/AuthContextProviderClient";
import { ClientResponseDto } from "../../utils/Users/Client/client.types";

import Modal from "../../components/Modals/FormModal/Modal";
import { ModalProps } from "../../components/Modals/FormModal/modal.styled";


const ProfileB2C: React.FC = () => {
    const navigate = useNavigate();
    const { isAuthenticated, handleDeleteClient } = useContext(AuthContextClient);

    const tokenFromCookie = Cookies.get('clientInfo');
    const token: ClientResponseDto = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

    const [modalProps, setModalProps] = useState<ModalProps | null>(null);
    const [isOpenState, setIsOpenState] = useState(false);

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
            linkTo: "/",
            onConfirm: handleDeleteConfirmation
        });
        setIsOpenState(true); 
    };

    console.log(token);
    const handleDeleteConfirmation = () => {
        if (token) {
            handleDeleteClient(token.clientId, token.token);
            setModalProps(null);
            setIsOpenState(false); // Fechar o modal após confirmação
            navigate("/");
        }
    };

    return(
        token ? (
            <S.ContainerProfile direction="column">
                <S.HeaderProfile>
                    <Logo />
                    {/* <PrimaryButton color="" width="180px">ENTRAR</PrimaryButton> */}
                </S.HeaderProfile>

                <EditModal id="editModal"/>

                <S.ProfileContainer>
                    <h1>PERFIL</h1>
                    <Profile username={token.name} />
                </S.ProfileContainer>
                <S.InfoContainer>
                    <S.Infos>
                        <S.LabelInfo>
                            E-mail
                        </S.LabelInfo>
                        <S.TextInfo>
                            {token.email}
                        </S.TextInfo>

                        <S.LabelInfo>
                            Endereço
                        </S.LabelInfo>
                        <S.TextInfo>
                            Rua Coração de Maçã, 211, apt 52C
                        </S.TextInfo>

                        <S.LabelInfo>
                            CEP
                        </S.LabelInfo>
                        <S.TextInfo>
                            08474-230
                        </S.TextInfo>
                    </S.Infos>
                </S.InfoContainer>
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

                <Modal
                    type={modalProps?.type || ""}
                    message={modalProps?.message || ""}
                    isOpen={isOpenState}
                    linkTo={modalProps?.linkTo || "/"}
                    onConfirm={modalProps?.onConfirm}
                    onClose={() => setIsOpenState(false)}
                />
            </S.ContainerProfile>
        ) : null
    );
};

export default ProfileB2C;