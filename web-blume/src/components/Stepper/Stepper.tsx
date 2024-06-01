import React from 'react';
import * as S from './stepper.style';

import { useMediaQuery } from 'react-responsive';

export const Stepper: React.FC<S.StepperProps> = ({ steps, currentStep }) => {

    function Line({ state }: { state: string }) {
        const states = ['complete', 'pending'];

        if (!states.includes(state)) state = 'pending';

        const isBelow470 = useMediaQuery({ maxWidth: 470 });
        const isAbove1700 = useMediaQuery({ minWidth: 1700 });

        let qtyCircles: number;
        qtyCircles = isAbove1700 ? 8 : 6
        qtyCircles = isBelow470 ? 3 : qtyCircles;

        function generateCircles() {
            let circlesArray = [];

            for (let i = 0; i < qtyCircles; i++) {
                circlesArray.push(
                    <S.Circle key={i} />
                );
            }

            return circlesArray;
        }

        return (
            <S.Line>
                {generateCircles()}
            </S.Line>
        )
    }

    function Step({ state }: { state: string }) {
        const states = ['complete', 'onGoing', 'pending'];
        if (!states.includes(state)) state = 'pending';

        return (
            <S.Step />
        )
    }

    function generateSteps() {
        let stepsArray = [];
        let stepStates = [];

        for (let i = 1; i <= steps; i++) {
            let state;
            if (i === currentStep) {
                state = 'onGoing';
            } else if (i < currentStep) {
                state = 'complete';
            } else {
                state = 'pending';
            }
            stepsArray.push(
                <Step key={`step${i}`} state={state} />
            );
            stepStates.push(state);
        }

        return { stepsArray, stepStates };
    }

    function generateLines(stepStates: string[]) {
        let linesArray = [];

        for (let i = 0; i < stepStates.length - 1; i++) {
            const lineState = stepStates[i] === 'complete' ? 'complete' : 'pending';
            linesArray.push(
                <Line key={`line${i}`} state={lineState} />
            );
        }

        return linesArray;
    }

    const { stepsArray, stepStates } = generateSteps();

    function generateStepper() {
        let stepper = [];

        for (let i = 0; i < stepsArray.length; i++) {
            stepper.push(stepsArray[i]);

            if (i < stepStates.length - 1) {
                stepper.push(generateLines(stepStates)[i]);
            }
        }

        return stepper;
    }

    return (
        <S.Stepper>
            {generateStepper()}
        </S.Stepper>
    );
}
