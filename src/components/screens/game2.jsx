import { Game } from "../shared/game";
import pic from "../../assets/images/game2.svg";
import bg from "../../assets/images/game2bg.png";
import { useProgress } from "../../contexts/ProgressContext";
import { GAME2_INDEX } from "../../constants/screens";

export const Game2 = () => {
    const { lastScreenIndex } = useProgress();

    return ( 
        <Game  
            picture={pic} 
            phrases={{
                1: 'Спортзал с\nтренажёрами\nи сауной',
                6: 'Футбол,\nволейбол,\nбаскетбол,\nбокс',
                8: 'Беговой\nи лыжный клубы',
                13: 'Йога\nна крыше,\nтеннис,\nшахматный\nклуб',
            }}
            initialPuzzles={
                [5, 0, 13, 1, 10, 14, 3, 15, 4, 8, 9, 2, 7, 12, 11, 6]
            }
            bg={bg}
            level={2}
            isAlreadyFinished={lastScreenIndex > GAME2_INDEX}
        />
    )
}