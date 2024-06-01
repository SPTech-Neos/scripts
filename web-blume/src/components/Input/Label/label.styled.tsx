import styled from 'styled-components';
import { colors as c} from '../../../styles/Colors';

export interface LabelProps {
    label: string;
}

export const Label = styled.span`
    position: relative;
    z-index: 1;
    top: 10px;
    width: auto;

    background-color: ${c.gray100};
    margin: 0 25px;
    padding: 0 3px;
    font-size: 14px;
    font-family: 'Josefin Sans', 'Arial';
    color: ${c.gray900};
    
    // font-weight: regular;

`;
