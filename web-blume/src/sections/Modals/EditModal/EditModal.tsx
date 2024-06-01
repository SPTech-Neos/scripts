import React, {useContext, useState} from "react";
import * as S from './editModal.styled';

import InputContainer from "../../../components/Input/InputContainer/InputContainer";
import InputText from "../../../components/Input/InputText/InputText";
import { DangerButton, PrimaryButton } from "../../../components/Buttons/DefaultButton/DefaultButton";
import { AuthContextEmployee } from "../../../contexts/User/AuthContextProviderEmployee";

type Props = {
    id?: string;
    load?: boolean;
}

const EditModal: React.FC<Props> = ({id}) => {
    const { handleUpdateEmployee } = useContext(AuthContextEmployee);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    
    const closeModal = () => {
        const editModal = document.getElementById("editModal");
        setName("");
        setEmail("");
        setPassword("");
        editModal?.classList.remove("active");
    }

    const handleUpdateEmployeeData = async () => {
        try {
            const updatedFields = { name, email, password };
            await handleUpdateEmployee(updatedFields);
            closeModal();
        } catch (error) {
            console.error("Erro ao atualizar funcionário:", error);
        }
    };
    

    return (
        <S.EditModalContainer id={id}>
        <S.EditModalBody>

            <S.ContainerAtencao>
                <S.TracoAtencao />
                <S.TitleAtencao> 
                    Dados Pessoais 
                </S.TitleAtencao>
                <S.TracoAtencao />
            </S.ContainerAtencao>

            <S.InputWrapper>
                <InputContainer type="name" label="Nome Completo" placeholder="Kevin Rodrigues">
                    <InputText type="name" value={name} onChange={handleNameChange} />
                </InputContainer>
                <InputContainer type="email" label="Email" placeholder="exemple@email.com">
                    <InputText type="email" value={email} onChange={handleEmailChange} />
                </InputContainer>
                <InputContainer type="password" label="Senha" placeholder="****">
                    <InputText type="password" value={password} onChange={handlePasswordChange} />
                </InputContainer>
            </S.InputWrapper>
            
            <S.ButtonWrapper>
                <DangerButton width="180px" color="#bb1b29" onClick={closeModal}>
                    Cancelar
                </DangerButton>

                <PrimaryButton width="180px" onClick={handleUpdateEmployeeData}>
                    Atualizar
                </PrimaryButton>
            </S.ButtonWrapper>
        </S.EditModalBody>
    </S.EditModalContainer>
    );
}
    

export default EditModal;