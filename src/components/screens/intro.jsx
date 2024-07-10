import styled from "styled-components";
import intro from '../../assets/images/intro.svg';
import pic from '../../assets/images/gamepic.svg';
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { LogoBlock } from "../shared/logo-block";
import { Button } from "../shared/button";
import { useProgress } from "../../contexts/ProgressContext";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${intro}) no-repeat 0 0 / cover;
    padding: ${({$ratio}) => $ratio * 74}px ${({$ratio}) => $ratio * 17}px;
`;

const Pic = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: ${({$ratio}) => $ratio * 373}px;
    height: ${({$ratio}) => $ratio * 266}px;
    background: url(${pic}) no-repeat 0 0 / contain;
    z-index: 1;
`;

const TextContent = styled.div`
    padding: ${({$ratio}) => $ratio * 20}px 0;
`;

const LogoBlockStyled = styled(LogoBlock)`
    padding-left: ${({$ratio}) => $ratio * 24}px;
    padding-right: ${({$ratio}) => $ratio * 24}px;
    padding-bottom: ${({$ratio}) => $ratio * 24}px;
`;

export const Intro = () => {
    const ratio = useSizeRatio();
    const { next } = useProgress();

    const handleNext = () => {
        next();
    }

    return (
        <Wrapper $ratio={ratio}>
            <LogoBlockStyled $ratio={ratio}>
                <TextContent $ratio={ratio}>
                    Под фигурами на поле скрыты фразы: из них вы узнаете об атмосфере в компании. 
                    Каждый уровень будет открывать вам преимущества работы в ЛАНИТ.{'\n\n'}
                    <b>Выйдите за рамки и узнайте максимум подробностей!</b>
                </TextContent>
                <Button onClick={handleNext}>
                    Играть
                </Button>
            </LogoBlockStyled>
            <Pic $ratio={ratio}/>
        </Wrapper>
    )
}