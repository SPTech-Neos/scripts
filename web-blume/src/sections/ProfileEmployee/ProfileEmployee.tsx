import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

import * as S from '../ProfileClient/profileClient.styled';
import * as E from './profileEmployee.styled';

// import Logo from '../../components/Images/Logo/Logo';
import HeaderProfile from "../../components/Headers/HeaderProfile/HeaderProfile";
import Profile from "../../components/Profile/Profile";
import EditModal from "../Modals/EditModal/EditModal";

// import { AuthContextClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";

import { colors as c } from '../../styles/Colors';

import Modal from "../../components/Modals/FormModal/Modal";
import { ModalProps } from "../../components/Modals/FormModal/modal.styled";
import { EmployeeResponseDto } from "../../utils/Users/Employee/employee.types";




const ProfileEmployee: React.FC = () => {
    const navigate = useNavigate();
    const { isAuthenticated, handleDeleteEmployee } = useContext(AuthContextEmployee);

    const { isAuthenticated: isAuthenticatedEmployee, getEmployeeById } = useContext(AuthContextEmployee);
    const [employeeInfo, setEmployeeInfo] = useState<EmployeeResponseDto | null>(null);
    

    const tokenFromCookie = Cookies.get('employeeInfo');
    const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

    useEffect(() => {
            const fetchEmployeeData = async () => {
                const employeeEstab = await getEmployeeById(Number(token.employeeId)); 
                console.log("emplyoyee Stab na profileEmployee" + JSON.stringify(employeeEstab));
                setEmployeeInfo(employeeEstab);
            }

            fetchEmployeeData();

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

    return(
            <E.ContainerProfile direction="column">
                <HeaderProfile  />

                <EditModal id="editModal" tipo="employee"/>

                <E.ProfileContainer>
                    <h1>PERFIL</h1>
                    <Profile profile={employeeInfo?.imgUrl} username={employeeInfo?.name} />
                </E.ProfileContainer>
                <S.InfoContainer>
                    <S.Infos>
                        <E.LabelInfo>
                            E-mail
                        </E.LabelInfo>
                        <S.TextInfo>
                            {employeeInfo?.email}
                        </S.TextInfo>

                        <E.LabelInfo>
                            Endereço
                        </E.LabelInfo>
                        <S.TextInfo>
                            {employeeInfo?.establishment.local.address.street}
                        </S.TextInfo>

                        <E.LabelInfo>
                            CEP
                        </E.LabelInfo>
                        <S.TextInfo>
                            {/* {employeeInfo?.establishment.local.cep} */}
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
                    </S.ContainerAtencao>
            </E.ContainerProfile>
    );
};

export default ProfileEmployee;