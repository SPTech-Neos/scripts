import React, {useState} from "react";
import * as S from './cardPedido.styled';
import { Trash } from "phosphor-react";
import { Info } from "phosphor-react";
import { colors as c } from "../../../styles/Colors";
import Modal from "../../Modals/FormModal/Modal";
import { ModalProps } from "../../Modals/FormModal/modal.styled";
// import { ServiceAdapter } from "../../../adapters/Products/Service/Service";
import { PaymentAdapter } from "../../../adapters/Payments/Payment";
import { SchedulingAdapter } from "../../../adapters/Scheduling/Scheduling";
import { ProductAdapter } from "../../../adapters/Products/Product/Product";
import { FilterAdapter } from "../../../adapters/Filters/Filters";


export const CardPedidoProduto: React.FC<S.PedidoProps> = ({id, service, client, establishment, preco, status, imgUrl}) => {
    

    const classe = status == "Cancelado"? "cancel" : 
        status == "Em Andamento"? "andamento" 
        : "concluido"; 


    const [modalProps, setModalProps] = useState<ModalProps | null>(null);

    const openDeleteModal = () => {
        setModalProps({
            type: "error",
            message: "Tem certeza que deseja cancelar o pedido?",
            isOpen: true,
            linkTo: "/",
            onConfirm: handleDeleteConfirmation
        });
    };

    const handleReload = () => {
        window.location.reload();

    }

    const paymentAdapter = new PaymentAdapter

    const handleDeleteConfirmation = async () => {
       const resultDelete = await paymentAdapter.delete(Number(id));
       
       if(resultDelete){
           setModalProps(null);
           console.log(resultDelete);
            handleReload();
       }
       
    };

    return (
        <S.CardContainer id={id}>
            <S.ImgPedido  imgUrl={imgUrl}/>

            <S.InfoContainer>

                <S.InfoBody>
                    <S.Label> Produto </S.Label>
                    <S.LabelValue> {service} </S.LabelValue>
                </S.InfoBody>
                
                <S.InfoBody>
                    <S.Label> Cliente </S.Label>
                    <S.LabelValue> {client} </S.LabelValue>
                </S.InfoBody>

                <S.InfoBody>
                    <S.Label> Estabelecimento </S.Label>
                    <S.LabelValue> {establishment} </S.LabelValue>
                </S.InfoBody>

                <S.InfoBody>
                    <S.Label > Status </S.Label>
                    <S.LabelValue className={classe}> {status} </S.LabelValue>
                </S.InfoBody>

                <S.InfoBody>
                    <S.Label> Preço </S.Label>
                    <S.LabelValue> R$ {(preco)?.toFixed(2)} </S.LabelValue>
                </S.InfoBody>

                <S.InfoButtons>
                    <Trash weight="bold" color="red" size={status == "Em Andamento" ? 25 : 0} onClick={openDeleteModal}/>
                    <Info weight="bold" color={c.violet800} size={25}/>
                </S.InfoButtons>


            </S.InfoContainer>
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
         </S.CardContainer>
    );
}

export const CardPedidoServico: React.FC<S.PedidoProps> = ({id, service, client, employee, establishment, status, imgUrl}) => {

    

    const classe = status == "Cancelado"? "cancel" : 
        status == "Em Andamento"? "andamento" 
        : "concluido"; 


    const [modalProps, setModalProps] = useState<ModalProps | null>(null);

    const openDeleteModal = () => {
        setModalProps({
            type: "error",
            message: "Tem certeza que deseja cancelar o pedido?",
            isOpen: true,
            linkTo: "/",
            onConfirm: handleDeleteConfirmation
        });
    };

    const handleReload = () => {
        window.location.reload();

    }

    const schedulingAdapter = new SchedulingAdapter

    const handleDeleteConfirmation = async () => {
       const resultDelete = await schedulingAdapter.delete(Number(id));
       
       if(resultDelete){
           setModalProps(null);
           console.log(resultDelete);
            handleReload();
       }
       
    };

    return (
        <S.CardContainer id={id}>
            <S.ImgPedido imgUrl={imgUrl}/>

            <S.InfoContainer>

                <S.InfoBody>
                    <S.Label> Serviço </S.Label>
                    <S.LabelValue> {service} </S.LabelValue>
                </S.InfoBody>
                
                <S.InfoBody>
                    <S.Label> Cliente </S.Label>
                    <S.LabelValue> {client} </S.LabelValue>
                </S.InfoBody>

                <S.InfoBody>
                    <S.Label> Funcionário </S.Label>
                    <S.LabelValue> {employee} </S.LabelValue>
                </S.InfoBody>

                <S.InfoBody>
                    <S.Label > Status </S.Label>
                    <S.LabelValue className={classe}> {status} </S.LabelValue>
                </S.InfoBody>

                <S.InfoBody>
                    <S.Label> Estabelecimento </S.Label>
                    <S.LabelValue> {establishment} </S.LabelValue>
                </S.InfoBody>

                <S.InfoButtons>
                    <Trash weight="bold" color="red" size={status == "Em Andamento"? 25 : 0} onClick={openDeleteModal}/>
                    <Info weight="bold" color={c.violet800} size={25}/>
                </S.InfoButtons>


            </S.InfoContainer>
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
         </S.CardContainer>
    );
}


