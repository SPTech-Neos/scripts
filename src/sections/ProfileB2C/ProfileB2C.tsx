import React from "react";

import * as S from './profileB2C.styled';

import Logo from '../../components/Images/Logo/Logo';
import Profile from "../../components/Profile/Profile";
import EditModal from "../Modals/EditModal/EditModal";


const ProfileB2C: React.FC = () => {

    const showModal = () => {
        const editModal = document.getElementById("editModal");
        editModal?.classList.add("active");
        
    };

    const handleDelete = () => {
        console.log("delete");
    }


    return(
        <S.ContainerProfile direction="column">
            <S.HeaderProfile>
                <Logo />
                {/* <PrimaryButton color="" width="180px">ENTRAR</PrimaryButton> */}
            </S.HeaderProfile>

            <EditModal id="editModal"/>

            <S.ProfileContainer>
                <h1>PERFIL</h1>
                <Profile username={"TESTE B2C"} />
            </S.ProfileContainer>
            <S.InfoContainer>
                <S.Infos>
                    <S.LabelInfo>
                        E-mail
                    </S.LabelInfo>
                    <S.TextInfo>
                        email@exemplo.com
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

                        <S.ButtonDelete width="180px" color="var(--color-status-error)" onClick={handleDelete}>
                            Excluir
                        </S.ButtonDelete>

                        <S.ButtonUpdate width="180px" color="var(--color-status-warning)" onClick={showModal}>
                            Editar
                        </S.ButtonUpdate>   

                    </S.ContainerAtencaoButtons>
                </S.ContainerAtencao>
        </S.ContainerProfile>
    );
};

export default ProfileB2C;