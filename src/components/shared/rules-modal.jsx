import { useState } from "react";
import styled from "styled-components";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Block } from "./block";
import { Button } from "./button";
import { CommonText } from "./text";

const Wrapper = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 49, 66, 0.6);
`;

const Content = styled(Block)`
    width: calc(100% - 2 * ${({$ratio}) => $ratio * 16}px);
    padding: ${({$ratio}) => $ratio * 24}px;
`;

const ButtonStyled = styled(Button)`
    margin-top: ${({$ratio}) => $ratio * 20}px;
`;

export const RulesModal = ({ isFirstTime, onClose, setIsRules }) => {
    const [part, setPart] = useState(0);
    const ratio = useSizeRatio();

    const handleNextClick = () => {
        setPart(prev => prev + 1);
        setIsRules(true);
    }

    const handleClick = () => {
        setIsRules(false);
        onClose();
    }

    return (
        <Wrapper>
            <Content $ratio={ratio}>
                <CommonText $ratio={ratio}>
                    {part === 0 ? (
                        <>
                            Вам нужно <b>двигать блоки</b> так, чтобы они расположились в порядке от 1 до 15.{'\n'}
                            Для этого используйте пустую клетку — <b>при нажатии на блок</b> он переместится именно туда.{'\n'}{'\n'}
                            После верной расстановки откроется <b>послание от ЛАНИТ</b>.
                            Запоминайте фразы — они вам скоро пригодятся.{'\n'}{'\n'}
                            <b>Обрати внимание:</b> при выходе из игры прогресс не сохраняется, поэтому лучше проходить игру за один раз.
                        </>
                    ): (
                        <>
                            Здесь находится <b>меню</b> — вы можете вернуться в него в любой момент,{' '}
                            чтобы <b>посмотреть финальные фразы</b> пройденных уровней.{'\n\n'}
                            Отсюда же можно будет <b>вернуться</b> в прогресс текущего уровня. Проходить уровни заново не потребуется.
                        </>
                    )}
                </CommonText>
                {part === 0 ? (
                    <ButtonStyled onClick={handleNextClick} $ratio={ratio}>
                        Далее
                    </ButtonStyled>
                ): (
                    <ButtonStyled onClick={handleClick} $ratio={ratio}>
                        {isFirstTime ? 'Уровень 1' : 'Продолжить'}
                    </ButtonStyled>
                )}
            </Content>
        </Wrapper>
    )
}