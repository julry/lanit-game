import styled from "styled-components"
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { PostGame } from "../shared/post-game";
import pic from '../../assets/images/game4final.png';
import bg from '../../assets/images/game4finalbg.svg';
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

export const PostGame4 = () => {
    const ratio = useSizeRatio();

    return ( 
        <PostGame  
            level={5} 
            bg={bg}
        >
            <Content $ratio={ratio}>
                <Image src={pic} alt='' $ratio={ratio}/>
                <CommonText>
                    Позаботьтесь о здоровье и благополучии с расширенным ДМС.{'\n'}
                    А также развивайтесь профессионально и достигайте своих целей с помощью 
                    карьерных и психологических консультаций.
                </CommonText>
            </Content>
        </PostGame>
    )
}