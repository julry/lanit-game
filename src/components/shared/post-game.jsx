import { useState } from "react";
import styled from "styled-components";
import { useProgress } from "../../contexts/ProgressContext";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import {reachMetrikaGoal } from '../../utils/reachMetrikaGoal';
import { Button } from "./button";
import { LogoBlock } from "./logo-block";
import { MenuButton } from "./menu-button";
import { MenuModal } from "./menu-modal";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
    background: url(${({$bg}) => $bg}) no-repeat 0 0 / cover;
    padding: ${({$ratio}) => $ratio * 16}px;
`;

const ButtonStyled = styled(Button)`
    margin-top: ${({$ratio}) => $ratio * 16}px;
`;

const LogoBlockStyled = styled(LogoBlock)`
    padding-left: ${({$ratio}) => $ratio * 17}px; 
    padding-right: ${({$ratio}) => $ratio * 17}px; 
`;

const MenuButtonStyled = styled(MenuButton)`
    position: absolute;
    top: ${({$ratio}) => $ratio * 16}px;
    left: ${({$ratio}) => $ratio * 16}px;
`;

export const PostGame = ({level, bg, isLast, children}) => {
    const [isMenu, setIsMenu] = useState(false);
    const {next} = useProgress();
    const ratio = useSizeRatio();

    const handleNext = () => {
        reachMetrikaGoal(`level${level ? level - 1 : 5}`);
        next();
    }

    return (
        <>
            <Wrapper $ratio={ratio} $bg={bg}>
                <MenuButtonStyled $ratio={ratio} ratio={ratio} onClick={() => setIsMenu(true)}/>
                <div>
                    <LogoBlockStyled $ratio={ratio}>
                        {children}
                    </LogoBlockStyled>
                    <ButtonStyled $ratio={ratio} onClick={handleNext}>
                        {isLast ? 'Далее' : `Уровень ${level}`}
                    </ButtonStyled>
                </div>
            </Wrapper>
            {isMenu && (
                <MenuModal onClose={() => setIsMenu(false)}/>
            )}
        </>
    )
}