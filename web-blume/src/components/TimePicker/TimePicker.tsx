/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
import React, {useEffect, useState} from "react";
import TimePick from "../TimePick/TimePick";
import * as S from './timePicker.styled';

type estado = {
    horarioAtual: number,
    horarioFinal: number,
    listaNova: string[]
}

const TimePicker: React.FC = () => {
    const [estado, setEstado] = useState<estado>({
        horarioAtual: new Date().getHours() + 1, // Obter hora atual
        horarioFinal: 23, // Data limite
        listaNova: []
    });

    

    useEffect(() => {
        const { horarioAtual, horarioFinal } = estado;

        console.log("horario atual: " + horarioAtual);
        console.log("horario final:" + horarioFinal);

        if(horarioAtual != null && horarioFinal != null) {
            const novaLista: string[] = [];

            for (let i = horarioAtual; i <= horarioFinal; i++) {
                const time = i+":00" ;
                novaLista.push(time);
            }

            setEstado(prevState => ({
                ...prevState,
                listaNova: novaLista
            }))
        }

        console.log(estado.listaNova);
    }, [estado.horarioAtual, estado.horarioFinal]);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const selected = document.getElementsByClassName("active");
        
        selected[0]?.classList.remove("active");

        const clicked = (event.target as HTMLElement);

        clicked.classList.add("active");

    }

    return (
        <S.TimePickerContainer>
            {estado.listaNova.map(list => (
                <TimePick onClick={handleClick}> 
                    {list}
                </TimePick>
            ))}
        </S.TimePickerContainer>
    );
}       

export default TimePicker;