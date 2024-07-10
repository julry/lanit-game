import styled from "styled-components"
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { PostGame } from "../shared/post-game";
import pic from '../../assets/images/game1final.png';
import bg from '../../assets/images/game1finalbg.svg';
import { CommonText } from "../shared/text";

const Content = styled.div`
    padding-top: ${({$ratio}) => $ratio * 8}px;
    padding-bottom: ${({$ratio}) => $ratio * 17}px;
`;

const Image = styled.img`
    width: ${({$ratio}) => $ratio * 308}px;
    height: ${({$ratio}) => $ratio * 236}px;
    object-fit: contain;
    margin-bottom: ${({$ratio}) => $ratio * 20}px;
`;

export const PostGame1 = () => {
    const ratio = useSizeRatio();

    return ( 
        <PostGame  
            level={2} 
            bg={bg}
        >
            <Content $ratio={ratio}>
                <Image src={pic} alt='' $ratio={ratio}/>
                <CommonText>
                    Прокачайте свои навыки от джуна до эксперта с помощью вебинаров,{'\n'}
                    онлайн-курсов и тренингов.{'\n'}А также посещайте внутренние профессиональные 
                    митапы и конференции, чтобы делиться опытом с коллегами.
                </CommonText>
            </Content>
        </PostGame>
    )
}