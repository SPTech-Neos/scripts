import React,{useState, useEffect} from "react";
import * as S from './employees.styled'

import Cookies from "js-cookie";
import Searchbar from "../../components/Searchbar/Searchbar";
import CardEmployee from "../../components/Cards/CardEmployee/CardEmployee";
import CreateModal from "../../components/Modals/CreateModal/CreateModal";
import { EstablishmentAdapter } from "../../adapters/Establishment/Establishment";
// import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
// import { EmployeeResponseDto } from "../../utils/Users/Employee/employee.types";
import { EstablishmentFullResponseDto } from "../../utils/Establishment/establishment.types";

const Employees: React.FC = () => {


    const tokenFromCookie = Cookies.get('employeeInfo');
    const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;
    const estabAdapter = new EstablishmentAdapter;

    const [establishmentFull, setEstablishmentFull] = useState<EstablishmentFullResponseDto | null>(null);
        
    useEffect(() => {
        handleGetEmployees();
    }, []);

    const handleGetEmployees = async () => {
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

    const handleClickEmployee = (event: React.MouseEvent<HTMLDivElement>) => {
        const lastSelected = document.getElementsByClassName("active");
        lastSelected[0]?.classList.remove("active");
        const selected = (event.target as HTMLElement);
        const parent = selected?.parentElement

        console.log(selected);

        if(parent?.id == "collection-cards"){
            console.log(selected);
            selected.classList.add("active");
        }else {
            console.log(parent);
            parent?.classList.add("active");
        }
      
    }

    const handleClickAdd = (event: React.MouseEvent<HTMLDivElement>) => {
        const lastSelected = document.getElementsByClassName("active");
        lastSelected[0]?.classList.remove("active");
        const selected = (event.target as HTMLElement);
        const parent = selected?.parentElement;

        console.log(selected);

        if(parent?.id == "collection-cards"){
            console.log(selected);
            selected.classList.add("active");
        }else if(parent?.parentElement?.parentElement?.id == "collection-cards"){
            console.log(parent?.parentElement?.id);
            parent?.parentElement?.classList.add("active");
        }

        handleAddEmployee();
    }

    const handleAddEmployee = () => {
        const modal = document.getElementById("modal-adicionar");

        modal?.classList.add("active");
    }

    return(
        <S.EmployeeSection>
            <CreateModal id="modal-adicionar" titulo="Funcionário" />
            <S.EmployeeContainer>
                <h1> Funcionários </h1>
                <Searchbar placeholderText="Nome do funcionário..."/>
                <S.CardsContainer id="collection-cards">  
                    <CardEmployee tipoCard="adicionar" onClick={handleClickAdd}/>
                    {establishmentFull && establishmentFull.employees.map((data: { id: number | undefined; name: string | undefined; }) => (
                        <CardEmployee 
                        id={data.id}
                        tipoCard="funcionario" 
                        onClick={handleClickEmployee} 
                        imgUrl="" 
                        nome={data.name}
                        />
                    ))}
                </S.CardsContainer>
            </S.EmployeeContainer>
        </S.EmployeeSection>
    );
}

export default Employees;