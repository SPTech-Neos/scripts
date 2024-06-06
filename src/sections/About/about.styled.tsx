import styled, {keyframes} from 'styled-components';
import Container from '../../components/Containers/Container/Container';
import { device } from '../../styles/breakpoints.styled';


const svgVariants = {
    item01: {
        rotate: keyframes`
            0% {
                transform: translate(calc(-800px * cos(85deg)), calc(-110px * sin(45deg)));
            }
            20% {
                transform: translate(calc(230px * cos(60deg)), calc(-280px * sin(45deg)));
            }
            40% {
                transform: translate(calc(-320px * cos(135deg)), calc(-130px * sin(45deg)));
            }
            60% {
                transform: translate(calc(-250px * cos(220deg)), calc(100px * sin(45deg)));
            }
            80% {
                transform: translate(calc(20px * cos(20deg)), calc(120px * sin(45deg)));
            }
            100% {
                transform: translate(calc(-800px * cos(85deg)), calc(-110px * sin(45deg)));
            }
        `,
    },
    item02: {
        rotate: keyframes`
            0% {
                transform: translate(calc(230px * cos(60deg)), calc(-280px * sin(45deg)));
            }
            20% {
                transform: translate(calc(-320px * cos(135deg)), calc(-130px * sin(45deg)));
            }
            40% {
                transform: translate(calc(-250px * cos(220deg)), calc(100px * sin(45deg)));
            }
            60% {
                transform: translate(calc(20px * cos(20deg)), calc(120px * sin(45deg)));
            }
            80% {
                transform: translate(calc(-500px * cos(85deg)), calc(-120px * sin(45deg)));
            }
            100% {
                transform: translate(calc(230px * cos(60deg)), calc(-280px * sin(45deg)));
            }
      `,
      
    },
    item03: {
        rotate: keyframes`
            0% {
                transform: translate(calc(-320px * cos(135deg)), calc(-130px * sin(45deg)));
            }
            20% {
                transform: translate(calc(-250px * cos(220deg)), calc(100px * sin(45deg)));
            }
            40% {
                transform: translate(calc(20px * cos(20deg)), calc(120px * sin(45deg)));
            }
            60% {
                transform: translate(calc(-550px * cos(85deg)), calc(-150px * sin(45deg)));
            }
            80% {
                transform: translate(calc(230px * cos(60deg)), calc(-280px * sin(45deg)));
            }
            100% {
                transform: translate(calc(-320px * cos(135deg)), calc(-130px * sin(45deg)));
            }
        `,

    },
    item04: {
        rotate: keyframes`
            0% {
                transform: translate(calc(-250px * cos(220deg)), calc(100px * sin(45deg))); 
            }
            20% {
                transform: translate(calc(20px * cos(20deg)), calc(120px * sin(45deg))); 
                
            }
            40% {
                transform: translate(calc(-500px * cos(85deg)), calc(-120px * sin(45deg)));
                
            }
            60% {
                transform: translate(calc(230px * cos(60deg)), calc(-280px * sin(45deg)));
                
            }
            80% {
                transform: translate(calc(-320px * cos(135deg)), calc(-130px * sin(45deg)));
            }
            100% {
                transform: translate(calc(-250px * cos(220deg)), calc(100px * sin(45deg)));
            }
        `,
      },
    item05: {
        rotate: keyframes`
          0% {
                transform: translate(calc(20px * cos(20deg)), calc(120px * sin(45deg)));
            }
            20% {
                transform: translate(calc(-500px * cos(85deg)), calc(-120px * sin(45deg)));
            }
            40% {
                transform: translate(calc(230px * cos(60deg)), calc(-280px * sin(45deg)));
            }
            60% {
                transform: translate(calc(-320px * cos(135deg)), calc(-130px * sin(45deg)));
            }
            80% {
                transform: translate(calc(-250px * cos(220deg)), calc(100px * sin(45deg)));
            }
            100% {
                transform: translate(calc(20px * cos(20deg)), calc(120px * sin(45deg)));
            }
        `,
      },
  };

export const About = styled.section`
    width: 100%;
    height: 100vh;
    max-height: 800px;

    position: relative;

    display: flex;
    flex-direction: column;
    
    justify-content: space-around;

    & .primary-title { max-width: 300px;}

    background-color: var(--color-gray-100);

    @media ${device.tablet} {
        & h1 { text-align: center; }

        max-height: 460px;
    }

`

export const AboutWrapper = styled(Container)`
    width: 90%;
    max-width: 1200px;
    height: 100%;

    justify-content: space-around;

    @media ${device.tablet} {
        gap: 40px;
    }
`;

export const AboutContainer = styled(Container)`
    width: 100%;
    justify-content: right;

`;

export const AsideRounded = styled.div`
    position: absolute;
    left: 0;

    width: 45vw;
    height: 280px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    background-color: #31335F;
    border-radius: 0px 400px 400px 0px;

    @media ${device.tablet} {
        top: 50%;
        width: 90vw;
        height: 200px;
    }

    @media ${device.mobileL} {
        width: 95vw;
    }
`;

export const Limiter = styled.div` /* #TODO transformar em componente */
    margin-right: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 80%;
    max-width: 630px;
    height: 90%;
    max-height: 166px;

    @media ${device.tablet} {
        align-items: start;
    }

    @media ${device.mobileL} {
        margin-left: 30px;
        text-align: justify;
    }
`;

export const SvgGroup = styled.div`
    display: flex;
    position: relative;
    width: 50%;
    height: 100%;
    min-height: 280px;

    @media ${device.tablet} {
        display: none;
    }
`;

export const AboutSvg = styled.img`
    z-index: 2;
    position: absolute;

    &.about-svg-item01{
        bottom: 0;
        right: 50%;
        transform: translate(calc(-800px * cos(85deg)), calc(-110px * sin(45deg)));
        animation: ${svgVariants.item01.rotate} 8s ease-in-out infinite;
    }

    &.about-svg-item02{
        bottom: 0;
        right: 50%;
        transform: translate(calc(230px * cos(60deg)), calc(-280px * sin(45deg)));
        animation: ${svgVariants.item02.rotate} 8s ease-in-out infinite;
    }

    &.about-svg-item03{
        bottom: 0;
        right: 50%;
        transform: translate(calc(-320px * cos(135deg)), calc(-130px * sin(45deg)));
        animation: ${svgVariants.item03.rotate} 8s ease-in-out infinite;
    }

    &.about-svg-item04{
        bottom: 0;
        right: 50%;
        transform: translate(calc(-250px * cos(220deg)), calc(100px * sin(45deg)));
        animation: ${svgVariants.item04.rotate} 8s ease-in-out infinite;
    }

    &.about-svg-item05{
        bottom: 0;
        right: 50%;
        transform: translate(calc(20px * cos(20deg)), calc(120px * sin(45deg)));
        animation: ${svgVariants.item05.rotate} 8s ease-in-out infinite;
    }

    &.about-svg-02{
        left:  10%;
        top: 0;
        position: absolute;
        z-index: 1;
    }
` 

