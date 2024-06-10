import styled from 'styled-components'
import { colors as c } from '../../../styles/Colors';

export interface PedidoProps {
    id?: number | string
    service?: string,
    client?: string,
    employee?: string,
    establishment?: string,
    status?: string,
    preco?: number,
    imgUrl?: string,
    brand?: string
}


export const CardContainer = styled.div<PedidoProps>`
    width: 100%;
    height: 75px;
    background-color: ${c.gray100};
    border-radius: 8px;
    display: flex;
    flex-direction: row;    
    justify-content: space-around;
    align-items: center;
    box-shadow: 2px 2px 5px 1px ${c.gray700};
`;

export const ImgPedido = styled.div<PedidoProps>`
    width: 120px;
    height: 70%;
    background: ${c.gray200} center 100% / 100% 100% no-repeat url(${(props) => props.imgUrl});
    border-radius: 5px;
`

export const InfoContainer = styled.div`
    width: 85%;
    height: 70%;
    display: flex;
    justify-content: space-around;

    
`;

export const InfoBody = styled.div`
    width: 12%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & .cancel {
        color: ${c.error}
    }

    & .concluido {
        color: ${c.success};
    }

    & .andamento {
        color: ${c.warning}
    }
`;

export const Label = styled.span`
    font-size: 11px;
    color: ${c.gray300};
`;

export const LabelValue = styled.span`
    color: ${c.gray900};
    font-weight: bold;
    font-size: 12px;
`;

export const InfoButtons = styled(InfoBody)`
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;

    
    & svg:hover{
        cursor: pointer;
    }
`;