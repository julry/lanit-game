import styled from "styled-components";
import logo from '../../assets/images/logo.svg';
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Block } from "./block";

const Wrapper = styled(Block)`
    position: relative;
    z-index: 100;
    padding-top: ${({$ratio}) => $ratio * 24}px; 
`;

const Logo = styled.div`
    width: ${({$ratio}) => $ratio * 141}px; 
    height: ${({$ratio}) => $ratio * 32}px; 
    background: url(${logo}) no-repeat 0 0 / cover;
`;


export const LogoBlock = (props) => {
    const ratio = useSizeRatio();

    return (
        <Wrapper $ratio={ratio} {...props}>
            <Logo $ratio={ratio}/>
            {props.children}
        </Wrapper>
    )
}