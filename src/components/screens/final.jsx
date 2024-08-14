import { useState } from "react";
import styled from "styled-components";
import bg from "../../assets/images/finalbg.svg";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { reachMetrikaGoal } from "../../utils/reachMetrikaGoal";
import { Button } from "../shared/button";
import { LogoBlock } from "../shared/logo-block"
import { MenuButton } from "../shared/menu-button";
import { MenuModal } from "../shared/menu-modal";
import { CommonText } from "../shared/text"

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${bg}) no-repeat 0 0 / cover;
    padding: 0 ${({$ratio}) => $ratio * 17}px;
`;

const Content = styled.div`
    margin: ${({$ratio}) => $ratio * 20}px ${({$ratio}) => $ratio * 24}px ${({$ratio}) => $ratio * 24}px;
    
    & button {
        margin-top: ${({$ratio}) => $ratio * 20}px;
    }
`;

const MenuButtonStyled = styled(MenuButton)`
    position: absolute;
    top: ${({$ratio}) => $ratio * 16}px;
    left: ${({$ratio}) => $ratio * 16}px;
`;

export const Final = () => {
    const [isMenu, setIsMenu] = useState(false);
    const ratio = useSizeRatio();

    const handleOpenLink = () => {
        reachMetrikaGoal('calendar');
        window.open('https://advent.lanit.ru/', '_blank');
    }

    return (
        <>
            <Wrapper $ratio={ratio}>
                <MenuButtonStyled $ratio={ratio} ratio={ratio} onClick={() =>setIsMenu(true)}/>
                <LogoBlock>
                    <Content $ratio={ratio}>
                        <CommonText>
                            Теперь вы во всех подробностях знаете, почему работать{'\n'}в ЛАНИТ — это классно!
                        </CommonText>
                        <br/>
                        <br/>
                        <CommonText>
                            <b>
                                Пора открывать и новые грани ЛАНИТ — переходите{'\n'}
                                в адвент-календарь, изучайте компанию и выходите на новый уровень!
                            </b>
                        </CommonText>

                        <Button onClick={handleOpenLink}>Перейти</Button>
                    </Content>
                </LogoBlock>
            </Wrapper>
            {isMenu && (
                <MenuModal onClose={() => setIsMenu(false)}/>
            )}
        </>
    )
}