export const CardServico: React.FC<S.PedidoProps> = ({id, service, preco, status, imgUrl}) => {

    
    
    const classe = status == "Cancelado"? "cancel" : 
    status == "Em Andamento"? "andamento" 
    : "concluido"; 
    
    
    const [modalProps, setModalProps] = useState<ModalProps | null>(null);
    
    // const serviceAdapter = new ServiceAdapter;
    const filterAdapter = new FilterAdapter;

    const openDeleteModal = () => {
        setModalProps({
            type: "error",
            message: "Tem certeza que deseja cancelar o pedido?",
            isOpen: true,
            linkTo: "/",
            onConfirm: handleDeleteConfirmation
        });
    };
    
    const handleReload = () => {
        window.location.reload();

    }

    const handleDeleteConfirmation = async () => {
        const resultDelete = await filterAdapter.delete(Number(id));
       
        if(resultDelete){
            setModalProps(null);
            console.log(resultDelete);
            handleReload();
        }
       
    };

    return (
        <S.CardContainer id={id}>
            <S.ImgPedido imgUrl={imgUrl}/>

            <S.InfoContainer>

                <S.InfoBody>
                    <S.Label> Serviço </S.Label>
                    <S.LabelValue> {service} </S.LabelValue>
                </S.InfoBody>

                <S.InfoBody>
                    <S.Label > Status </S.Label>
                    <S.LabelValue className={classe}> {status} </S.LabelValue>
                </S.InfoBody>

                <S.InfoBody>
                    <S.Label> Preço </S.Label>
                    <S.LabelValue> R$ {preco} </S.LabelValue>
                </S.InfoBody>

                <S.InfoButtons>
                    <Trash weight="bold" color="red" size={status == "Em Andamento" || status == "Ativo"? 25 : 0} onClick={openDeleteModal}/>
                    <Info weight="bold" color={c.green300} size={25}/>
                </S.InfoButtons>


            </S.InfoContainer>
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
         </S.CardContainer>
    );
}

export const CardProduto: React.FC<S.PedidoProps> = ({id, service, preco, status, imgUrl, brand}) => {

    
    const classe = status == "Cancelado"? "cancel" : 
        status == "Em Andamento"? "andamento" 
        : "concluido"; 


    const [modalProps, setModalProps] = useState<ModalProps | null>(null);

    const openDeleteModal = () => {
        setModalProps({
            type: "error",
            message: "Tem certeza que deseja cancelar o pedido?",
            isOpen: true,
            linkTo: "/",
            onConfirm: handleDeleteConfirmation
        });
    };

    const handleReload = () => {
        window.location.reload();

    }

    const productAdapter = new ProductAdapter

    const handleDeleteConfirmation = async () => {
        console.log("iddddddddddd " + id)
        const resultDelete = await productAdapter.delete(Number(id));
       
        if(resultDelete){
            setModalProps(null);
            console.log(resultDelete);
            handleReload();
        }
       
    };

    return (
        <S.CardContainer id={id}>
            <S.ImgPedido imgUrl={imgUrl}/>

            <S.InfoContainer>

                <S.InfoBody>
                    <S.Label> Produto </S.Label>
                    <S.LabelValue> {service} </S.LabelValue>
                </S.InfoBody>
                
                <S.InfoBody>
                    <S.Label> Marca </S.Label>
                    <S.LabelValue> {brand} </S.LabelValue>
                </S.InfoBody>

                <S.InfoBody>
                    <S.Label > Status </S.Label>
                    <S.LabelValue className={classe}> {status} </S.LabelValue>
                </S.InfoBody>

                <S.InfoBody>
                    <S.Label> Preço </S.Label>
                    <S.LabelValue> R$ {preco} </S.LabelValue>
                </S.InfoBody>

                <S.InfoButtons>
                    <Trash weight="bold" color="red" size={status == "Em Andamento" || status == "Ativo"? 25 : 0} onClick={openDeleteModal}/>
                    <Info weight="bold" color={c.green300} size={25}/>
                </S.InfoButtons>


            </S.InfoContainer>
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
         </S.CardContainer>
    );
}
