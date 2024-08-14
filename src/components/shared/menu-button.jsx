import styled from "styled-components";

import { Button } from "./button";

const ActionButton = styled(Button)`
    width: ${({$ratio}) => $ratio * 48}px;
    height: ${({$ratio}) => $ratio * 36}px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    flex-shrink: 0;

    & svg {
        width: ${({$ratio}) => $ratio * 24}px;
        height: ${({$ratio}) => $ratio * 24}px;
    }
`;


export const MenuButton = ({ratio, ...props}) => (
    <ActionButton {...props} $ratio={ratio}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="4" width="24" height="4" rx="1" fill="white"/>
            <rect y="4" width="24" height="4" rx="1" fill="white"/>
            <rect y="10" width="24" height="4" rx="1" fill="white"/>
            <rect y="10" width="24" height="4" rx="1" fill="white"/>
            <rect y="16" width="24" height="4" rx="1" fill="white"/>
            <rect y="16" width="24" height="4" rx="1" fill="white"/>
        </svg>
    </ActionButton>
);
