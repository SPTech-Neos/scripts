/* eslint-disable react-refresh/only-export-components */
import styled from 'styled-components';
import { colors as c } from '../../../styles/Colors';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { X } from 'phosphor-react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export const ModalSection = styled.div`
    width: 120%;
    height: 100vh;
    background-color: #30303065;
    position: fixed;
    z-index: 3;
    display: none;
    justify-content: center;
    align-items: center;

`;

export const ModalContainer = styled.div`
    width: 70%;
    height: 80%;
    display: flex;
    background-color: ${c.gray100};
    border-radius: 10px;
`;

export const Localization = styled(LocalizationProvider)`
    
`;

export const Calendario = styled(DateCalendar)`
    border: 2px solid ${c.violet100};
    box-shadow: 0px 0px 3px 3px ${c.violet100};
`;

export const ModalBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    & .css-1wy8uaa-MuiButtonBase-root-MuiPickersDay-root:focus.Mui-selected, .css-1wy8uaa-MuiButtonBase-root-MuiPickersDay-root.Mui-selected:hover, .css-23p0if-MuiButtonBase-root-MuiPickersDay-root.Mui-selected:hover, .css-23p0if-MuiButtonBase-root-MuiPickersDay-root.Mui-selected, .css-1wy8uaa-MuiButtonBase-root-MuiPickersDay-root.Mui-selected{
        background-color: ${c.violet100};
    }

    & ${Calendario} {
        width: 40%;
        margin: 0;
    }

    & h2{
        width: 45%;
    }

    & .active {
        background-color: ${c.violet100};
        color: white;
    }
`;

export const ScheduleContainer = styled.div`
    width: 100%;
    height: 65%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    align-items: center;
`;

export const HourContainer = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`; 

export const CloseModal = styled(X)`
    top: 10px;
    left: 48%;
    position: relative;

    &:hover{
        cursor: pointer;
    }
`;