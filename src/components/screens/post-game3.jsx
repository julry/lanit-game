import styled from "styled-components"
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { PostGame } from "../shared/post-game";
import pic from '../../assets/images/game3final.png';
import bg from '../../assets/images/game3finalbg.svg';
import { CommonText } from "../shared/text";

const Content = styled.div`
    padding-top: ${({$ratio}) => $ratio * 18}px;
    padding-bottom: ${({$ratio}) => $ratio * 15}px;
`;

const Image = styled.img`
    width: ${({$ratio}) => $ratio * 308}px;
    height: ${({$ratio}) => $ratio * 236}px;
    object-fit: contain;
    margin-bottom: ${({$ratio}) => $ratio * 20}px;
`;

export const PostGame3 = () => {
    const ratio = useSizeRatio();

    return ( 
        <PostGame  
            level={4} 
            bg={bg}
        >
            <Content $ratio={ratio}>
                <Image src={pic} alt='' $ratio={ratio}/>
                <CommonText>
                    Обучение и развитие топ-менеджмента, кадрового резерва 
                    и тим-лидов играет ключевую роль в формировании высокоэффективных команд. 
                    Инвестируя в профессиональный рост сотрудников, компания обеспечивает 
                    себе устойчивое конкурентное преимущество.
                </CommonText>
            </Content>
        </PostGame>
    )
}