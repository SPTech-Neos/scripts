import React from 'react';

import InputContainer from '../components/Input/InputContainer/InputContainer';
import { Checkbox } from '../components/Input/Checkbox/Checkbox';
import { FloatButton } from '../components/Buttons/FloatButton/FloatButton';
import SlIcon from '../../node_modules/@shoelace-style/shoelace/dist/react/icon';
import { ArrowLeft } from "@phosphor-icons/react";

const Test: React.FC = () => (
	<>
        <InputContainer label='Label' placeholder='Teste placeholder...' type='password' children={''}></InputContainer>
        <InputContainer label='Label' placeholder='Teste placeholder...' type='datetime-local' children={''}></InputContainer>

        <div style={{ color: '#4a90e2' }}>
            <SlIcon name="exclamation-triangle"></SlIcon>
            <SlIcon name="archive"></SlIcon>
            <SlIcon name="battery-charging"></SlIcon>
            <SlIcon name="bell"></SlIcon>
        </div>

        <Checkbox label='checkbox'></Checkbox>

        <FloatButton>
            <ArrowLeft weight='bold' />
            <p>FloatButton</p> 
        </FloatButton>
	</>
);

export default Test;