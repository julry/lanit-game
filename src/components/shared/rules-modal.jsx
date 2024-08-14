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

export const RulesModal = ({ isFirstTime, onClose }) => {
    const ratio = useSizeRatio();

    return (
        <Wrapper>
            <Content $ratio={ratio}>
                <CommonText $ratio={ratio}>
                    Вам нужно двигать блоки так, чтобы они расположились в порядке от 1 до 15.{'\n'}
                    Для этого используйте пустую клетку — при нажатии на блок он переместится именно туда.{'\n'}{'\n'}
                    После верной расстановки откроется послание от ЛАНИТ.{'\n'}{'\n'}
                    <b>Обрати внимание:</b> при выходе из игры прогресс не сохраняется.
                </CommonText>
                <ButtonStyled onClick={onClose} $ratio={ratio}>
                    {isFirstTime ? 'Уровень 1' : 'Продолжить'}
                </ButtonStyled>
            </Content>
        </Wrapper>
    )
}