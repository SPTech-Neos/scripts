import styled from 'styled-components';
import { colors as c } from '../../styles/Colors';

export const TimePickerContainer = styled.div`
    width: 90%;
    height: 90%;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 40% 40%;
    grid-auto-rows: 50px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 10px;
        border-radius: 10px;
        background-color: ${c.gray200};
    }

    &::-webkit-scrollbar-thumb {
        background: ${c.violet100};
        border-radius: 10px;
}
`;