import styled from "styled-components";
import { useSizeRatio } from "../../contexts/SizeRatioContext";

const Wrapper = styled.div`
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: ${({$ratio}) => $ratio * 8}px;
    text-align: center;
    white-space: pre-line;
    width: 100%;
`;

export const Block = (props) => {
    const ratio = useSizeRatio();

    return <Wrapper {...props} $ratio={ratio} />
}