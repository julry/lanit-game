import {createContext, useContext, useState} from 'react'
import {screens} from "../constants/screens";
import {getUrlParam} from "../utils/getUrlParam";

const INITIAL_STATE = {
    screen: 0,
    lastScreenIndex: 0,
    lastPosition: [],
}

const ProgressContext = createContext(INITIAL_STATE)

export function ProgressProvider(props) {
    const {children} = props;
    const [currentScreenIndex, setCurrentScreenIndex] = useState(getUrlParam('screen') || INITIAL_STATE.screen);
    const [lastScreenIndex, setLastScreenIndex] = useState(getUrlParam('screen') || INITIAL_STATE.lastScreenIndex);
    const [lastPosition, setLastPosition] = useState(INITIAL_STATE.lastPosition);
    const screen = screens[currentScreenIndex];

    function next(screen) {
        const nextScreenIndex = screen ?? (currentScreenIndex + 1);
        if (nextScreenIndex > screens.length - 1) return;
        
        changeLastScreenIndex(nextScreenIndex);
        setCurrentScreenIndex(nextScreenIndex);
    }

    const changeLastScreenIndex = (index) => {
        if (index < lastScreenIndex) return;

        setLastScreenIndex(index);
    }

    const state = {
        screen,
        next,
        currentScreenIndex,
        lastScreenIndex,
        lastPosition,
        setLastPosition
    }

    return (
        <ProgressContext.Provider value={state}>
            {children}
        </ProgressContext.Provider>
    )
}

export function useProgress() {
    return useContext(ProgressContext)
}
