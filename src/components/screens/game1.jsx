import { Game } from "../shared/game";
import pic from "../../assets/images/game1.svg";
import bg from "../../assets/images/game1bg.png";
import { useProgress } from "../../contexts/ProgressContext";
import { GAME1_INDEX } from "../../constants/screens";

export const Game1 = () => {
    const { lastScreenIndex } = useProgress();
    return ( 
        <Game  
            picture={pic} 
            phrases={{
                1: 'Технологии\nкак искусство',
                7: 'Бежим\nбыстрее\nрынка',
                10: 'В режиме\nинноваций',
                12: 'Прокачаем\nот джуна\nдо эксперта',
            }}
            initialPuzzles={
                [2, 5, 4, 0, 10, 1, 6, 9, 12, 7, 3, 13, 8, 11, 15, 14]
            }
            bg={bg}
            level={1}
            isAlreadyFinished={lastScreenIndex > GAME1_INDEX}
            isFirstTimeRules={lastScreenIndex <= GAME1_INDEX}
        />
    )
}