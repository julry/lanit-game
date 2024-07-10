import styled from "styled-components"
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { PostGame } from "../shared/post-game";
import pic from '../../assets/images/game5final.png';
import bg from '../../assets/images/game5finalbg.svg';
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

export const PostGame5 = () => {
    const ratio = useSizeRatio();

    return ( 
        <PostGame  
            bg={bg}
            isLast
        >
            <Content $ratio={ratio}>
                <Image src={pic} alt='' $ratio={ratio}/>
                <CommonText>
                    Погрузитесь в киберспортивную атмосферу и сообщества по интересам для обмена идеями. 
                    Тематические активности наполнят ваши рабочие будни ощущением праздника{'\n'}и разнообразия!
                </CommonText>
            </Content>
        </PostGame>
    )
}