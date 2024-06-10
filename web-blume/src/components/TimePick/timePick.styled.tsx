import styled from 'styled-components';
import { colors as c } from '../../styles/Colors';

export const TimePickBody = styled.div`
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${c.gray200};
    border-radius: 10px;


    &:hover{
        cursor: pointer;
        color: ${c.gray100};
        background-color: ${c.violet100};
    }
`;