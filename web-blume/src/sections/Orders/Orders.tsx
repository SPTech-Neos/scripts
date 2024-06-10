import React, {useEffect, useContext, useState} from "react";
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';

import * as S from './orders.styled';

import Logo from "../../components/Images/Logo/Logo";
import { CardPedidoProduto, CardPedidoServico } from "../../components/Cards/CardPedido/CardPedido";
import { AuthContextClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import { SchedulingAdapter } from "../../adapters/Scheduling/Scheduling";
import { SchedulingResponseDto } from "../../utils/Scheduling/scheduling.types";
import { PaymentResponseDto } from "../../utils/Payment/payment.types";
import { PaymentAdapter } from "../../adapters/Payments/Payment";
import { EmployeeResponseDto } from "../../utils/Users/Employee/employee.types";
import { ClientResponseDto } from "../../utils/Users/Client/client.types";

const Orders: React.FC = () => {

    const { id } = useParams();

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const selected = document.getElementsByClassName("active");
        
        selected[0]?.classList.remove("active");

        const clicked = (event.target as HTMLElement);
        clicked.classList.add("active");

    }

    const handlePast = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log(event.target as HTMLElement);
    }
    const scheduleAdapter = new SchedulingAdapter();
    const paymentAdapter = new PaymentAdapter();

    const { isAuthenticated: isAuthenticatedEmployee } = useContext(AuthContextEmployee);
    const { isAuthenticated: isAuthenticatedClient } = useContext(AuthContextClient);

    const [scheduleInfo, setSchedule] = useState<SchedulingResponseDto[] | null>(null);
    const [paymentsInfo, setPayments] = useState<PaymentResponseDto[] | null>(null);


    const tokenEmployeeFromCookie = Cookies.get('employeeInfo');
    const tokenEmployee: EmployeeResponseDto = tokenEmployeeFromCookie ? JSON.parse(tokenEmployeeFromCookie) : null;

    const tokenClientFromCookie = Cookies.get('clientInfo');
    const tokenClient: ClientResponseDto = tokenClientFromCookie ? JSON.parse(tokenClientFromCookie) : null;

    +
    /*const handleGetSchedulings = async () => {
        try {
            const allSchedule = await scheduleAdapter.getAllSchedulings(); 
            setSchedule(allSchedule);
        }catch(error){
            console.log(error);
        }
    }

    const handleGetPayments = async () => {
        try {
            const allPayments = await paymentAdapter.getAllPayments(); 
            setPayments(allPayments);
        }catch(error){
            console.log(error);
        }
    }
    
    useEffect(() => {   
        handleGetSchedulings();
        handleGetPayments();
    },[])
    
    */



    // const listaProdutos: { produto: string; cliente: string; estabelecimento: string; preco: number; }[] = []
    // const listaScheduling: { servico: string; funcionario: string; cliente: string; }[] = [];

    /*useEffect(() => {
        paymentsInfo?.forEach(e => {
            listaProdutos.push({
                produto: e.product.name,
                cliente: e.client.name,
                estabelecimento: e.establishment.name,
                preco: e.product.value
            })
        });

        console.log(listaProdutos)

        scheduleInfo?.forEach(e => {
            listaScheduling.push({
                servico: e.service.specification,
                funcionario: e.employee.name,
                cliente: e.client.name,
            })
        })


    },[paymentsInfo, scheduleInfo])*/


    // LOAD SCHEDULINGS =====================
    useEffect(() => {
        if (tokenClient && id) {

            const fetchPaymentData = async () => {
                try {
                    const paymentsData = await paymentAdapter.getPaymentsByClientId(Number(id)); 
                    setPayments(paymentsData);
                }catch(error){
                    console.log(error);
                }
            }

            const fetchSchedulingData = async () => {
                try {
                    const scheduleData = await scheduleAdapter.getSchedulingsByClientId(Number(id)); 
                    setSchedule(scheduleData);
                }catch(error){
                    console.log(error);
                }
            }

            fetchPaymentData();
            fetchSchedulingData();

        } else if (tokenEmployee && id) {

            const fetchPaymentData = async () => {
                try {
                    const establishmentId: number = tokenEmployee.establishment.id;

                    const paymentsData = await paymentAdapter.getPaymentsByEstablishmentId(establishmentId); 
                    setPayments(paymentsData);
                }catch(error){
                    console.log(error);
                }
            }

            const fetchSchedulingData = async () => {
                try {
                    const scheduleData = await scheduleAdapter.getSchedulingsByEmployeeId(Number(id)); 
                    setSchedule(scheduleData);
                }catch(error){
                    console.log(error);
                }
            }
            
            fetchPaymentData();
            fetchSchedulingData();

        }

    }, []);

    let theme = "";

    if(isAuthenticatedEmployee){
        theme ="B2B";
        return (
            tokenEmployee ? (
                <S.OrdersSectionContainer tema={theme}>
                    <S.OrdersHeader>
                        <Logo />
                    </S.OrdersHeader>
                    <S.OrdersBody>
                        <S.FiltersContainer>

                            <S.BadgesContainer tema={theme}>
                            <S.Badge onClick={handleClick}>
                                    Todos
                                </S.Badge >
                                <S.Badge onClick={handleClick}>
                                    Em andamento
                                </S.Badge >
                                <S.Badge onClick={handleClick}>
                                    Cancelado
                                </S.Badge>
                                <S.Badge onClick={handleClick}>
                                    Concluído
                                </S.Badge>

                            </S.BadgesContainer>
                            <S.HistoricoContainer tema={theme}>
                                <h2 onClick={handlePast}>HISTÓRICO</h2>
                            </S.HistoricoContainer>    
                        </S.FiltersContainer>

                        <S.OrdersContainer>
                            {paymentsInfo && paymentsInfo.map((data) => (
                                <CardPedidoProduto 
                                    id={data.id}
                                    client={data.client.name}
                                    establishment={data.establishment.name}
                                    preco={data.product.value}
                                    service={data.product.name}
                                    status={"Em Andamento"}
                                    imgUrl={data.product.imgUrl || ""}
                                />
                            ))}
                            {scheduleInfo && scheduleInfo.map((data) => (
                                <CardPedidoServico 
                                    id={data.idSchedulig}
                                    client={data.client.name}
                                    establishment={data.employee.establishment.name}
                                    employee={data.employee.name}
                                    service={data.service.specification}
                                    status={data.schedulingStatus.description}
                                    imgUrl={data.service.imgUrl ? data.service.imgUrl : ""}
                                />
                            ))}
                        </S.OrdersContainer>    
                    </S.OrdersBody>

                </S.OrdersSectionContainer>
            ) : null
        );
    
    }else if(isAuthenticatedClient){
        theme = "B2C";
        return (
            tokenClient ? (
                <S.OrdersSectionContainer tema={theme}>
                    <S.OrdersHeader>
                        <Logo />
                    </S.OrdersHeader>
                    <S.OrdersBody>
                        <S.FiltersContainer>

                            <S.BadgesContainer tema={theme}>
                            <S.Badge onClick={handleClick}>
                                    Todos
                                </S.Badge >
                                <S.Badge onClick={handleClick}>
                                    Em andamento
                                </S.Badge >
                                <S.Badge onClick={handleClick}>
                                    Cancelado
                                </S.Badge>
                                <S.Badge onClick={handleClick}>
                                    Concluído
                                </S.Badge>

                            </S.BadgesContainer>
                            <S.HistoricoContainer tema={theme}>
                                <h2 onClick={handlePast}>HISTÓRICO</h2>
                            </S.HistoricoContainer>    
                        </S.FiltersContainer>

                        <S.OrdersContainer>
                            {paymentsInfo && paymentsInfo.map((data) => (
                                <CardPedidoProduto 
                                    id={data.id}
                                    client={data.client.name}
                                    establishment={data.establishment.name}
                                    preco={data.product.value}
                                    service={data.product.name}
                                    status={"Em Andamento"}
                                    imgUrl={data.product.imgUrl || ""}
                                />
                            ))}

                            {scheduleInfo && scheduleInfo.map((data) => (
                                <CardPedidoServico 
                                    id={data.idSchedulig}
                                    client={data.client.name}
                                    establishment={data.employee.establishment.name}
                                    employee={data.employee.name}
                                    service={data.service.specification}
                                    status={data.schedulingStatus.description}
                                    imgUrl={data.service.imgUrl ? data.service.imgUrl : ""}
                                />
                            ))}
                        </S.OrdersContainer>    
                    </S.OrdersBody>

                </S.OrdersSectionContainer>
            ): null
        );
    }
        return (
                tokenClient ? (
                <S.OrdersSectionContainer tema={theme}>
                    <S.OrdersHeader>
                        <Logo />
                    </S.OrdersHeader>
                    <S.OrdersBody>
                        <S.FiltersContainer>

                            <S.BadgesContainer tema={theme}>
                            <S.Badge onClick={handleClick}>
                                    Todos
                                </S.Badge >
                                <S.Badge onClick={handleClick}>
                                    Em andamento
                                </S.Badge >
                                <S.Badge onClick={handleClick}>
                                    Cancelado
                                </S.Badge>
                                <S.Badge onClick={handleClick}>
                                    Concluído
                                </S.Badge>

                            </S.BadgesContainer>
                            <S.HistoricoContainer tema={theme}>
                                <h2 onClick={handlePast}>HISTÓRICO</h2>
                            </S.HistoricoContainer>    
                        </S.FiltersContainer>

                        <S.OrdersContainer>
                            <CardPedidoServico 
                                
                                client="deixar dinamico" 
                                employee="deixar"
                                establishment="dinamico"
                                preco={20}
                                service="deixar"
                                status="Em Andamento"
                                imgUrl=""
                            />
                        </S.OrdersContainer>    
                    </S.OrdersBody>

                </S.OrdersSectionContainer>
            ) : null
        );
}

export default Orders;
