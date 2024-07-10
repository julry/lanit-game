import styled from 'styled-components';
import { useSizeRatio } from '../../contexts/SizeRatioContext';

const Wrapper = styled.button`
    outline: none;
    border: none;
    padding: ${({$ratio}) => $ratio * 11}px 0 ${({$ratio}) => $ratio * 14}px;
    border-radius: ${({$ratio}) => $ratio * 4}px;
    font-weight: 700;
    color: #ffffff;
    width: 100%;
    font-size: ${({$ratio}) => $ratio * 16}px;
    background-color: #32CCFF;
    cursor: pointer;
`;

export const Button = (props) => {
    const ratio = useSizeRatio();

    return <Wrapper {...props} $ratio={ratio} />
}
