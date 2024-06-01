import styled from 'styled-components';
import {colors as c} from '../../../styles/Colors';

export const BadgeBody = styled.div`
    width: 80px;
    height: 30px;
    background-color: ${c.gray200};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    font-weight: bold;
`;