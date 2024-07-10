import styled from "styled-components"
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { PostGame } from "../shared/post-game";
import pic from '../../assets/images/game2final.png';
import bg from '../../assets/images/game2finalbg.svg';
import { CommonText } from "../shared/text";

const Content = styled.div`
    padding-top: ${({$ratio}) => $ratio * 17}px;
    padding-bottom: ${({$ratio}) => $ratio * 22}px;
`;

const Image = styled.img`
    width: ${({$ratio}) => $ratio * 308}px;
    height: ${({$ratio}) => $ratio * 236}px;
    object-fit: contain;
    margin-bottom: ${({$ratio}) => $ratio * 20}px;
`;

export const PostGame2 = () => {
    const ratio = useSizeRatio();

    return ( 
        <PostGame  
            level={3} 
            bg={bg}
        >
            <Content $ratio={ratio}>
                <Image src={pic} alt='' $ratio={ratio}/>
                <CommonText>
                    Спортивные клубы и команды, тренажёрный зал с сауной — всё{'\n'}для вашего 
                    активного образа жизни.{'\n'}Каждый найдёт спорт себе по душе!
                </CommonText>
            </Content>
        </PostGame>
    )
}