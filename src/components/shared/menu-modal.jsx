import styled from "styled-components";
import { FINAL_INDEX, GAME1_INDEX, GAME2_INDEX, GAME3_INDEX, GAME4_INDEX, GAME5_INDEX } from "../../constants/screens";
import { useProgress } from "../../contexts/ProgressContext";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Block } from "./block";
import { Button } from "./button";

const Wrapper = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 49, 66, 0.6);
    z-index: 1000;
`;

const Content = styled(Block)`
    position: relative;
    width: calc(100% - 2 * ${({$ratio}) => $ratio * 16}px);
    padding: ${({$ratio}) => $ratio * 24}px;
`;

const ButtonStyled = styled(Button)`
    margin-top: ${({$ratio}) => $ratio * 20}px;
    ${({$isCurrent}) => $isCurrent ? 'background: #FFFFFF; border: 2px solid #32CCFF; color: #32CCFF' : ''};

    &:disabled {
        background: #E9E9E9;
        border: 1px solid #C4C4C4;
        color: #C4C4C4;
        cursor: auto;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: ${({$ratio}) => $ratio * 10}px;
    right: ${({$ratio}) => $ratio * 10}px;
    width: ${({$ratio}) => $ratio * 20}px;
    height: ${({$ratio}) => $ratio * 20}px;
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;

    &::before, &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: ${({$ratio}) => $ratio * 4}px;
        height: ${({$ratio}) => $ratio * 24}px;
        background: #FF901D;
        border-radius: 1px;
    }

    &::before { 
        transform: translateX(-50%) rotate(45deg);
    }
    &::after { 
        transform: translateX(-50%) rotate(-45deg);
    }
`;

export const MenuModal = ({ onClose }) => {
    const { next, currentScreenIndex, lastScreenIndex } = useProgress();
    const ratio = useSizeRatio();

    const handleChooseLevel = (level) => {
        if (level === currentScreenIndex) {
            onClose();

            return;
        }

        next(level);
    }


    const GAMES = [GAME1_INDEX, GAME2_INDEX, GAME3_INDEX, GAME4_INDEX, GAME5_INDEX];

    return (
        <Wrapper>
            <Content $ratio={ratio}>
                <CloseButton $ratio={ratio} onClick={onClose}/>
                {GAMES.map((index, num) => (
                    <ButtonStyled 
                        key={`game${num}`}
                        onClick={() => handleChooseLevel(index)} 
                        $ratio={ratio} 
                        $isCurrent={lastScreenIndex === index || lastScreenIndex === (index - 1)} 
                        disabled={lastScreenIndex < index - 1}
                    >
                        Уровень {num + 1}
                    </ButtonStyled>
                ))}
                {
                    lastScreenIndex === FINAL_INDEX && (
                        <ButtonStyled 
                            onClick={() => handleChooseLevel(FINAL_INDEX)} 
                            $ratio={ratio} 
                            $isCurrent={true} 
                        >
                            Финал
                        </ButtonStyled>
                    )
                }
            </Content>
        </Wrapper>
    )
}