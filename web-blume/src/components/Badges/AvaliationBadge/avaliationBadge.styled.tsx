import styled from 'styled-components';
import {colors as c} from '../../../styles/Colors';

export const BadgeBody = styled.div`
    padding: 15px 10px;
    background-color: ${c.gray200};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    border-radius: 15px;
    font-weight: bold;
    font-size: 12px;
`;